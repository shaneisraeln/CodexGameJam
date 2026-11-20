import {
    GameObject
} from '../Engine/Core/GameObject.js';
import {
    CollisionLayer
} from '../Engine/Physics/CollisionWorld.js';
import CONTINENT from '../CustomMapNoise.js';

// ── Terrain constants (must match main.js / FirstPersonController) ──────────
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

// ── Tuning ───────────────────────────────────────────────────────────────────
var TURN_SPEED = Math.PI * 1.8; // rad/s
var WANDER_CHANGE_MIN = 1.5; // seconds
var WANDER_CHANGE_MAX = 4.0;
var WANDER_TURN_MAX = Math.PI * 0.6;
var STEP_HEIGHT = 3.5;
var ENEMY_RADIUS = 0.55; // collision circle radius (world units)
var ENEMY_HEIGHT = 2.2; // approx capsule height

var CULL_DIST = 90; // AI completely frozen beyond this
var CULL_DIST_SQ = CULL_DIST * CULL_DIST;

var CHASE_START_DIST = 14; // detection range
var CHASE_GIVE_UP_DIST = 35; // start counting give-up timer at this distance
var CHASE_GIVE_UP_SQ = CHASE_GIVE_UP_DIST * CHASE_GIVE_UP_DIST;
var CHASE_GIVE_UP_TIME = 4.0; // seconds at give-up distance before returning to wander

var ATTACK_COOLDOWN = 1.2; // seconds between damage ticks

/**
 * Enemy — hostile NPC with terrain-hugging movement and collision.
 *
 * Collision integration:
 *   - Each enemy owns a dynamic circle collider on the NPC layer.
 *   - After every move step, resolveCircle() pushes it out of WORLD objects
 *     and other NPC colliders so enemies can't stack or phase through scenery.
 *   - The player's resolveCircle already queries NPC layer (mask 0xffffffff),
 *     so the player is naturally blocked by enemies too.
 *
 * Chase / give-up:
 *   - Chase starts when player enters detectionRange.
 *   - Receiving damage also triggers chase regardless of distance.
 *   - Give-up requires the player to stay beyond CHASE_GIVE_UP_DIST for
 *     CHASE_GIVE_UP_TIME seconds continuously — a brief sprint away won't
 *     shake them off.
 */
export class Enemy extends GameObject {
    constructor(renderer, material, mesh, name, options) {
        if (name === undefined) name = 'Enemy';
        if (options === undefined) options = {};
        super(renderer, material, mesh, name);

        // ── Stats ────────────────────────────────────────────────────────
        this.maxHp = options.maxHp !== undefined ? options.maxHp : 50;
        this.hp = this.maxHp;
        this.damage = options.damage !== undefined ? options.damage : 10;
        this.moveSpeed = options.moveSpeed !== undefined ? options.moveSpeed : 3.2;
        this.chaseSpeed = options.chaseSpeed !== undefined ? options.chaseSpeed : 4.5;
        this.detectionRange = options.detectionRange !== undefined ? options.detectionRange : CHASE_START_DIST;
        this.attackRange = options.attackRange !== undefined ? options.attackRange : 1.8;

        // ── State ────────────────────────────────────────────────────────
        this.state = 'wander';
        this.isDead = false;
        this._stateTime = 0;

        // ── Movement ─────────────────────────────────────────────────────
        this.heading = Math.random() * Math.PI * 2;
        this._targetHeading = this.heading;
        this._wanderTimer = WANDER_CHANGE_MIN + Math.random() * (WANDER_CHANGE_MAX - WANDER_CHANGE_MIN);

        // ── Chase give-up ─────────────────────────────────────────────────
        this._giveUpTimer = 0; // accumulates while player is far

        // ── Attack ───────────────────────────────────────────────────────
        this._attackTimer = 0;

        // ── Collision ────────────────────────────────────────────────────
        this.collider = null; // set by EnemySpawner after addCircle()
        this.groupId = -1;
    }

    // ── Public ────────────────────────────────────────────────────────────

    takeDamage(amount) {
        if (this.isDead) return false;
        this.hp = Math.max(0, this.hp - amount);
        if (this.state === 'wander') this._setState('chase');
        if (this.hp === 0) {
            this._die();
            return true;
        }
        return false;
    }

    /**
     * @param {number} dt
     * @param {{
     *   playerPosition: {x,y,z},
     *   playerHealth,
     *   collisionWorld,
     *   allEnemies: Enemy[]
     * }} context
     */
    update(dt, context) {
        if (context === undefined) context = {};
        if (this.isDead) return;

        var pp = context.playerPosition;

        // ── Distance cull — freeze AI entirely beyond CULL_DIST ──────────
        if (pp) {
            var dxC = this.transform.position.x - pp.x;
            var dzC = this.transform.position.z - pp.z;
            if (dxC * dxC + dzC * dzC > CULL_DIST_SQ) {
                if (this.state !== 'wander') this._setState('wander');
                return;
            }
        }

        this._stateTime += dt;

        if (this.state === 'wander') this._updateWander(dt, context);
        else if (this.state === 'chase') this._updateChase(dt, context);
        else if (this.state === 'attack') this._updateAttack(dt, context);

        // ── Sync dynamic collider position ───────────────────────────────
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

        // Accumulate give-up timer only while player stays far away
        if (distSq > CHASE_GIVE_UP_SQ) {
            this._giveUpTimer += dt;
            if (this._giveUpTimer >= CHASE_GIVE_UP_TIME) {
                this._giveUpTimer = 0;
                this._setState('wander');
                return;
            }
        } else {
            this._giveUpTimer = 0; // reset the moment player comes back closer
        }

        // Switch to attack when close enough
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

        // Player backed away — resume chase
        if (distSq > this.attackRange * this.attackRange * 1.6) {
            this._setState('chase');
            return;
        }

        // Face player
        this._targetHeading = Math.atan2(dx, dz);
        this._smoothTurn(dt);
        this.transform.rotation.y = this.heading;

        // Damage tick (future: replace with sword-swing animation gate)
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

        // Terrain confinement — resolve X and Z axes independently (coast slide)
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

        // Collision resolution — push out of world objects AND other enemies
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

        // Snap Y to terrain surface
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
        if (s === 'attack') this._attackTimer = ATTACK_COOLDOWN; // first hit lands quickly
        if (s === 'wander') this._giveUpTimer = 0;
    }

    _die() {
        this.isDead = true;
        this.state = 'dead';
        this.active = false;
        // Collider stays registered but active=false makes resolveCircle skip it
    }
}