/** Short camera-driven intro and finale for the island escape objective. */
export class StoryFlow {
    constructor({ camera, controller, wreck, resources, required, enemies, onWin, onIntroComplete }) {
        this.camera = camera;
        this.controller = controller;
        this.wreck = wreck;
        this.resources = resources;
        this.required = required;
        this.enemies = enemies || [];
        this.onWin = onWin;
        this.onIntroComplete = onIntroComplete;
        this.phase = 'intro';
        this.phaseTime = 0;
        this.repairProgress = 0;
        this.nearWreck = false;
        this.oldPosition = null;
        this.oldRotation = null;
        this.cameraKeys = null;
        this.shipElapsed = 0;
        this.shipBase = null;
        this.shotDuration = 8;

        this.overlay = document.getElementById('story-overlay');
        this.title = document.getElementById('story-title');
        this.subtitle = document.getElementById('story-subtitle');
        this.objective = document.getElementById('story-objective');
        this.repairFill = document.getElementById('repair-progress-fill');
        this.winScreen = document.getElementById('win-screen');

        this._keydown = (event) => {
            if (['Space', 'Enter'].includes(event.code) && this.phase === 'intro') {
                event.preventDefault();
                this.finishIntro();
            }
        };
        window.addEventListener('keydown', this._keydown);
        this._setCard('THE WRECK', 'Gather what you need to repair your way off the island.', true);
    }

    _setCard(title, subtitle, showHint = false) {
        if (this.title) this.title.textContent = title;
        if (this.subtitle) this.subtitle.textContent = subtitle;
        if (this.overlay) this.overlay.classList.add('story-visible');
        if (this.overlay) this.overlay.classList.toggle('story-intro', showHint);
    }

    _hideCard() { this.overlay?.classList.remove('story-visible', 'story-intro'); }

    finishIntro() {
        if (this.phase !== 'intro') return;
        this.phase = 'gameplay';
        this.phaseTime = 0;
        this._restorePlayerCamera();
        this.onIntroComplete?.();
        this._hideCard();
        this.objective?.classList.add('objective-visible');
        this.controller?.keys.clear();
    }

    update(dt) {
        if (this.phase === 'intro') {
            this.phaseTime += dt;
            const segment = Math.floor(this.phaseTime / this.shotDuration);
            if (segment === 1 && this._lastSegment !== 1) {
                this._lastSegment = 1;
                this._setCard('SURVIVE & ESCAPE', 'Explore the island and find a way to make it home.', true);
            } else if (segment === 2 && this._lastSegment !== 2) {
                this._lastSegment = 2;
                this._setCard('DEFEAT THE ENEMIES', 'Collect the resources they drop to repair your ship.', true);
            }
            if (segment >= 3) this.finishIntro();
            this._updateIntroCamera();
            return;
        }

        if (this.phase === 'repairing') {
            this._updateRepair(dt);
            return;
        }

        if (this.phase === 'sailing') {
            this._updateSailing(dt);
            return;
        }

        if (this.phase !== 'gameplay') return;
        this._updateWreckPrompt();
    }

    _updateIntroCamera() {
        if (!this.wreck) return;
        if (!this.oldPosition) {
            this.oldPosition = this.camera.transform.position.toArray();
            this.oldRotation = this.camera.transform.rotation.toArray();
            this.cameraKeys = this.controller?.keys;
            if (this.controller) this.controller.keys = new Set();
        }
        const t = this.phaseTime;
        const p = this.camera.transform.position;
        const r = this.camera.transform.rotation;
        if (t < this.shotDuration) {
            const q = Math.min(t / this.shotDuration, 1);
            const smooth = q * q * (3 - 2 * q);
            const startHeight = 42;
            const endHeight = 23;
            p.set(this.wreck.transform.position.x + 34 - smooth * 15,
                this.wreck.transform.position.y + startHeight + (endHeight - startHeight) * smooth,
                this.wreck.transform.position.z + 42 - smooth * 18);
            const aimX = this.wreck.transform.position.x - p.x;
            const aimZ = this.wreck.transform.position.z - p.z;
            const aimY = this.wreck.transform.position.y + 1.5 - p.y;
            r.set(Math.atan2(aimY, Math.hypot(aimX, aimZ)), Math.atan2(-aimX, -aimZ), 0);
        } else if (t < this.shotDuration * 2) {
            const q = Math.min((t - this.shotDuration) / this.shotDuration, 1);
            const smooth = q * q * (3 - 2 * q);
            const south = { x: 0, z: 145 };
            const north = { x: 0, z: -145 };
            const east = { x: 150, z: 0 };
            let targetX;
            let targetZ;
            if (q < 0.55) {
                const leg = q / 0.55;
                const blend = leg * leg * (3 - 2 * leg);
                targetX = south.x + (north.x - south.x) * blend;
                targetZ = south.z + (north.z - south.z) * blend;
            } else {
                const leg = (q - 0.55) / 0.45;
                const blend = leg * leg * (3 - 2 * leg);
                targetX = north.x + (east.x - north.x) * blend;
                targetZ = north.z + (east.z - north.z) * blend;
            }
            const radius = 175 - smooth * 35;
            const orbit = q * Math.PI * 0.75;
            p.set(targetX + Math.sin(orbit) * radius,
                58 + Math.sin(q * Math.PI) * 10,
                targetZ + Math.cos(orbit) * radius);
            const aimX = targetX - p.x;
            const aimZ = targetZ - p.z;
            r.set(-0.42, Math.atan2(-aimX, -aimZ), 0);
        } else {
            const enemyList = typeof this.enemies === 'function' ? this.enemies() : this.enemies;
            const enemy = enemyList.find((item) => item && item.active && !item.isDead);
            if (!enemy) return;
            const q = Math.min((t - this.shotDuration * 2) / this.shotDuration, 1);
            const smooth = q * q * (3 - 2 * q);
            const targetX = enemy.transform.position.x;
            const targetY = enemy.transform.position.y + 3.3;
            const targetZ = enemy.transform.position.z;
            const angle = 0.7 + smooth * 0.8;
            const radius = 22 - smooth * 5;
            p.set(targetX + Math.sin(angle) * radius,
                targetY + 8 - smooth * 1.5,
                targetZ + Math.cos(angle) * radius);
            const aimX = targetX - p.x;
            const aimY = targetY - p.y;
            const aimZ = targetZ - p.z;
            r.set(Math.atan2(aimY, Math.hypot(aimX, aimZ)), Math.atan2(-aimX, -aimZ), 0);
        }
    }

