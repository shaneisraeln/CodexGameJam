import {
    GameObject
} from '../Engine/Core/GameObject.js';
import {
    CollisionLayer
} from '../Engine/Physics/CollisionWorld.js';
import {
    Poof
} from './Poof.js';
import CONTINENT from '../CustomMapNoise.js';

// ── Terrain constants (must match main.js / FirstPersonController) ────────
var TERRAIN_OFFSET_X = -(255 * Math.sqrt(3) / 2);
var TERRAIN_OFFSET_Z = -(255 * 1.5 / 2);
var TERRAIN_SCALE_Y = 0.4;
var WATER_LEVEL = -7;
var MIN_WATER_CLEAR = 0.35;

function getGroundHeight(x, z) {
    var nx = x - TERRAIN_OFFSET_X;
    var nz = z - TERRAIN_OFFSET_Z;
    var value = CONTINENT.getValue(nx, nz, 0);
    var h = (value <= 0.3 ? 20 / 255 : 0.4 + value) * 20 * TERRAIN_SCALE_Y - 11;
    if (h <= WATER_LEVEL + MIN_WATER_CLEAR) return null;
    return h;
}

// ── Tuning ────────────────────────────────────────────────────────────────
var TURN_SPEED = Math.PI * 1.8;
var WANDER_CHANGE_MIN = 1.5;
var WANDER_CHANGE_MAX = 4.0;
var WANDER_TURN_MAX = Math.PI * 0.6;
var STEP_HEIGHT = 3.5;
var ENEMY_RADIUS = 0.55;
var ENEMY_HEIGHT = 2.2;

var CULL_DIST = 90;
var CULL_DIST_SQ = CULL_DIST * CULL_DIST;

var CHASE_START_DIST = 14;
var CHASE_GIVE_UP_DIST = 35;
var CHASE_GIVE_UP_SQ = CHASE_GIVE_UP_DIST * CHASE_GIVE_UP_DIST;
var CHASE_GIVE_UP_TIME = 4.0;

var ATTACK_COOLDOWN = 1.2;

// Knockback
var KNOCKBACK_FRICTION = 8.0; // higher = stops faster (exponential decay)
var KNOCKBACK_MAX_SPEED = 18.0; // clamp so a hit can't teleport the enemy

// Hit-flash
var HIT_FLASH_DURATION = 0.18; // seconds the scale-pop lasts
var HIT_SCALE_PEAK = 1.35; // scale multiplier at peak of flash

export class Enemy extends GameObject {
    constructor(renderer, material, mesh, name, options) {
        if (name === undefined) name = 'Enemy';
        if (options === undefined) options = {};
        super(renderer, material, mesh, name);

        // ── Stats ──────────────────────────────────────────────────────
        this.maxHp = options.maxHp !== undefined ? options.maxHp : 50;
        this.hp = this.maxHp;
        this.damage = options.damage !== undefined ? options.damage : 10;
        this.moveSpeed = options.moveSpeed !== undefined ? options.moveSpeed : 3.2;
        this.chaseSpeed = options.chaseSpeed !== undefined ? options.chaseSpeed : 4.5;
        this.detectionRange = options.detectionRange !== undefined ? options.detectionRange : CHASE_START_DIST;
        this.attackRange = options.attackRange !== undefined ? options.attackRange : 1.8;

        // hitRadius — world-space hit sphere for FirstPersonHand ray-sphere test.
        // Enemy scale is 3× in EnemySpawner, so we set this in world-space units directly.
        this.hitRadius = options.hitRadius !== undefined ? options.hitRadius : 2.0;

        // ── State ──────────────────────────────────────────────────────
        this.state = 'wander';
        this.isDead = false;
        this._stateTime = 0;

        // ── Movement ───────────────────────────────────────────────────
        this.heading = Math.random() * Math.PI * 2;
        this._targetHeading = this.heading;
        this._wanderTimer = WANDER_CHANGE_MIN + Math.random() * (WANDER_CHANGE_MAX - WANDER_CHANGE_MIN);

        // ── Knockback ──────────────────────────────────────────────────
        // Velocity impulse (world units/s) applied by takeDamage,
        // decays exponentially each frame via KNOCKBACK_FRICTION.
        this._knockbackX = 0;
        this._knockbackZ = 0;

        // ── Hit flash ──────────────────────────────────────────────────
        this._hitFlashTimer = 0; // counts down from HIT_FLASH_DURATION
        this._baseScaleX = null; // set on first update
        this._baseScaleY = null;
        this._baseScaleZ = null;

        // ── Chase give-up ──────────────────────────────────────────────
        this._giveUpTimer = 0;

        // ── Attack ─────────────────────────────────────────────────────
        this._attackTimer = 0;

        // ── Collision ──────────────────────────────────────────────────
        this.collider = null;
        this.groupId = -1;
    }

    // ── Public API ────────────────────────────────────────────────────────

