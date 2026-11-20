/**
 * PlayerHealth — tracks the player's current and maximum HP.
 *
 * Usage:
 *   const health = new PlayerHealth({ maxHp: 100 });
 *   health.takeDamage(25);   // deal 25 damage
 *   health.heal(10);         // restore 10 HP
 *   health.isDead            // true when HP reaches 0
 *
 * The class drives the #health-bar HUD element directly so no
 * external update call is needed in the game loop.
 */
export class PlayerHealth {
    constructor({
        maxHp       = 100,
        startHp     = null,
        onDeath     = null,   // () => void  — fired once when HP hits 0
        onDamage    = null,   // (amount, current, max) => void
        onHeal      = null,   // (amount, current, max) => void
    } = {}) {
        this.maxHp   = maxHp;
        this.hp      = startHp ?? maxHp;
        this.isDead  = false;

        this._onDeath  = onDeath;
        this._onDamage = onDamage;
        this._onHeal   = onHeal;

        // Cache DOM references once
        this._bar    = document.getElementById('health-bar-fill');
        this._label  = document.getElementById('health-bar-label');
        this._root   = document.getElementById('health-bar-root');

        this._render();
    }

    /** Deal `amount` damage (clamped, ignores dead state). */
    takeDamage(amount) {
        if (this.isDead || amount <= 0) return;
        this.hp = Math.max(0, this.hp - amount);
        this._onDamage?.(amount, this.hp, this.maxHp);
        this._render();
        this._flashDamage();
        if (this.hp === 0 && !this.isDead) {
            this.isDead = true;
            this._onDeath?.();
        }
    }

    /** Restore `amount` HP (clamped to maxHp, also revives). */
    heal(amount) {
        if (amount <= 0) return;
        const prev = this.hp;
        this.hp = Math.min(this.maxHp, this.hp + amount);
        if (this.hp > prev) {
            if (this.isDead) this.isDead = false;
            this._onHeal?.(amount, this.hp, this.maxHp);
            this._render();
        }
    }

    /** Set HP directly (useful for editor / debug). */
    setHp(value) {
        this.hp = Math.max(0, Math.min(this.maxHp, value));
        this.isDead = this.hp === 0;
        this._render();
    }

    /** Set a new maximum HP (scales current proportionally). */
    setMaxHp(newMax) {
        const ratio = this.hp / this.maxHp;
        this.maxHp = Math.max(1, newMax);
        this.hp    = Math.round(ratio * this.maxHp);
        this._render();
    }

    // ── Private ────────────────────────────────────────────────────────────

    _render() {
        if (!this._bar || !this._label) return;

        const pct = this.hp / this.maxHp;          // 0 – 1
        this._bar.style.width = `${pct * 100}%`;

        // Colour shifts: green → amber → red as HP drops
        if (pct > 0.6) {
            this._bar.style.backgroundColor = '#7ecf6e';    // healthy green
        } else if (pct > 0.3) {
            this._bar.style.backgroundColor = '#e8a040';    // warning amber
        } else {
            this._bar.style.backgroundColor = '#d94040';    // critical red
        }

        this._label.textContent = `${this.hp} / ${this.maxHp}`;

        // Pulse the root element so the player notices critical HP
        if (this._root) {
            this._root.classList.toggle('health-critical', pct <= 0.3 && !this.isDead);
        }
    }

    /** Brief red screen-edge flash on damage. */
    _flashDamage() {
        const flash = document.getElementById('damage-flash');
        if (!flash) return;
        flash.classList.remove('damage-flash-active');
        // Force reflow so the animation restarts even on rapid hits
        void flash.offsetWidth;
        flash.classList.add('damage-flash-active');
    }
}
