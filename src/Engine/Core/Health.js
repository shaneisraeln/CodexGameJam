/** Small reusable health component for players, NPCs, and enemies. */
export class Health {
    constructor(maxHealth = 100, { currentHealth = maxHealth } = {}) {
        this.maxHealth = this._validMax(maxHealth);
        this.currentHealth = this._clamp(currentHealth);
        this.changeListeners = new Set();
        this.deathListeners = new Set();
        this._wasDead = this.currentHealth <= 0;
    }

    get isDead() {
        return this.currentHealth <= 0;
    }

    get fraction() {
        return this.maxHealth > 0 ? this.currentHealth / this.maxHealth : 0;
    }

    _validMax(value) {
        return Number.isFinite(value) ? Math.max(1, value) : 100;
    }

    _clamp(value) {
        return Math.max(0, Math.min(this.maxHealth, Number.isFinite(value) ? value : this.maxHealth));
    }

    _notify(type, amount, source) {
        const event = { type, amount, source, currentHealth: this.currentHealth, maxHealth: this.maxHealth, health: this };
        for (const listener of this.changeListeners) listener(event);

        if (this.isDead && !this._wasDead) {
            for (const listener of this.deathListeners) listener({ ...event, type: 'death' });
        }
        this._wasDead = this.isDead;
    }

    /** Reduce health and return the actual amount removed. */
    takeDamage(amount, source = null) {
        if (this.isDead || !Number.isFinite(amount) || amount <= 0) return 0;
        const previous = this.currentHealth;
        this.currentHealth = this._clamp(previous - amount);
        const applied = previous - this.currentHealth;
        if (applied > 0) this._notify('damage', applied, source);
        return applied;
    }

    /** Restore health and return the actual amount restored. */
    heal(amount, source = null) {
        if (!Number.isFinite(amount) || amount <= 0 || this.isDead) return 0;
        const previous = this.currentHealth;
        this.currentHealth = this._clamp(previous + amount);
        const restored = this.currentHealth - previous;
        if (restored > 0) this._notify('heal', restored, source);
        return restored;
    }

    setHealth(value, source = null) {
        if (!Number.isFinite(value)) return 0;
        const previous = this.currentHealth;
        this.currentHealth = this._clamp(value);
        const difference = this.currentHealth - previous;
        if (difference !== 0) this._notify(difference < 0 ? 'damage' : 'heal', Math.abs(difference), source);
        return difference;
    }

    reset(source = null) {
        const previous = this.currentHealth;
        this.currentHealth = this.maxHealth;
        const restored = this.currentHealth - previous;
        if (restored !== 0) this._notify('heal', restored, source);
        return restored;
    }

    setMaxHealth(value, { refill = false } = {}) {
        const wasFull = this.currentHealth >= this.maxHealth;
        this.maxHealth = this._validMax(value);
        this.currentHealth = refill || wasFull ? this.maxHealth : this._clamp(this.currentHealth);
        this._notify('maxHealth', 0, null);
        return this.maxHealth;
    }

    onChange(listener) {
        this.changeListeners.add(listener);
        return () => this.changeListeners.delete(listener);
    }

    onDeath(listener) {
        this.deathListeners.add(listener);
        return () => this.deathListeners.delete(listener);
    }
}