    /**
     * Receive a sword hit.
     * @param {number} amount   Damage dealt.
     * @param {{x,y,z}} fromPos  World position the hit came from (for knockback direction).
     * @param {Camera}  camera   Needed by Poof to project death position.
     * @returns {number}  Actual damage applied (0 if already dead).
     */
    takeDamage(amount, fromPos, camera) {
        if (this.isDead) return 0;

        // ── Apply damage ───────────────────────────────────────────────
        var prev = this.hp;
        this.hp = Math.max(0, this.hp - amount);
        var applied = prev - this.hp;

        // ── Knockback impulse ──────────────────────────────────────────
        if (fromPos) {
            var dx = this.transform.position.x - fromPos.x;
            var dz = this.transform.position.z - fromPos.z;
            var len = Math.sqrt(dx * dx + dz * dz);
            if (len < 0.001) {
                dx = 1;
                dz = 0;
                len = 1;
            }
            var force = Math.min(amount * 0.55, KNOCKBACK_MAX_SPEED);
            this._knockbackX = (dx / len) * force;
            this._knockbackZ = (dz / len) * force;
        }

        // ── Hit flash ──────────────────────────────────────────────────
        this._hitFlashTimer = HIT_FLASH_DURATION;

        // ── Aggro — always chase whoever hit us ────────────────────────
        if (this.state === 'wander') this._setState('chase');
        this._giveUpTimer = 0; // reset give-up regardless of distance

        // ── Death ──────────────────────────────────────────────────────
        if (this.hp === 0) {
            this._die(camera);
            return applied;
        }

        return applied;
    }

    /**
     * Per-frame update.
     * @param {number} dt
     * @param {{
     *   playerPosition: {x,y,z},
     *   playerHealth,
     *   collisionWorld,
     *   camera,
     *   allEnemies: Enemy[]
     * }} context
     */
    update(dt, context) {
        if (context === undefined) context = {};
        if (this.isDead) return;

        // Store base scale on first frame (set by EnemySpawner)
        if (this._baseScaleX === null) {
            this._baseScaleX = this.transform.scale.x;
            this._baseScaleY = this.transform.scale.y;
            this._baseScaleZ = this.transform.scale.z;
        }

        var pp = context.playerPosition;

        // ── Distance cull ──────────────────────────────────────────────
        if (pp) {
            var dxC = this.transform.position.x - pp.x;
            var dzC = this.transform.position.z - pp.z;
            if (dxC * dxC + dzC * dzC > CULL_DIST_SQ) {
                if (this.state !== 'wander') this._setState('wander');
                return;
            }
        }

        this._stateTime += dt;

        // ── Hit flash (scale pop) ──────────────────────────────────────
        if (this._hitFlashTimer > 0) {
            this._hitFlashTimer -= dt;
            if (this._hitFlashTimer < 0) this._hitFlashTimer = 0;

            // Smooth bell-curve: peaks at mid-flash, returns to 1 at end
            var flashProgress = 1.0 - (this._hitFlashTimer / HIT_FLASH_DURATION);
            var flashScale = 1.0 + (HIT_SCALE_PEAK - 1.0) * Math.sin(flashProgress * Math.PI);
            this.transform.scale.set(
                this._baseScaleX * flashScale,
                this._baseScaleY * flashScale,
                this._baseScaleZ * flashScale
            );
        } else {
            // Ensure scale is restored precisely when flash ends
            this.transform.scale.set(this._baseScaleX, this._baseScaleY, this._baseScaleZ);
        }

        // ── Knockback decay ────────────────────────────────────────────
        var hasKnockback = Math.abs(this._knockbackX) > 0.01 || Math.abs(this._knockbackZ) > 0.01;
        if (hasKnockback) {
            var decay = Math.exp(-KNOCKBACK_FRICTION * dt);
            this._knockbackX *= decay;
            this._knockbackZ *= decay;

            var kpos = this.transform.position;
            var knewX = kpos.x + this._knockbackX * dt;
            var knewZ = kpos.z + this._knockbackZ * dt;

            // Terrain confinement for knockback too
            var kgx = getGroundHeight(knewX, kpos.z);
            if (kgx !== null) kpos.x = knewX;
            var kgz = getGroundHeight(kpos.x, knewZ);
            if (kgz !== null) kpos.z = knewZ;

            // Snap Y
            var kg = getGroundHeight(kpos.x, kpos.z);
            if (kg !== null) kpos.y = kg;

            // Sync collider
            if (this.collider && context.collisionWorld) {
                context.collisionWorld.update(
                    this.collider, kpos.x, kpos.y, kpos.z
                );
            }
        }

        // ── AI states ──────────────────────────────────────────────────
        if (this.state === 'wander') this._updateWander(dt, context);
        else if (this.state === 'chase') this._updateChase(dt, context);
        else if (this.state === 'attack') this._updateAttack(dt, context);

        // ── Sync collider ──────────────────────────────────────────────
        if (this.collider && context.collisionWorld) {
            context.collisionWorld.update(
                this.collider,
                this.transform.position.x,
                this.transform.position.y,
                this.transform.position.z
            );
        }
    }

    // ── State handlers ────────────────────────────────────────────────────