    _restorePlayerCamera() {
        if (!this.oldPosition) return;
        this.camera.transform.position.set(...this.oldPosition);
        this.camera.transform.rotation.set(...this.oldRotation);
        if (this.controller && this.cameraKeys) this.controller.keys = this.cameraKeys;
        this.controller?.placeOnNearestLand();
        if (this.controller) {
            this.controller.pitch = this.camera.transform.rotation.x;
            this.controller.yaw = this.camera.transform.rotation.y;
            this.controller._applyCameraRotation();
        }
        this.oldPosition = null;
        this.oldRotation = null;
        this.cameraKeys = null;
    }

    _updateWreckPrompt() {
        if (!this.wreck || this.wreck.repaired) return;
        const p = this.camera.transform.position;
        const dx = p.x - this.wreck.transform.position.x;
        const dz = p.z - this.wreck.transform.position.z;
        this.nearWreck = Math.hypot(dx, dz) <= 7;
        const prompt = document.getElementById('repair-prompt');
        if (!prompt) return;
        prompt.classList.toggle('repair-prompt-visible', this.nearWreck);
        const ready = this.resources.total() >= this.required.total;
        prompt.textContent = ready
            ? 'HOLD E  •  REPAIR THE WRECK'
            : `COLLECT SCRAP: ${this.resources.total()} / ${this.required.total}`;
        if (this.nearWreck && this.controller?.keys.has('e') && ready) {
            this.phase = 'repairing';
            this.repairProgress = 0;
            if (this.repairFill) this.repairFill.style.width = '0%';
            document.getElementById('repair-progress')?.classList.add('repair-progress-visible');
        }
    }

    _updateRepair(dt) {
        const p = this.camera.transform.position;
        const near = Math.hypot(p.x - this.wreck.transform.position.x, p.z - this.wreck.transform.position.z) <= 7;
        if (!near || !this.controller?.keys.has('e')) {
            this.phase = 'gameplay';
            this.repairProgress = 0;
            document.getElementById('repair-progress')?.classList.remove('repair-progress-visible');
            return;
        }
        this.repairProgress = Math.min(1, this.repairProgress + dt / 3.5);
        if (this.repairFill) this.repairFill.style.width = `${this.repairProgress * 100}%`;
        if (this.repairProgress >= 1) this._repairComplete();
    }

    _repairComplete() {
        let remaining = this.required.total;
        for (const type of ['wood', 'cloth', 'metal']) {
            const amount = Math.min(this.resources.get(type), remaining);
            if (amount > 0) this.resources.removeResource(type, amount);
            remaining -= amount;
            if (!remaining) break;
        }
        this.wreck.repaired = true;
        this.wreck.name = 'Repaired Escape Ship';
        this.phase = 'sailing';
        this.shipElapsed = 0;
        this.shipBase = this.wreck.transform.position.toArray();
        this.controller?.keys.clear();
        document.exitPointerLock?.();
        document.getElementById('repair-progress')?.classList.remove('repair-progress-visible');
        document.getElementById('repair-prompt')?.classList.remove('repair-prompt-visible');
        this._setCard('BOAT REPAIRED', 'Time to leave this island behind.');
    }

    _updateSailing(dt) {
        this.shipElapsed += dt;
        const t = Math.min(this.shipElapsed / 5, 1);
        this.wreck.transform.position.set(this.shipBase[0] + t * 0.4,
            this.shipBase[1] + Math.sin(this.shipElapsed * 2.7) * 0.15,
            this.shipBase[2] - t * 9);
        this.wreck.transform.rotation.y += dt * 0.025;
        if (t >= 1) {
            this.phase = 'won';
            this._hideCard();
            this.winScreen?.classList.add('win-visible');
            this.onWin?.();
        }
    }

    restart() {
        this.phase = 'gameplay';
        this.phaseTime = 0;
        this.repairProgress = 0;
        if (this.wreck) {
            this.wreck.repaired = false;
            this.wreck.name = 'Ship Wreck [Objective]';
            if (this.shipBase) this.wreck.transform.position.set(...this.shipBase);
        }
        this.shipElapsed = 0;
        this._restorePlayerCamera();
        this._hideCard();
        this.winScreen?.classList.remove('win-visible');
        this.objective?.classList.add('objective-visible');
    }

    dispose() { window.removeEventListener('keydown', this._keydown); }
}
