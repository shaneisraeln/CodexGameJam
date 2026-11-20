/**
 * EnemyDrop
 *
 * A lightweight world-space loot pickup. It is NOT a GameObject — it has no
 * mesh and renders nothing in WebGL. Instead it draws itself as a small DOM
 * billboard (emoji + label) projected onto the screen each frame, which keeps
 * it completely decoupled from the render pipeline.
 *
 * Behaviour:
 *   - Spawns at the enemy's death position with a small random scatter.
 *   - Bobs up and down in world-Y, projected to screen each frame.
 *   - Once the player walks within COLLECT_RADIUS world units it is
 *     auto-collected: the DOM element plays a "fly to HUD" animation then
 *     ResourceTracker.addResource() is called.
 *   - Dead drops (collected or expired) return true from update() so the
 *     owner can splice them out.
 */

var COLLECT_RADIUS  = 2.2;   // world units — auto-pickup distance
var BOB_SPEED       = 2.2;   // rad/s
var BOB_AMP         = 0.18;  // world units
var LIFETIME        = 30.0;  // seconds before the drop despawns on its own
var MAGNET_RADIUS   = 5.0;   // world units — start pulling toward player
var MAGNET_SPEED    = 7.0;   // world units/s at the magnet boundary

// Icon and colour per resource type
var RESOURCE_DEFS = {
    wood:   { icon: '🪵', color: '#8B5E3C', label: 'Wood'   },
    cloth:  { icon: '🧵', color: '#D4A0C0', label: 'Cloth'  },
    metal:  { icon: '⚙',  color: '#9BB0C0', label: 'Metal'  }
};

export class EnemyDrop {
    /**
     * @param {{x,y,z}} worldPos   Spawn position (enemy feet).
     * @param {string}  resource   'wood' | 'cloth' | 'metal'
     * @param {number}  amount     Stack size (1-3).
     */
    constructor(worldPos, resource, amount) {
        this.x        = worldPos.x + (Math.random() - 0.5) * 1.6;
        this.y        = worldPos.y;
        this.z        = worldPos.z + (Math.random() - 0.5) * 1.6;
        this.baseY    = this.y;
        this.resource = resource;
        this.amount   = amount;

        this._bobTime  = Math.random() * Math.PI * 2;
        this._lifetime = LIFETIME;
        this.collected = false;

        var def = RESOURCE_DEFS[resource] || RESOURCE_DEFS.wood;

        // ── DOM element ───────────────────────────────────────────────────
        this._el = document.createElement('div');
        this._el.className = 'enemy-drop';
        this._el.innerHTML =
            '<span class="drop-icon">' + def.icon + '</span>' +
            '<span class="drop-label" style="color:' + def.color + '">' +
                (amount > 1 ? 'x' + amount + ' ' : '') + def.label +
            '</span>';
        document.body.appendChild(this._el);

        // Entrance pop
        this._el.classList.add('drop-spawn');
        var el = this._el;
        setTimeout(function() { el.classList.remove('drop-spawn'); }, 400);
    }

    /**
     * Per-frame update.
     * @param {number}  dt
     * @param {{x,y,z}} playerPos   Camera / player world position.
     * @param {Camera}  camera      For world→screen projection.
     * @param {object}  resourceTracker  Has .addResource(type, amount).
     * @returns {boolean}  true when this drop should be removed.
     */
    update(dt, playerPos, camera, resourceTracker) {
        if (this.collected) return true;

        this._lifetime -= dt;
        if (this._lifetime <= 0) {
            this._remove();
            return true;
        }

        this._bobTime += BOB_SPEED * dt;
        this.y = this.baseY + Math.sin(this._bobTime) * BOB_AMP;

        // Magnet pull — slide toward player when close
        var dx = playerPos.x - this.x;
        var dz = playerPos.z - this.z;
        var dist = Math.sqrt(dx * dx + dz * dz);

        if (dist < MAGNET_RADIUS && dist > 0.01) {
            var t      = 1.0 - dist / MAGNET_RADIUS;   // 0 at edge, 1 at centre
            var speed  = MAGNET_SPEED * t * dt;
            this.x    += (dx / dist) * speed;
            this.z    += (dz / dist) * speed;
        }

        // Auto-collect
        if (dist < COLLECT_RADIUS) {
            this._collect(resourceTracker);
            return true;
        }

        // Project to screen and position DOM element
        var screen = EnemyDrop._worldToScreen({ x: this.x, y: this.y + 0.5, z: this.z }, camera);
        if (!screen) {
            this._el.style.display = 'none';
        } else {
            this._el.style.display = '';
            this._el.style.left = screen.sx + 'px';
            this._el.style.top  = screen.sy + 'px';

            // Scale down with distance for depth cue
            var camDx  = this.x - playerPos.x;
            var camDz  = this.z - playerPos.z;
            var camDist = Math.sqrt(camDx * camDx + camDz * camDz);
            var scale  = Math.max(0.5, Math.min(1.0, 8.0 / (camDist + 1)));
            this._el.style.transform = 'translate(-50%, -50%) scale(' + scale.toFixed(2) + ')';

            // Fade out in last 5 seconds
            var alpha = this._lifetime < 5 ? this._lifetime / 5 : 1;
            this._el.style.opacity = alpha.toFixed(2);
        }

        return false;
    }

    _collect(resourceTracker) {
        this.collected = true;
        if (resourceTracker) resourceTracker.addResource(this.resource, this.amount);

        // Fly-to-HUD animation
        var el = this._el;
        el.classList.add('drop-collect');
        setTimeout(function() {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 500);
    }

    _remove() {
        var el = this._el;
        el.classList.add('drop-expire');
        setTimeout(function() {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 400);
    }

    // ── Projection ─────────────────────────────────────────────────────────

    static _worldToScreen(pos, camera) {
        var vm = camera.viewMatrix;
        var pm = camera.projectionMatrix;

        var vx = vm[0]*pos.x + vm[4]*pos.y + vm[8] *pos.z + vm[12];
        var vy = vm[1]*pos.x + vm[5]*pos.y + vm[9] *pos.z + vm[13];
        var vz = vm[2]*pos.x + vm[6]*pos.y + vm[10]*pos.z + vm[14];
        var vw = vm[3]*pos.x + vm[7]*pos.y + vm[11]*pos.z + vm[15];

        if (vz > 0) return null;

        var cx = pm[0]*vx + pm[4]*vy + pm[8] *vz + pm[12]*vw;
        var cy = pm[1]*vx + pm[5]*vy + pm[9] *vz + pm[13]*vw;
        var cw = pm[3]*vx + pm[7]*vy + pm[11]*vz + pm[15]*vw;
        if (Math.abs(cw) < 1e-6) return null;

        var ndcX =  cx / cw;
        var ndcY = -cy / cw;
        if (ndcX < -1.3 || ndcX > 1.3 || ndcY < -1.3 || ndcY > 1.3) return null;

        return {
            sx: (ndcX * 0.5 + 0.5) * window.innerWidth,
            sy: (ndcY * 0.5 + 0.5) * window.innerHeight
        };
    }
}
