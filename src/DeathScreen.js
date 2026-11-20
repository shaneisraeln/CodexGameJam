/**
 * DeathScreen
 *
 * Full-screen toon overlay shown when the player's HP hits 0.
 * Shows collected resource stats, then lets the player restart
 * with a fresh random seed via the "Play Again" button.
 *
 * Usage:
 *   const death = new DeathScreen({ onRestart: (seed) => game.respawnWithSeed(seed) });
 *   death.show(resourceTracker.getAll());   // called from PlayerHealth.onDeath
 *   death.hide();                           // called after respawn completes
 */
export class DeathScreen {

    constructor(options) {
        if (!options) options = {};
        this._onRestart = options.onRestart || null;

        this._root     = document.getElementById('death-screen');
        this._statsEl  = document.getElementById('death-stats');
        this._btn      = document.getElementById('death-restart-btn');
        this._titleEl  = document.getElementById('death-title');

        this._visible  = false;

        if (this._btn) {
            var self = this;
            this._btn.addEventListener('click', function() { self._restart(); });
        }
    }

    // ── Public ────────────────────────────────────────────────────────────

    /**
     * Reveal the death screen.
     * @param {{ wood:number, cloth:number, metal:number }} resources
     */
    show(resources) {
        if (this._visible) return;
        this._visible = true;

        // Populate stats
        if (this._statsEl) {
            var r = resources || { wood: 0, cloth: 0, metal: 0 };
            var total = r.wood + r.cloth + r.metal;
            this._statsEl.innerHTML =
                '<div class="ds-stat"><span class="ds-stat-icon">🪵</span>' +
                    '<span class="ds-stat-label">Wood</span>' +
                    '<span class="ds-stat-value">' + r.wood + '</span></div>' +
                '<div class="ds-stat"><span class="ds-stat-icon">🧵</span>' +
                    '<span class="ds-stat-label">Cloth</span>' +
                    '<span class="ds-stat-value">' + r.cloth + '</span></div>' +
                '<div class="ds-stat"><span class="ds-stat-icon">⚙</span>' +
                    '<span class="ds-stat-label">Metal</span>' +
                    '<span class="ds-stat-value">' + r.metal + '</span></div>' +
                '<div class="ds-stat ds-stat-total"><span class="ds-stat-icon">📦</span>' +
                    '<span class="ds-stat-label">Total</span>' +
                    '<span class="ds-stat-value">' + total + '</span></div>';
        }

        if (this._root) {
            this._root.classList.remove('death-hidden');
            this._root.classList.add('death-visible');
        }

        // Stagger title letters for a dramatic entrance
        if (this._titleEl) {
            var text  = 'YOU DIED';
            var html  = '';
            for (var i = 0; i < text.length; i++) {
                var ch = text[i] === ' ' ? '&nbsp;' : text[i];
                html += '<span class="ds-letter" style="animation-delay:' + (i * 0.07) + 's">' + ch + '</span>';
            }
            this._titleEl.innerHTML = html;
        }

        // Release pointer lock so the player can click the button
        if (document.exitPointerLock) document.exitPointerLock();
    }

    hide() {
        if (!this._visible) return;
        this._visible = false;
        if (this._root) {
            this._root.classList.remove('death-visible');
            this._root.classList.add('death-hidden');
        }
    }

    // ── Private ───────────────────────────────────────────────────────────

    _restart() {
        var seed = Math.floor(Math.random() * 1000000);
        this.hide();
        if (this._onRestart) this._onRestart(seed);
    }
}
