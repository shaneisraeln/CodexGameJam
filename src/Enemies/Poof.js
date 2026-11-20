/**
 * Poof — toon death-burst particle system using DOM elements.
 *
 * Uses Camera.getScreenPosition (the same projection path the renderer uses)
 * to map world positions to CSS pixel coordinates.
 *
 * Usage:
 *   Poof.spawn(worldPos, camera);      // death cloud — 12 particles + ring
 *   Poof.spawnHit(worldPos, camera);   // small hit spark — 5 particles
 */
export class Poof {

    // ── World → Screen ────────────────────────────────────────────────────

    /**
     * Returns CSS pixel {sx, sy} for a world-space point, or null if behind camera.
     * Reuses Camera.getScreenPosition internally (same math as the renderer).
     * @param {{x,y,z}} worldPos
     * @param {Camera}  camera
     * @returns {{sx:number,sy:number}|null}
     */
    static worldToScreen(worldPos, camera) {
        // Build a minimal object that Camera.getScreenPosition can read
        var dummy = {
            transform: {
                updateWorldMatrix: function() {},
                worldMatrix: new Float32Array([
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    worldPos.x, worldPos.y, worldPos.z, 1
                ])
            }
        };

        var uv = camera.getScreenPosition(dummy);
        // uv is [0..1, 0..1] — Y=0 is bottom in NDC but CSS Y=0 is top, so flip Y
        // getScreenPosition returns Y where 0=bottom, 1=top (NDC convention)
        // CSS needs Y where 0=top, so flip
        var sx = uv[0] * window.innerWidth;
        var sy = (1.0 - uv[1]) * window.innerHeight;

        // Simple behind-camera check: if the screen UV is way outside [0,1] the
        // point is likely behind us — don't render.
        if (uv[0] < -1 || uv[0] > 2 || uv[1] < -1 || uv[1] > 2) return null;

        return {
            sx: sx,
            sy: sy
        };
    }

    // ── Public API ────────────────────────────────────────────────────────

    /** Big death poof — 12 particles + ring flash. */
    static spawn(worldPos, camera) {
        var screen = Poof.worldToScreen(worldPos, camera);
        if (!screen) return;

        Poof._burst(screen.sx, screen.sy, {
            count: 12,
            minSize: 10,
            maxSize: 26,
            minDist: 38,
            maxDist: 90,
            duration: 700,
            shapes: ['circle', 'circle', 'circle', 'star', 'star'],
            colors: ['#f5c842', '#f58c42', '#f54242', '#fff176', '#c8f542', '#42d4f5']
        });
        Poof._ring(screen.sx, screen.sy);
    }

    /** Small hit spark — 5 particles, faster, smaller. */
    static spawnHit(worldPos, camera) {
        var screen = Poof.worldToScreen(worldPos, camera);
        if (!screen) return;

        Poof._burst(screen.sx, screen.sy, {
            count: 5,
            minSize: 5,
            maxSize: 13,
            minDist: 18,
            maxDist: 44,
            duration: 380,
            shapes: ['star', 'circle'],
            colors: ['#ffffff', '#ffd84d', '#ff8c42']
        });
    }

    // ── Internals ─────────────────────────────────────────────────────────

    static _burst(cx, cy, opts) {
        for (var i = 0; i < opts.count; i++) {
            var angle = (i / opts.count) * Math.PI * 2 + Math.random() * 0.6;
            var dist = opts.minDist + Math.random() * (opts.maxDist - opts.minDist);
            var size = opts.minSize + Math.random() * (opts.maxSize - opts.minSize);
            var color = opts.colors[Math.floor(Math.random() * opts.colors.length)];
            var shape = opts.shapes[Math.floor(Math.random() * opts.shapes.length)];
            var delay = Math.random() * 60;
            var tx = Math.cos(angle) * dist;
            var ty = Math.sin(angle) * dist - dist * 0.3;
            Poof._makeParticle(cx, cy, tx, ty, size, color, shape, opts.duration, delay);
        }
    }

    static _ring(cx, cy) {
        var el = document.createElement('div');
        el.className = 'poof-ring';
        el.style.left = cx + 'px';
        el.style.top = cy + 'px';
        document.body.appendChild(el);
        setTimeout(function() {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 500);
    }

    static _makeParticle(cx, cy, tx, ty, size, color, shape, duration, delay) {
        var el = document.createElement('div');

        if (shape === 'star') {
            el.className = 'poof-star';
            el.textContent = '★';
            el.style.fontSize = size + 'px';
            el.style.color = color;
            el.style.textShadow = '1px 1px 0 #1a0a00';
        } else {
            el.className = 'poof-dot';
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.background = color;
            el.style.borderRadius = '50%';
            el.style.border = '2px solid #1a0a00';
        }

        el.style.left = cx + 'px';
        el.style.top = cy + 'px';
        el.style.setProperty('--tx', tx + 'px');
        el.style.setProperty('--ty', ty + 'px');
        el.style.animationDuration = duration + 'ms';
        el.style.animationDelay = delay + 'ms';

        document.body.appendChild(el);
        setTimeout(function() {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, duration + delay + 100);
    }
}