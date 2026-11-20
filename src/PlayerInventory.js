import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { Material } from './Engine/Rendering/Material.js';
import { Texture } from './Engine/Rendering/Texture.js';

/** Sword and food slots; the bare hand is shown whenever no usable item is held. */
export class PlayerInventory {
    constructor(gl, renderer, shader, camera, scene, options = {}) {
        const { hand = null, controller = null, ...settings } = options;
        this.settings = {
            itemBobAmount: 0.045,
            itemBobSideAmount: 0.02,
            itemBobSmoothing: 10,
            swordAttackDuration: 0.62,
            swordHitTime: 0.3,
            swordAttackCooldown: 0.72,
            eatDuration: 0.9,
            ...settings
        };
        this.camera = camera;
        this.scene = scene;
        this.hand = hand;
        this.controller = controller;
        this.slots = [
            {
                id: 'sword', key: '1', name: 'Sword', countName: null,
                modelPath: './Assets/Items/weapon-sword.obj',
                texturePath: './Assets/Items/Weapon.png',
                position: [0.48, -0.42, -0.95],
                rotation: [0, 0, -0.45], scale: [0.9, 0.9, 0.9]
            },
            {
                id: 'food', key: '2', name: 'Food', countName: 'Count',
                modelPath: './Assets/Items/Food.obj',
                texturePath: './Assets/Items/Food.png',
                position: [0.48, -0.36, -0.92],
                rotation: [-Math.PI/2, Math.PI/2, 0], scale: [0.65, 0.65, 0.65]
            }
        ];
        for (const slot of this.slots) {
            slot.owned ??= false;
            slot.count ??= 0;
            slot.gameObject ??= null;
        }
        this.selectedId = null;
        this.listeners = new Set();
        this.attackElapsed = null;
        this.attackCooldownRemaining = 0;
        this.attackHitApplied = false;
        this.attackOnHit = null;
        this.eating = false;

        this._onKeyDown = (event) => {
            if (event.repeat) return;
            if (event.key.toLowerCase() === 'o') {
                event.preventDefault();
                this.addItem('food', 1);
                return;
            }
            const slot = this.slots.find((entry) => entry.key === event.key);
            if (!slot) return;
            event.preventDefault();
            if (slot.id === 'food') this.select(slot.id, { allowEmpty: true });
            else this.grantAndSelect(slot.id);
        };
        window.addEventListener('keydown', this._onKeyDown);
        this.ready = this._loadItems(gl, renderer, shader);
        this.updateHud();
    }

    get selectedItem() {
        return this.slots.find((slot) => slot.id === this.selectedId) || null;
    }

    getSlot(id) {
        return this.slots.find((slot) => slot.id === id) || null;
    }