    _updateWander(dt, context) {
        var pp = context.playerPosition;
        if (pp) {
            var dx = pp.x - this.transform.position.x;
            var dz = pp.z - this.transform.position.z;
            if (dx * dx + dz * dz <= this.detectionRange * this.detectionRange) {
                this._setState('chase');
                return;
            }
        }

        this._wanderTimer -= dt;
        if (this._wanderTimer <= 0) {
            this._wanderTimer = WANDER_CHANGE_MIN + Math.random() * (WANDER_CHANGE_MAX - WANDER_CHANGE_MIN);
            this._targetHeading = this.heading + (Math.random() - 0.5) * 2 * WANDER_TURN_MAX;
        }
        this._moveForward(dt, this.moveSpeed, context);
    }

    _updateChase(dt, context) {
        var pp = context.playerPosition;
        if (!pp) {
            this._setState('wander');
            return;
        }

        var dx = pp.x - this.transform.position.x;
        var dz = pp.z - this.transform.position.z;
        var distSq = dx * dx + dz * dz;

        if (distSq > CHASE_GIVE_UP_SQ) {
            this._giveUpTimer += dt;
            if (this._giveUpTimer >= CHASE_GIVE_UP_TIME) {
                this._giveUpTimer = 0;
                this._setState('wander');
                return;
            }
        } else {
            this._giveUpTimer = 0;
        }

        if (distSq <= this.attackRange * this.attackRange) {
            this._setState('attack');
            return;
        }

        this._targetHeading = Math.atan2(dx, dz);
        this._moveForward(dt, this.chaseSpeed, context);
    }

    _updateAttack(dt, context) {
        var pp = context.playerPosition;
        if (!pp) {
            this._setState('wander');
            return;
        }

        var dx = pp.x - this.transform.position.x;
        var dz = pp.z - this.transform.position.z;
        var distSq = dx * dx + dz * dz;

        if (distSq > this.attackRange * this.attackRange * 1.6) {
            this._setState('chase');
            return;
        }

        this._targetHeading = Math.atan2(dx, dz);
        this._smoothTurn(dt);
        this.transform.rotation.y = this.heading;

        this._attackTimer += dt;
        if (this._attackTimer >= ATTACK_COOLDOWN) {
            this._attackTimer = 0;
            if (context.playerHealth) {
                context.playerHealth.takeDamage(this.damage);
            }
        }
    }

    // ── Movement ──────────────────────────────────────────────────────────

    _moveForward(dt, speed, context) {
        this._smoothTurn(dt);

        var pos = this.transform.position;
        var step = speed * dt;
        var dx = Math.sin(this.heading) * step;
        var dz = Math.cos(this.heading) * step;

        var newX = pos.x;
        var newZ = pos.z;

        var gx = getGroundHeight(pos.x + dx, pos.z);
        if (gx !== null && Math.abs(gx - pos.y) <= STEP_HEIGHT) {
            newX = pos.x + dx;
        } else {
            this._targetHeading = this.heading + Math.PI * (0.4 + Math.random() * 0.4);
        }

        var gz = getGroundHeight(newX, pos.z + dz);
        if (gz !== null && Math.abs(gz - pos.y) <= STEP_HEIGHT) {
            newZ = pos.z + dz;
        } else {
            this._targetHeading = this.heading + Math.PI * (0.4 + Math.random() * 0.4);
        }

        if (context.collisionWorld && this.collider) {
            var floor = pos.y - ENEMY_HEIGHT * 0.5;
            var ceil = pos.y + ENEMY_HEIGHT;
            var resolved = context.collisionWorld.resolveCircle(
                newX, newZ, ENEMY_RADIUS, {
                    minY: floor,
                    maxY: ceil,
                    layerMask: CollisionLayer.WORLD | CollisionLayer.NPC,
                    actorLayer: CollisionLayer.NPC,
                    exclude: this.collider
                }
            );
            newX = resolved.x;
            newZ = resolved.z;
        }

        pos.x = newX;
        pos.z = newZ;

        var ground = getGroundHeight(pos.x, pos.z);
        if (ground !== null) pos.y = ground;

        this.transform.rotation.y = this.heading;
    }

    // ── Helpers ───────────────────────────────────────────────────────────

    _smoothTurn(dt) {
        var delta = this._normalizeAngle(this._targetHeading - this.heading);
        var maxStep = TURN_SPEED * dt;
        if (delta > maxStep) delta = maxStep;
        if (delta < -maxStep) delta = -maxStep;
        this.heading += delta;
    }

    _normalizeAngle(a) {
        while (a > Math.PI) a -= Math.PI * 2;
        while (a < -Math.PI) a += Math.PI * 2;
        return a;
    }

    _setState(s) {
        if (this.state === s) return;
        this.state = s;
        this._stateTime = 0;
        if (s === 'attack') this._attackTimer = ATTACK_COOLDOWN;
        if (s === 'wander') this._giveUpTimer = 0;
    }

    _die(camera) {
        this.isDead = true;
        this.state = 'dead';
        this.active = false;

        // Poof at chest height (Y + 1 world unit above feet)
        if (camera) {
            var poofPos = {
                x: this.transform.position.x,
                y: this.transform.position.y + 1.0,
                z: this.transform.position.z
            };
            Poof.spawn(poofPos, camera);
        }
    }
}