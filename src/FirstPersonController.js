import CONTINENT from './CustomMapNoise.js';

/**
 * First person WASD controller. Tune movement, camera, and collision values here.
 * The terrain height query mirrors HexGridMesh terrain generation and its placement
 * in main.js so the player can walk on islands and cannot walk into the ocean.
 */
export class FirstPersonController {
    constructor(camera, domElement, options = {}) {
        this.camera = camera;
        this.domElement = domElement;

        // Player settings (world units / seconds; FOV and sensitivity in degrees).
        this.settings = {
            moveSpeed: 5,
            sprintMultiplier: 1.7,
            jumpSpeed: 10,
            gravity: 28,
            eyeHeight: 1.2,
            mouseSensitivity: 0.12,
            fov: 45,
            bobbingEnabled: true,
            bobFrequency: 9,
            bobVerticalAmount: 0.25,
            bobSideAmount: 0.015,
            bobSmoothing: 12,
            movementTiltEnabled: true,
            movementTiltDegrees: 3,
            movementTiltSmoothing: 10,
            terrainX: -(255 * Math.sqrt(3) / 2),
            terrainZ: -(255 * 1.5 / 2),
            terrainScaleY: 0.4,
            waterLevel: -7,
            minWaterClearance: 0.35,
            maxStepHeight: 4,
            ...options
        };

        this.keys = new Set();
        this.pitch = camera.transform.rotation.x;
        this.yaw = camera.transform.rotation.y;
        this.verticalVelocity = 0;
        this.grounded = false;
        this.isWalking = false;
        this.bobTime = 0;
        this.bobOffsetY = 0;
        this.bobOffsetX = 0;
        this.appliedBobX = 0;
        this.appliedBobZ = 0;
        this.appliedBobY = 0;
        this.tilt = 0;
        this.baseEyeY = camera.transform.position.y;

        this._onKeyDown = (event) => {
            const key = event.key.toLowerCase();
            if (['w', 'a', 's', 'd', ' ', 'shift'].includes(key)) event.preventDefault();
            this.keys.add(key);
        };
        this._onKeyUp = (event) => this.keys.delete(event.key.toLowerCase());
        this._onMouseMove = (event) => {
            if (document.pointerLockElement !== this.domElement) return;
            const sensitivity = this.settings.mouseSensitivity * Math.PI / 180;
            this.yaw -= event.movementX * sensitivity;
            this.pitch -= event.movementY * sensitivity;
            const maxPitch = Math.PI / 2 - 0.01;
            this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch));
            this._applyCameraRotation();
        };
        this._onPointerLockChange = () => {
            if (document.pointerLockElement !== this.domElement) this.keys.clear();
        };
        this._onBlur = () => this.keys.clear();
        this._onContextMenu = (event) => event.preventDefault();
        this._onClick = () => {
            if (document.pointerLockElement === this.domElement) return;
            const result = this.domElement.requestPointerLock?.();
            if (result?.catch) result.catch(() => {});
        };

        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);
        window.addEventListener('blur', this._onBlur);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('pointerlockchange', this._onPointerLockChange);
        this.domElement.addEventListener('click', this._onClick);
        this.domElement.addEventListener('contextmenu', this._onContextMenu);

        this._applyFov();
        this.placeOnNearestLand();
    }

    _applyFov() {
        this.camera.setPerspective(
            this.settings.fov * Math.PI / 180,
            this.camera.aspect,
            this.camera.near,
            this.camera.far
        );
    }

    setFov(degrees) {
        this.settings.fov = degrees;
        this._applyFov();
    }

    _applyCameraRotation() {
        this.camera.transform.rotation.set(this.pitch, this.yaw, this.tilt);
    }

    /** Height at world X/Z, or null where terrain is below the water line. */
    getGroundHeight(x, z) {
        const terrainX = x - this.settings.terrainX;
        const terrainZ = z - this.settings.terrainZ;
        const value = CONTINENT.getValue(terrainX, terrainZ, 0);
        const height = (value <= 0.3 ? 20 / 255 : 0.4 + value) * 20 * this.settings.terrainScaleY - 11;
        if (height <= this.settings.waterLevel + this.settings.minWaterClearance) return null;
        return height;
    }

    /** Find a nearby dry spawn point if the configured camera position is in water. */
    placeOnNearestLand() {
        const position = this.camera.transform.position;
        let best = null;
        for (let radius = 0; radius <= 120 && !best; radius += 5) {
            for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
                const x = position.x + Math.cos(angle) * radius;
                const z = position.z + Math.sin(angle) * radius;
                const height = this.getGroundHeight(x, z);
                if (height !== null) {
                    best = { x, z, height };
                    break;
                }
            }
        }
        if (best) {
            position.set(best.x, best.height + this.settings.eyeHeight, best.z);
            this.baseEyeY = position.y;
            this.bobOffsetX = 0;
            this.bobOffsetY = 0;
            this.grounded = true;
        }
    }

    update(dt) {
        const frameTime = Math.min(Math.max(dt, 0), 0.05);
        const position = this.camera.transform.position;
        // Remove last frame's visual bob before applying movement and ground physics.
        position.x -= this.appliedBobX;
        position.z -= this.appliedBobZ;
        position.y -= this.appliedBobY;
        this.appliedBobX = this.appliedBobZ = this.appliedBobY = 0;
        const forward = (this.keys.has('w') ? 1 : 0) - (this.keys.has('s') ? 1 : 0);
        const strafe = (this.keys.has('d') ? 1 : 0) - (this.keys.has('a') ? 1 : 0);
        const inputLength = Math.hypot(forward, strafe);
        let moved = false;

        if (inputLength > 0) {
            const speed = this.settings.moveSpeed * (this.keys.has('shift') ? this.settings.sprintMultiplier : 1);
            const dx = ((-Math.sin(this.yaw) * forward) + (Math.cos(this.yaw) * strafe)) / inputLength * speed * frameTime;
            const dz = ((-Math.cos(this.yaw) * forward) - (Math.sin(this.yaw) * strafe)) / inputLength * speed * frameTime;

            // Resolve axes separately so the player can slide along island shorelines.
            const nextXGround = this.getGroundHeight(position.x + dx, position.z);
            if (nextXGround !== null && nextXGround >= position.y - this.settings.eyeHeight - this.settings.maxStepHeight) {
                position.x += dx;
                moved ||= Math.abs(dx) > 0;
            }
            const nextZGround = this.getGroundHeight(position.x, position.z + dz);
            if (nextZGround !== null && nextZGround >= position.y - this.settings.eyeHeight - this.settings.maxStepHeight) {
                position.z += dz;
                moved ||= Math.abs(dz) > 0;
            }
        }

        const ground = this.getGroundHeight(position.x, position.z);
        if (ground === null) {
            // Safety recovery for terrain edits or a changed map seed.
            this.placeOnNearestLand();
            this.verticalVelocity = 0;
            return;
        }

        if (this.grounded && this.keys.has(' ')) {
            this.verticalVelocity = this.settings.jumpSpeed;
            this.grounded = false;
        }
        this.verticalVelocity -= this.settings.gravity * frameTime;
        position.y += this.verticalVelocity * frameTime;

        const floor = ground + this.settings.eyeHeight;
        if (position.y <= floor) {
            position.y = floor;
            this.baseEyeY = floor;
            this.verticalVelocity = 0;
            this.grounded = true;
        } else {
            this.grounded = false;
        }

        const walking = moved && this.grounded;
        this.isWalking = walking;
        if (walking && this.settings.bobbingEnabled) {
            const sprintFactor = this.keys.has('shift') ? this.settings.sprintMultiplier : 1;
            this.bobTime += frameTime * this.settings.bobFrequency * sprintFactor;
        }
        const bobBlend = 1 - Math.exp(-this.settings.bobSmoothing * frameTime);
        const targetBobY = walking && this.settings.bobbingEnabled
            ? Math.abs(Math.sin(this.bobTime)) * this.settings.bobVerticalAmount
            : 0;
        const targetBobX = walking && this.settings.bobbingEnabled
            ? Math.cos(this.bobTime * 0.5) * this.settings.bobSideAmount
            : 0;
        this.bobOffsetY += (targetBobY - this.bobOffsetY) * bobBlend;
        this.bobOffsetX += (targetBobX - this.bobOffsetX) * bobBlend;
        // Apply camera-local side sway as a visual offset, separate from player position.
        this.appliedBobX = Math.cos(this.yaw) * this.bobOffsetX;
        this.appliedBobZ = -Math.sin(this.yaw) * this.bobOffsetX;
        this.appliedBobY = this.bobOffsetY;
        position.x += this.appliedBobX;
        position.z += this.appliedBobZ;
        position.y += this.appliedBobY;

        const targetTilt = this.settings.movementTiltEnabled
            ? -strafe * this.settings.movementTiltDegrees * Math.PI / 180
            : 0;
        const tiltBlend = 1 - Math.exp(-this.settings.movementTiltSmoothing * frameTime);
        this.tilt += (targetTilt - this.tilt) * tiltBlend;
        this._applyCameraRotation();
    }

    dispose() {
        window.removeEventListener('keydown', this._onKeyDown);
        window.removeEventListener('keyup', this._onKeyUp);
        window.removeEventListener('blur', this._onBlur);
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('pointerlockchange', this._onPointerLockChange);
        this.domElement.removeEventListener('click', this._onClick);
        this.domElement.removeEventListener('contextmenu', this._onContextMenu);
    }
}
