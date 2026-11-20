import {
    ObjLoader
} from '../Engine/Loaders/ObjLoader.js';
import {
    CollisionLayer
} from '../Engine/Physics/CollisionWorld.js';
import {
    Enemy
} from './Enemy.js';
import CONTINENT from '../CustomMapNoise.js';

var TERRAIN_OFFSET_X = -(255 * Math.sqrt(3) / 2);
var TERRAIN_OFFSET_Z = -(255 * 1.5 / 2);
var TERRAIN_SCALE_Y = 0.4;
var WATER_LEVEL = -7;
var MIN_WATER_CLEAR = 0.35;

var GROUP_MIN_SIZE = 2;
var GROUP_MAX_SIZE = 5;
var GROUP_SPREAD = 5;
var ENEMY_SCALE = 3;
var ENEMY_RADIUS = 0.55; // must match Enemy.js
var ENEMY_HEIGHT = 2.2;

function getGroundHeight(x, z) {
    var nx = x - TERRAIN_OFFSET_X;
    var nz = z - TERRAIN_OFFSET_Z;
    var value = CONTINENT.getValue(nx, nz, 0);
    var h = (value <= 0.3 ? 20 / 255 : 0.4 + value) * 20 * TERRAIN_SCALE_Y - 11;
    if (h <= WATER_LEVEL + MIN_WATER_CLEAR) return null;
    return h;
}

/**
 * EnemySpawner
 *
 * Spawns Enemy groups on land and registers each enemy as a dynamic circle
 * collider on the NPC layer so:
 *   - The player cannot walk through enemies (player resolveCircle already
 *     queries all layers via mask 0xffffffff).
 *   - Enemies cannot stack on top of each other (they push each other apart
 *     during their own resolveCircle call each frame).
 *   - World scenery (trees, buildings) blocks enemies the same way it blocks
 *     the player.
 *
 * Options:
 *   seed            {number}       Deterministic PRNG seed. Default 99999.
 *   minNoiseValue   {number}       Minimum terrain noise for spawning. Default 0.42.
 *   collisionWorld  {CollisionWorld}  Pass the shared CollisionWorld instance.
 *   enemyDefaults   {object}       Stat overrides forwarded to every Enemy.
 */
export class EnemySpawner {
    constructor(gl, renderer, material, scene, options) {
        if (options === undefined) options = {};

        this.gl = gl;
        this.renderer = renderer;
        this.material = material;
        this.scene = scene;

        this.seed = options.seed !== undefined ? options.seed : 99999;
        this.currentState = this.seed;

        this.minNoiseValue = options.minNoiseValue !== undefined ? options.minNoiseValue : 0.42;
        this.collisionWorld = options.collisionWorld !== undefined ? options.collisionWorld : null;

        this.enemyDefaults = options.enemyDefaults !== undefined ? options.enemyDefaults : {
            maxHp: 50,
            damage: 10,
            moveSpeed: 3.2,
            chaseSpeed: 4.5,
            detectionRange: 14,
            attackRange: 1.8
        };

        this._mesh = null;
        this.enemies = [];
        this._colliders = []; // parallel array — collider[i] belongs to enemies[i]
    }

    setSeed(seed) {
        this.seed = seed;
        this.currentState = seed;
    }

    // ── Mulberry32 ────────────────────────────────────────────────────────

