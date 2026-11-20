import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { Material } from './Engine/Rendering/Material.js';
import { Texture } from './Engine/Rendering/Texture.js';

/** Loads and attaches the textured first-person hand to the camera. */
export class FirstPersonHand {
    constructor(gl, renderer, shader, camera, scene, options = {}) {
        const { controller = null, inputElement = null, ...settings } = options;
        this.settings = {
            modelPath: './Assets/Characters/hand.obj',
            texturePath: './Assets/Characters/colormap.png',
            position: [0.32, -0.28, -0.55],
            rotation: [0, -Math.PI / 2, 0],
            scale: [0.015, 0.015, 0.015],
            bobAmount: 0.045,
            bobSideAmount: 0.02,
            bobSmoothing: 10,
            attackDamage: 10,
            attackReach: 2.5,
            attackRadius: 0.65,
            attackDuration: 0.34,
            attackCooldown: 0.45,
            attackHitTime: 0.12,
            attackThrust: 0.3,
            attackCenterShift: 0.12,
            attackLift: 0.04,
            attackSideSwing: 0.2,
            attackDiagonalDrop: 0.14,
            attackDiagonalRoll: 0.55,
            attackDiagonalPitch: 0.3,
            ...settings
        };
        this.camera = camera;
        this.scene = scene;
        this.controller = controller;
        this.inputElement = inputElement;
        this.bobBlend = 0;
        this.attackElapsed = null;
        this.attackCooldownRemaining = 0;
        this.attackHitApplied = false;
        this.weapon = null;

        this._onMouseDown = (event) => {
            if (event.button !== 0) return;
            event.preventDefault();
            this.attack();
        };
        this.inputElement?.addEventListener('mousedown', this._onMouseDown);
        this.ready = this._load(gl, renderer, shader);
    }

    async _load(gl, renderer, shader) {
        try {
            const mesh = await ObjLoader.load(gl, this.settings.modelPath);
            this.texture = new Texture(gl, this.settings.texturePath);
            this.material = new Material(shader, 'First Person Hand');
            this.material.setUniforms({
                uColor: [1, 1, 1, 1],
                uHasTexture: 1,
                uMainTex: this.texture.texture,
                uRoughness: 1
            });

            const hand = new GameObject(renderer, this.material, mesh, 'First Person Right Hand');
            hand.transform.position.set(...this.settings.position);
            hand.transform.rotation.set(...this.settings.rotation);
            hand.transform.scale.set(...this.settings.scale);
            this.camera.transform.add(hand.transform);
            this.scene.push(hand);
            this.gameObject = hand;
            return hand;
        } catch (error) {
            console.error('Could not load first-person hand:', error);
            return null;
        }
    }

    update(dt) {
        const handTransform = this.gameObject?.transform;
        if (!handTransform) return;

        const frameTime = Math.min(Math.max(dt, 0), 0.05);
        if (this.controller) {
            const blend = 1 - Math.exp(-this.settings.bobSmoothing * frameTime);
            const target = this.controller.isWalking ? 1 : 0;
            this.bobBlend += (target - this.bobBlend) * blend;
        }
        let attackPulse = 0;
        if (this.attackCooldownRemaining > 0) {
            this.attackCooldownRemaining = Math.max(0, this.attackCooldownRemaining - frameTime);
        }
        if (this.attackElapsed !== null) {
            this.attackElapsed += frameTime;
            const progress = Math.min(this.attackElapsed / this.settings.attackDuration, 1);
            attackPulse = Math.sin(progress * Math.PI);
            if (!this.attackHitApplied && this.attackElapsed >= this.settings.attackHitTime) {
                this.attackHitApplied = true;
                this.lastAttackResult = this._attackDamage();
            }
            if (progress >= 1) this.attackElapsed = null;
        }

        const phase = this.controller?.bobTime || 0;
        handTransform.position.set(
            this.settings.position[0] + Math.cos(phase * 0.5) * this.settings.bobSideAmount * this.bobBlend - (this.settings.attackCenterShift + this.settings.attackSideSwing) * attackPulse,
            this.settings.position[1] + Math.abs(Math.sin(phase)) * this.settings.bobAmount * this.bobBlend + (this.settings.attackLift - this.settings.attackDiagonalDrop) * attackPulse,
            this.settings.position[2] - this.settings.attackThrust * attackPulse
        );
        handTransform.rotation.set(
            this.settings.rotation[0] - 0.28 * attackPulse,
            this.settings.rotation[1],
            this.settings.rotation[2] + this.settings.attackDiagonalRoll * attackPulse
        );
    }