    onChange(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    _notify() {
        this._updateItemVisibility();
        this.updateHud();
        for (const listener of this.listeners) listener(this);
    }

    _getDebugGrantCount(slot) {
        if (slot.id === 'sword') return 1;
        return 1;
    }

    /** Debug key behavior: grant a slot's default item once, then select it. */
    grantAndSelect(id) {
        const slot = this.getSlot(id);
        if (!slot) return false;
        if (!slot.owned) {
            slot.owned = true;
            slot.count = this._getDebugGrantCount(slot);
        }
        this.selectedId = id;
        this._notify();
        return true;
    }

    /** Add a pickup; sword uses ownership while food uses a stack count. */
    addItem(id, amount = 1, { select = false } = {}) {
        const slot = this.getSlot(id);
        if (!slot || !Number.isFinite(amount) || amount <= 0) return 0;
        const added = slot.id === 'sword' ? (slot.owned ? 0 : 1) : amount;
        slot.owned = true;
        slot.count += added;
        if (select) this.selectedId = id;
        if (added > 0 || select) this._notify();
        return added;
    }

    select(id, { allowEmpty = false } = {}) {
        const slot = this.getSlot(id);
        if (!slot || (!slot.owned && !allowEmpty)) return false;
        this.selectedId = id;
        this._notify();
        return true;
    }

    /** Remove up to amount from a stack. Food use can call this later. */
    consume(id, amount = 1) {
        const slot = this.getSlot(id);
        if (!slot?.owned || !Number.isFinite(amount) || amount <= 0) return 0;
        const removed = Math.min(slot.count, amount);
        slot.count -= removed;
        this._notify();
        return removed;
    }

    startEating() {
        if (this.eating || this.selectedId !== 'food' || (this.getSlot('food')?.count || 0) <= 0) return false;
        this.eating = true;
        this.eatElapsed = 0;
        return true;
    }

    finishEating() {
        if (!this.eating) return false;
        this.eating = false;
        this.eatElapsed = null;
        return this.consume('food', 1) > 0;
    }

    cancelEating() {
        if (!this.eating) return false;
        this.eating = false;
        this.eatElapsed = null;
        return true;
    }

    clearSelection() {
        this.selectedId = null;
        this._notify();
    }

    /** Begin the sword's wind-up, diagonal slash, and recovery animation. */
    attackSelected(onHit = null) {
        if (this.selectedId !== 'sword' || this.attackElapsed !== null || this.attackCooldownRemaining > 0) {
            return false;
        }
        this.attackElapsed = 0;
        this.attackCooldownRemaining = this.settings.swordAttackCooldown;
        this.attackHitApplied = false;
        this.attackOnHit = onHit;
        return true;
    }

    _updateItemVisibility() {
        for (const slot of this.slots) {
            if (!slot.gameObject) continue;
            const available = slot.owned && (slot.id !== 'food' || slot.count > 0);
            slot.gameObject.active = slot.id === this.selectedId && available;
        }
        const selected = this.selectedItem;
        const emptyFoodSelected = selected?.id === 'food' && (!selected.owned || selected.count <= 0);
        if (this.hand?.gameObject) this.hand.gameObject.active = !selected || emptyFoodSelected;
    }

    updateHud() {
        const selectedLabel = document.getElementById('inventory-selected');
        if (selectedLabel) {
            const selected = this.selectedItem;
            selectedLabel.textContent = !selected || (selected.id === 'food' && selected.count <= 0)
                ? 'EMPTY HAND'
                : `HELD: ${selected.name.toUpperCase()}`;
        }

        for (const slot of this.slots) {
            const element = document.getElementById(`inventory-${slot.id}`);
            if (!element) continue;
            element.classList.toggle('is-selected', slot.id === this.selectedId);
            element.classList.toggle('is-empty', !slot.owned);
            const count = element.querySelector('.inventory-count');
            if (count) {
                if (!slot.owned) count.textContent = 'EMPTY';
                else if (slot.countName) count.textContent = `${slot.countName}: ${slot.count}`;
                else count.textContent = 'READY';
            }
        }
    }

    async _loadItems(gl, renderer, shader) {
        const textureCache = new Map();
        await Promise.all(this.slots.filter((slot) => slot.modelPath).map(async (slot) => {
            try {
                const mesh = await ObjLoader.load(gl, slot.modelPath);
                let texture = textureCache.get(slot.texturePath);
                if (!texture) {
                    texture = new Texture(gl, slot.texturePath);
                    textureCache.set(slot.texturePath, texture);
                }
                const material = new Material(shader, `${slot.name} Item`);
                material.setUniforms({
                    uColor: [1, 1, 1, 1],
                    uHasTexture: 1,
                    uMainTex: texture.texture,
                    uRoughness: 1
                });
                const item = new GameObject(renderer, material, mesh, `Held ${slot.name}`);
                item.active = false;
                item.transform.position.set(...slot.position);
                item.transform.rotation.set(...slot.rotation);
                item.transform.scale.set(...slot.scale);
                this.camera.transform.add(item.transform);
                this.scene.push(item);
                slot.gameObject = item;
                slot.mesh = mesh;
                slot.material = material;
                slot.texture = texture;
            } catch (error) {
                console.error(`Could not load inventory item ${slot.name}:`, error);
            }
        }));
        this._updateItemVisibility();
        return this.slots;
    }

    update(dt) {
        // Reconcile visibility every frame so cutscene transitions cannot reveal
        // the bare hand over a selected sword or food item.
        this._updateItemVisibility();
        const frameTime = Math.min(Math.max(dt, 0), 0.05);
        const bobBlend = 1 - Math.exp(-this.settings.itemBobSmoothing * frameTime);
        const bobTarget = this.controller?.isWalking ? 1 : 0;
        this.itemBobBlend = (this.itemBobBlend || 0) + (bobTarget - (this.itemBobBlend || 0)) * bobBlend;
        const phase = this.controller?.bobTime || 0;
        const bobX = Math.cos(phase * 0.5) * this.settings.itemBobSideAmount * this.itemBobBlend;
        const bobY = Math.abs(Math.sin(phase)) * this.settings.itemBobAmount * this.itemBobBlend;

        if (this.attackCooldownRemaining > 0) {
            this.attackCooldownRemaining = Math.max(0, this.attackCooldownRemaining - frameTime);
        }
        const sword = this.getSlot('sword')?.gameObject;
        let swordPose = { x: 0, y: 0, z: 0, pitch: 0, roll: 0 };
        const eatProgress = this.hand?.eatElapsed === null || this.hand?.eatElapsed === undefined
            ? 0
            : Math.min(this.hand.eatElapsed / (this.hand.settings.eatDuration || this.settings.eatDuration), 1);
        const foodBite = this.eating && eatProgress < 0.88
            ? Math.pow(Math.max(0, Math.sin(eatProgress * Math.PI * 6)), 1.5)
            : 0;

        if (this.attackElapsed !== null) {
            this.attackElapsed += frameTime;
            const duration = this.settings.swordAttackDuration;
            const progress = Math.min(this.attackElapsed / duration, 1);
        if (sword) {
            const smooth = (value) => {
                const t = Math.max(0, Math.min(1, value));
                return t * t * (3 - 2 * t);
            };
            const mix = (from, to, amount) => from + (to - from) * amount;
            let pose;
            if (progress < 0.28) {
                const windup = smooth(progress / 0.28);
                pose = {
                    x: mix(0, 0.13, windup), y: mix(0, 0.16, windup), z: mix(0, 0.03, windup),
                    pitch: mix(0, -0.22, windup), roll: mix(0, -0.9, windup)
                };
            } else if (progress < 0.52) {
                const slash = smooth((progress - 0.28) / 0.24);
                pose = {
                    x: mix(0.13, -0.28, slash), y: mix(0.16, -0.26, slash), z: mix(0.03, -0.18, slash),
                    pitch: mix(-0.22, 0.28, slash), roll: mix(-0.9, 1.35, slash)
                };
            } else {
                const recover = smooth((progress - 0.52) / 0.48);
                pose = {
                    x: mix(-0.28, 0, recover), y: mix(-0.26, 0, recover), z: mix(-0.18, 0, recover),
                    pitch: mix(0.28, 0, recover), roll: mix(1.35, 0, recover)
                };
            }
            swordPose = pose;
        }

        if (!this.attackHitApplied && this.attackElapsed >= this.settings.swordHitTime) {
            this.attackHitApplied = true;
            this.lastAttackResult = this.attackOnHit?.() ?? null;
            this.attackOnHit = null;
        }
        if (progress >= 1) {
            this.attackElapsed = null;
        }
        }

        for (const slot of this.slots) {
            if (!slot.gameObject) continue;
            const completionPulse = slot.id === 'food' ? (this.hand?.eatCompletePulse || 0) : 0;
            const pose = slot.id === 'sword' ? swordPose : slot.id === 'food'
                ? {
                    x: -0.12 * foodBite,
                    y: 0.22 * foodBite + 0.12 * completionPulse,
                    z: 0.16 * foodBite,
                    pitch: -0.35 * foodBite - 0.18 * completionPulse,
                    roll: 0.1 * foodBite
                }
                : null;
            slot.gameObject.transform.position.set(
                slot.position[0] + bobX + (pose?.x || 0),
                slot.position[1] + bobY + (pose?.y || 0),
                slot.position[2] + (pose?.z || 0)
            );
            slot.gameObject.transform.rotation.set(
                slot.rotation[0] + (pose?.pitch || 0),
                slot.rotation[1],
                slot.rotation[2] + (pose?.roll || 0)
            );
            if (slot.id === 'food' && slot.material) {
                const flash = completionPulse * 0.45;
                slot.material.setUniforms({
                    uColor: [1, 1 - flash, 1 - flash, 1]
                });
            }
        }
    }

    dispose() {
        window.removeEventListener('keydown', this._onKeyDown);
    }
}
