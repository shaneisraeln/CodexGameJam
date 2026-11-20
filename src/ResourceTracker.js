/**
 * ResourceTracker
 *
 * Tracks wood / cloth / metal counts and drives the resource HUD panel.
 * Designed to be the single source of truth for loot — anything that
 * grants or consumes resources goes through here.
 *
 * Usage:
 *   const resources = new ResourceTracker();
 *   resources.addResource('wood', 2);
 *   resources.get('wood');   // → 2
 *   resources.reset();       // back to zero (call on new game)
 */
export class ResourceTracker {

    constructor() {
        this._counts = { wood: 0, cloth: 0, metal: 0 };
        this._listeners = [];

        // Cache DOM refs
        this._els = {
            wood:  document.getElementById('res-wood-count'),
            cloth: document.getElementById('res-cloth-count'),
            metal: document.getElementById('res-metal-count')
        };

        this._render();
    }

    // ── Public API ────────────────────────────────────────────────────────

    /**
     * Add `amount` of `type` resource.
     * @param {'wood'|'cloth'|'metal'} type
     * @param {number} amount
     */
    addResource(type, amount) {
        if (!(type in this._counts) || amount <= 0) return;
        this._counts[type] += amount;
        this._render();
        this._flashCount(type);
        this._notify(type, amount);
    }

    /** Spend a resource only when the full requested amount is available. */
    removeResource(type, amount) {
        if (!(type in this._counts) || amount <= 0 || this._counts[type] < amount) return false;
        this._counts[type] -= amount;
        this._render();
        this._notify(type, -amount);
        return true;
    }

    /** Get current count for a resource type. */
    get(type) {
        return this._counts[type] || 0;
    }

    /** Snapshot of all counts — useful for death screen stats. */
    getAll() {
        return { wood: this._counts.wood, cloth: this._counts.cloth, metal: this._counts.metal };
    }

    /** Total resources collected across all types. */
    total() {
        return this._counts.wood + this._counts.cloth + this._counts.metal;
    }

    /** Reset all counts to zero (called on new game). */
    reset() {
        this._counts.wood  = 0;
        this._counts.cloth = 0;
        this._counts.metal = 0;
        this._render();
    }

    /**
     * Register a listener called whenever a resource changes.
     * @param {(type:string, amount:number, counts:object) => void} fn
     * @returns {() => void}  Unsubscribe function.
     */
    onChange(fn) {
        this._listeners.push(fn);
        return () => { this._listeners = this._listeners.filter(function(l) { return l !== fn; }); };
    }

    // ── Private ───────────────────────────────────────────────────────────

    _render() {
        for (var key in this._counts) {
            var el = this._els[key];
            if (el) el.textContent = this._counts[key];
        }
    }

    _flashCount(type) {
        var el = this._els[type];
        if (!el) return;
        el.classList.remove('res-pop');
        // Force reflow so animation restarts on rapid pickups
        void el.offsetWidth;
        el.classList.add('res-pop');
        var captured = el;
        setTimeout(function() { captured.classList.remove('res-pop'); }, 500);
    }

    _notify(type, amount) {
        var counts = this.getAll();
        for (var i = 0; i < this._listeners.length; i++) {
            this._listeners[i](type, amount, counts);
        }
    }
}
