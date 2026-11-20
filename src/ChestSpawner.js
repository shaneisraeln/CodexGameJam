import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import CONTINENT from './CustomMapNoise.js';
import { HexGridMesh } from './HexGridMesh.js';

/** Places stationary, E-hold interactable chests with weighted configurable loot. */
export class ChestSpawner {
    constructor(gl, renderer, material, scene, inventory, { camera = null, seed = 68, lootTable = null } = {}) {
        this.gl = gl;
        this.renderer = renderer;
        this.material = material;
        this.scene = scene;
        this.inventory = inventory;
        this.playerCamera = camera;
        this.seed = seed >>> 0;
        this.currentState = this.seed;
        this.noise = CONTINENT;
        this.mesh = null;
        this.chests = [];
        this.openDuration = 0.9;
        this.bounceDuration = 0.42;
        this.removeDelay = 0.28;
        this.interactionRange = 5;
        this.lootTable = lootTable || [
            { item: 'food', probability: 1, minCount: 2, maxCount: 5 }
        ];
        this._keyDown = (event) => {
            if (event.code === 'KeyE' && !event.repeat) this.openingChest = this._findNearbyChest();
        };
        this._keyUp = (event) => {
            if (event.code === 'KeyE') this.openingChest = null;
        };
        window.addEventListener('keydown', this._keyDown);
        window.addEventListener('keyup', this._keyUp);
    }

    setSeed(seed) { this.seed = seed >>> 0; this.currentState = this.seed; }

    random() {
        this.currentState = (this.currentState + 0x6D2B79F5) | 0;
        let t = this.currentState;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    async spawnMany(count, bounds, groundY = -11) {
        if (!this.mesh) this.mesh = await ObjLoader.load(this.gl, './Assets/3D/Floating/chest.obj');
        if (!this.mesh) return [];
        const spawned = [];
        let attempts = 0;
        while (spawned.length < count && attempts++ < count * 300) {
            const x = bounds.minX + this.random() * (bounds.maxX - bounds.minX);
            const z = bounds.minZ + this.random() * (bounds.maxZ - bounds.minZ);
            // Match LandObjectSpawner's world-to-noise coordinates exactly.
            const noiseX = x - (-(255 * Math.sqrt(3) / 2));
            const noiseZ = z - (-(255 * 1.5 / 2));
            const terrain = this.noise.getValue(noiseX, noiseZ, 0);
            if (terrain < 0.42) continue;
            if (this.chests.some((chest) => Math.hypot(chest.transform.position.x - x, chest.transform.position.z - z) < 12)) continue;
            const chest = new GameObject(this.renderer, this.material, this.mesh, 'Loot Chest');
            // Match LandObjectSpawner: terrain value * 20 * 0.4, added to yFixed.
            const terrainHeight = HexGridMesh.terrainValue(terrain) * 20 * 0.4;
            chest.transform.position.set(x, groundY + terrainHeight, z);
            chest.transform.rotation.set(0, this.random() * Math.PI * 2, 0);
            chest.transform.scale.set(1, 1, 1);
            chest.isLootChest = true;
            chest.opened = false;
            chest.openProgress = 0;
            chest.interactionScale = 1;
            chest.bounceElapsed = null;
            chest.removeElapsed = null;
            chest.baseY = chest.transform.position.y;
            chest.baseScale = 1;
            chest.lootTable = this.lootTable.map((entry) => ({ ...entry }));
            chest.update = (dt) => {
                if (chest.removeElapsed !== null) {
                    chest.removeElapsed += dt;
                    if (chest.bounceElapsed !== null && chest.bounceElapsed < this.bounceDuration) {
                        chest.bounceElapsed += dt;
                        const t = Math.min(chest.bounceElapsed / this.bounceDuration, 1);
                        const bounce = Math.abs(Math.sin(t * Math.PI * 2.5)) * (1 - t) * 0.7;
                        chest.transform.position.y = chest.baseY + bounce;
                        const scale = Math.max(0, 1 - t * 0.18);
                        chest.transform.scale.set(scale, scale, scale);
                    }
                    if (chest.removeElapsed >= this.removeDelay) this._removeChest(chest);
                    return;
                }
                if (chest.opened) return;
                const heldNearby = this.openingChest === chest && Math.hypot(chest.transform.position.x - this._playerPosition().x, chest.transform.position.z - this._playerPosition().z) <= this.interactionRange;
                if (heldNearby) {
                    chest.interactionScale = Math.min(1.18, chest.interactionScale + dt * 0.8);
                    chest.openProgress = Math.min(1, chest.openProgress + dt / this.openDuration);
                    chest.transform.scale.set(chest.interactionScale, chest.interactionScale, chest.interactionScale);
                    if (chest.openProgress === 1) {
                        this._grantLoot(chest);
                        chest.removeElapsed = 0;
                        chest.bounceElapsed = 0;
                        this.openingChest = null;
                    }
                } else if (chest.openProgress > 0) {
                    chest.openProgress = Math.max(0, chest.openProgress - dt * 2.5 / this.openDuration);
                    chest.interactionScale = Math.max(1, chest.interactionScale - dt * 0.8);
                    chest.transform.scale.set(chest.interactionScale, chest.interactionScale, chest.interactionScale);
                } else if (chest.interactionScale > 1) {
                    chest.interactionScale = Math.max(1, chest.interactionScale - dt * 0.8);
                    chest.transform.scale.set(chest.interactionScale, chest.interactionScale, chest.interactionScale);
                }
            };
            this.scene.push(chest);
            this.chests.push(chest);
            spawned.push(chest);
        }
        return spawned;
    }

    _playerPosition() { return this.playerCamera?.transform.position || { x: Infinity, y: 0, z: Infinity }; }

    _findNearbyChest() {
        const pos = this._playerPosition();
        let closest = null;
        let distance = this.interactionRange;
        for (const chest of this.chests) {
            if (chest.opened) continue;
            const d = Math.hypot(chest.transform.position.x - pos.x, chest.transform.position.z - pos.z);
            if (d <= distance) { closest = chest; distance = d; }
        }
        return closest;
    }

    _grantLoot(chest) {
        chest.opened = true;
        const total = chest.lootTable.reduce((sum, entry) => sum + Math.max(0, entry.probability || 0), 0);
        for (const entry of chest.lootTable) {
            const probability = total > 0 ? entry.probability / total : 0;
            if (this.random() > probability) continue;
            const min = Math.max(1, Math.ceil(entry.minCount ?? 1));
            const max = Math.max(min, Math.floor(entry.maxCount ?? min));
            const count = min + Math.floor(this.random() * (max - min + 1));
            this.inventory?.addItem(entry.item, count);
        }
    }

    _removeChest(chest) {
        const sceneIndex = this.scene.indexOf(chest);
        if (sceneIndex !== -1) this.scene.splice(sceneIndex, 1);
        const chestIndex = this.chests.indexOf(chest);
        if (chestIndex !== -1) this.chests.splice(chestIndex, 1);
    }

    update(dt) { for (const chest of this.chests) chest.update(dt); }
    dispose() {
        window.removeEventListener('keydown', this._keyDown);
        window.removeEventListener('keyup', this._keyUp);
    }
}