    _rand() {
        this.currentState |= 0;
        this.currentState = (this.currentState + 0x6D2B79F5) | 0;
        var t = Math.imul(this.currentState ^ (this.currentState >>> 15), 1 | this.currentState);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    // ── Mesh ─────────────────────────────────────────────────────────────

    async _loadMesh() {
        if (this._mesh) return this._mesh;
        try {
            this._mesh = await ObjLoader.load(this.gl, './Assets/Characters/character-male-b.obj');
        } catch (e) {
            console.error('[EnemySpawner] Failed to load character-male-b.obj:', e);
        }
        return this._mesh;
    }

    // ── Terrain sampling ──────────────────────────────────────────────────

    _sampleLandPosition(bounds, maxAttempts) {
        if (maxAttempts === undefined) maxAttempts = 500;
        for (var i = 0; i < maxAttempts; i++) {
            var x = bounds.minX + this._rand() * (bounds.maxX - bounds.minX);
            var z = bounds.minZ + this._rand() * (bounds.maxZ - bounds.minZ);
            var nx = x - TERRAIN_OFFSET_X;
            var nz = z - TERRAIN_OFFSET_Z;
            var v = CONTINENT.getValue(nx, nz, 0);
            if (v < this.minNoiseValue) continue;
            var y = getGroundHeight(x, z);
            if (y === null) continue;
            return {
                x: x,
                z: z,
                y: y
            };
        }
        return null;
    }

    // ── Spawning ──────────────────────────────────────────────────────────

    /**
     * Spawn `groupCount` groups, each with 2–5 enemies clustered together.
     * @param {number} groupCount
     * @param {{ minX, maxX, minZ, maxZ }} bounds
     * @returns {Promise<Enemy[]>}
     */
    async spawnGroups(groupCount, bounds, fixedGroupSize) {
        var mesh = await this._loadMesh();
        if (!mesh) {
            console.error('[EnemySpawner] Cannot spawn — mesh failed to load.');
            return [];
        }

        var spawned = [];
        var enemyIndex = this.enemies.length;

        for (var g = 0; g < groupCount; g++) {
            var anchor = this._sampleLandPosition(bounds);
            if (!anchor) {
                console.warn('[EnemySpawner] Group ' + g + ': no valid anchor — skipping.');
                continue;
            }

            var groupSize = Number.isInteger(fixedGroupSize) && fixedGroupSize > 0
                ? fixedGroupSize
                : GROUP_MIN_SIZE + Math.floor(this._rand() * (GROUP_MAX_SIZE - GROUP_MIN_SIZE + 1));

            for (var m = 0; m < groupSize; m++) {
                // Scatter member around anchor
                var ex = anchor.x,
                    ez = anchor.z,
                    ey = anchor.y;
                for (var attempt = 0; attempt < 40; attempt++) {
                    var angle = this._rand() * Math.PI * 2;
                    var radius = this._rand() * GROUP_SPREAD;
                    var tx = anchor.x + Math.cos(angle) * radius;
                    var tz = anchor.z + Math.sin(angle) * radius;
                    var ty = getGroundHeight(tx, tz);
                    if (ty !== null) {
                        ex = tx;
                        ez = tz;
                        ey = ty;
                        break;
                    }
                }

                // Build defaults object manually (no spread operator / no ??)
                var defaults = {
                    maxHp: this.enemyDefaults.maxHp,
                    damage: this.enemyDefaults.damage,
                    moveSpeed: this.enemyDefaults.moveSpeed,
                    chaseSpeed: this.enemyDefaults.chaseSpeed,
                    detectionRange: this.enemyDefaults.detectionRange,
                    attackRange: this.enemyDefaults.attackRange
                };

                var enemy = new Enemy(
                    this.renderer,
                    this.material,
                    mesh,
                    'Enemy_' + enemyIndex + ' [Enemy]',
                    defaults
                );
                enemyIndex++;

                enemy.transform.position.set(ex, ey, ez);
                enemy.transform.scale.set(ENEMY_SCALE, ENEMY_SCALE, ENEMY_SCALE);

                var h = this._rand() * Math.PI * 2;
                enemy.heading = h;
                enemy._targetHeading = h;
                enemy.transform.rotation.set(0, h, 0);
                enemy.groupId = g;

                // ── Register dynamic NPC collider ─────────────────────────
                if (this.collisionWorld) {
                    var collider = this.collisionWorld.addCircle({
                        object: enemy,
                        x: ex,
                        y: ey,
                        z: ez,
                        radius: ENEMY_RADIUS,
                        minY: ey,
                        maxY: ey + ENEMY_HEIGHT,
                        layer: CollisionLayer.NPC,
                        mask: CollisionLayer.WORLD | CollisionLayer.NPC | CollisionLayer.PLAYER,
                        isStatic: false
                    });
                    enemy.collider = collider;
                    this._colliders.push(collider);
                }

                this.scene.push(enemy);
                this.enemies.push(enemy);
                spawned.push(enemy);
            }
        }

        console.log('[EnemySpawner] Spawned ' + spawned.length + ' enemies in ' + groupCount + ' groups.');
        return spawned;
    }

    /** Backward-compatible alias. */
    async spawnMany(count, bounds) {
        return this.spawnGroups(count, bounds);
    }

    /** Remove all spawned enemies and their colliders from the world. */
    clearAll() {
        for (var i = 0; i < this.enemies.length; i++) {
            var idx = this.scene.indexOf(this.enemies[i]);
            if (idx !== -1) this.scene.splice(idx, 1);
        }
        if (this.collisionWorld) {
            for (var j = 0; j < this._colliders.length; j++) {
                this.collisionWorld.remove(this._colliders[j]);
            }
        }
        this.enemies.length = 0;
        this._colliders.length = 0;
    }
}