    /** Start a hand punch, or delegate to an equipped weapon's attack(context). */
    attack() {
        if (this.weapon) {
            return this.weapon.attack(this._createWeaponContext());
        }
        if (this.attackCooldownRemaining > 0 || this.attackElapsed !== null) return false;

        this.attackElapsed = 0;
        this.attackCooldownRemaining = this.settings.attackCooldown;
        this.attackHitApplied = false;
        this.lastAttackResult = null;
        return true;
    }

    /** Equip a future weapon object that implements attack(context). */
    setWeapon(weapon = null) {
        this.weapon = weapon;
    }

    _createWeaponContext() {
        return {
            camera: this.camera,
            scene: this.scene,
            settings: this.settings,
            applyDamage: (target, amount) => this.applyDamage(target, amount),
            animateHandAttack: () => this._startHandAnimation()
        };
    }

    _startHandAnimation() {
        if (this.attackCooldownRemaining > 0 || this.attackElapsed !== null) return false;
        this.attackElapsed = 0;
        this.attackCooldownRemaining = this.settings.attackCooldown;
        this.attackHitApplied = true;
        return true;
    }

    _attackDamage() {
        const origin = this.camera.transform.position;
        const pitch = this.camera.transform.rotation.x;
        const yaw = this.camera.transform.rotation.y;
        const cosPitch = Math.cos(pitch);
        const direction = {
            x: -Math.sin(yaw) * cosPitch,
            y: Math.sin(pitch),
            z: -Math.cos(yaw) * cosPitch
        };

        let closest = null;
        let closestDistance = this.settings.attackReach;
        for (const target of this.scene) {
            if (!target || target === this.gameObject || !target.active) continue;
            const canTakeDamage = typeof target.takeDamage === 'function' ||
                typeof target.health?.takeDamage === 'function' || Number.isFinite(target.health);
            if (!canTakeDamage) continue;

            const targetPosition = target.transform.globalPosition;
            const toTarget = {
                x: targetPosition.x - origin.x,
                y: targetPosition.y - origin.y,
                z: targetPosition.z - origin.z
            };
            const distanceAlongRay = toTarget.x * direction.x + toTarget.y * direction.y + toTarget.z * direction.z;
            if (distanceAlongRay < 0 || distanceAlongRay > closestDistance) continue;

            const perpendicularX = toTarget.x - direction.x * distanceAlongRay;
            const perpendicularY = toTarget.y - direction.y * distanceAlongRay;
            const perpendicularZ = toTarget.z - direction.z * distanceAlongRay;
            const hitRadius = target.hitRadius ?? this.settings.attackRadius;
            if (perpendicularX ** 2 + perpendicularY ** 2 + perpendicularZ ** 2 > hitRadius ** 2) continue;

            closest = target;
            closestDistance = distanceAlongRay;
        }

        if (!closest) return { hit: false, target: null, damage: 0 };
        return {
            hit: true,
            target: closest,
            damage: this.applyDamage(closest, this.settings.attackDamage)
        };
    }

    /** Apply damage through target.takeDamage(amount) or a numeric target.health field. */
    applyDamage(target, amount = this.settings.attackDamage) {
        if (!target || !Number.isFinite(amount) || amount <= 0) return 0;
        if (typeof target.takeDamage === 'function') {
            const result = target.takeDamage(amount, this.gameObject);
            return Number.isFinite(result) ? result : amount;
        }
        if (typeof target.health?.takeDamage === 'function') {
            return target.health.takeDamage(amount, this.gameObject);
        }
        if (Number.isFinite(target.health)) {
            target.health = Math.max(0, target.health - amount);
            if (target.health === 0) target.active = false;
            return amount;
        }
        return 0;
    }

    dispose() {
        this.inputElement?.removeEventListener('mousedown', this._onMouseDown);
    }
}
