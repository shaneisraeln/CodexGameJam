/**
 * Circle-based XZ collision world backed by a uniform spatial hash.
 * Static scenery is indexed once; moving actors can update their own collider.
 */
export const CollisionLayer = Object.freeze({
    WORLD: 1 << 0,
    PLAYER: 1 << 1,
    NPC: 1 << 2,
    ALL: 0xffffffff
});

export class CollisionWorld {
    constructor({ cellSize = 16, defaultLayer = 1 } = {}) {
        this.cellSize = Math.max(1, cellSize);
        this.defaultLayer = defaultLayer;
        this.cells = new Map();
        this.colliders = new Set();
        this.meshBoundsCache = new WeakMap();
        this.queryStamp = 0;
    }

    _key(cellX, cellZ) {
        return `${cellX},${cellZ}`;
    }

    _cellRange(x, z, radius) {
        const size = this.cellSize;
        return {
            minX: Math.floor((x - radius) / size),
            maxX: Math.floor((x + radius) / size),
            minZ: Math.floor((z - radius) / size),
            maxZ: Math.floor((z + radius) / size)
        };
    }

    _index(collider) {
        const range = this._cellRange(collider.x, collider.z, collider.radius);
        collider._range = range;
        collider._cells = [];
        for (let x = range.minX; x <= range.maxX; x++) {
            for (let z = range.minZ; z <= range.maxZ; z++) {
                const key = this._key(x, z);
                let bucket = this.cells.get(key);
                if (!bucket) this.cells.set(key, bucket = new Set());
                bucket.add(collider);
                collider._cells.push(key);
            }
        }
    }

    _unindex(collider) {
        for (const key of collider._cells || []) {
            const bucket = this.cells.get(key);
            if (!bucket) continue;
            bucket.delete(collider);
            if (bucket.size === 0) this.cells.delete(key);
        }
        collider._cells = [];
        collider._range = null;
    }

    addCircle({
        object = null, x = 0, y = 0, z = 0, radius = 0.5,
        minY = -Infinity, maxY = Infinity, layer = this.defaultLayer,
        mask = 0xffffffff, isStatic = false
    } = {}) {
        const collider = {
            object, x, y, z,
            radius: Math.max(0, radius),
            minY, maxY, layer, mask, isStatic,
            _cells: [], _range: null, _queryStamp: 0
        };
        this.colliders.add(collider);
        this._index(collider);
        return collider;
    }

    /** Add a static scenery collider using its mesh's local XZ bounds and scale. */
    addStaticObject(object, options = {}) {
        if (!object?.mesh?.vertices || !object.transform) return null;
        const bounds = this._getMeshBounds(object.mesh);
        const position = object.transform.position;
        const scale = object.transform.scale;
        const largestScale = Math.max(Math.abs(scale.x), Math.abs(scale.z));
        const radius = options.radius ?? bounds.radius * largestScale * (options.radiusScale ?? 1);
        const verticalScale = Math.abs(scale.y);
        const rotation3D = Math.abs(object.transform.rotation.x) > 0.001 || Math.abs(object.transform.rotation.z) > 0.001;
        const verticalExtent = rotation3D
            ? bounds.radius3D * Math.max(largestScale, verticalScale)
            : bounds.maxAbsY * verticalScale;

        return this.addCircle({
            object,
            x: position.x,
            y: position.y,
            z: position.z,
            radius,
            minY: options.minY ?? position.y - verticalExtent,
            maxY: options.maxY ?? position.y + verticalExtent,
            layer: options.layer ?? this.defaultLayer,
            mask: options.mask ?? 0xffffffff,
            isStatic: true
        });
    }

    _getMeshBounds(mesh) {
        let bounds = this.meshBoundsCache.get(mesh);
        if (bounds) return bounds;

        const vertices = mesh.vertices;
        let radiusSquared = 0;
        let radius3DSquared = 0;
        let maxAbsY = 0;
        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const y = vertices[i + 1];
            const z = vertices[i + 2];
            radiusSquared = Math.max(radiusSquared, x * x + z * z);
            radius3DSquared = Math.max(radius3DSquared, x * x + y * y + z * z);
            maxAbsY = Math.max(maxAbsY, Math.abs(y));
        }
        bounds = {
            radius: Math.sqrt(radiusSquared),
            radius3D: Math.sqrt(radius3DSquared),
            maxAbsY
        };
        this.meshBoundsCache.set(mesh, bounds);
        return bounds;
    }

    remove(collider) {
        if (!collider || !this.colliders.has(collider)) return false;
        this._unindex(collider);
        this.colliders.delete(collider);
        return true;
    }

    update(collider, x, y = collider?.y ?? 0, z = collider?.z ?? 0) {
        if (!collider || !this.colliders.has(collider) || collider.isStatic) return false;
        const nextRange = this._cellRange(x, z, collider.radius);
        const oldRange = collider._range;
        const sameCells = oldRange && oldRange.minX === nextRange.minX && oldRange.maxX === nextRange.maxX &&
            oldRange.minZ === nextRange.minZ && oldRange.maxZ === nextRange.maxZ;
        if (!sameCells) this._unindex(collider);
        collider.x = x;
        collider.y = y;
        collider.z = z;
        if (!sameCells) this._index(collider);
        return true;
    }

    queryNearby(x, z, radius = 0, {
        layerMask = 0xffffffff, actorLayer = 0xffffffff, exclude = null, out = []
    } = {}) {
        out.length = 0;
        const range = this._cellRange(x, z, radius);
        const stamp = ++this.queryStamp;
        for (let cellX = range.minX; cellX <= range.maxX; cellX++) {
            for (let cellZ = range.minZ; cellZ <= range.maxZ; cellZ++) {
                const bucket = this.cells.get(this._key(cellX, cellZ));
                if (!bucket) continue;
                for (const collider of bucket) {
                    if (collider === exclude || collider._queryStamp === stamp ||
                        !(collider.layer & layerMask) || !(collider.mask & actorLayer)) continue;
                    collider._queryStamp = stamp;
                    if (collider.object && !collider.object.active) continue;
                    const reach = radius + collider.radius;
                    const dx = collider.x - x;
                    const dz = collider.z - z;
                    if (dx * dx + dz * dz <= reach * reach) out.push(collider);
                }
            }
        }
        return out;
    }

    /** Push an actor circle out of nearby scenery; returns corrected X/Z and contacts. */
    resolveCircle(x, z, radius, {
        minY = -Infinity, maxY = Infinity,
        layerMask = 0xffffffff, actorLayer = 0xffffffff, exclude = null, iterations = 3
    } = {}) {
        const contacts = [];
        const nearby = [];
        let resolvedX = x;
        let resolvedZ = z;

        for (let pass = 0; pass < iterations; pass++) {
            this.queryNearby(resolvedX, resolvedZ, radius, { layerMask, actorLayer, exclude, out: nearby });
            let moved = false;
            for (const collider of nearby) {
                if (collider.maxY < minY || collider.minY > maxY) continue;

                let dx = resolvedX - collider.x;
                let dz = resolvedZ - collider.z;
                const minDistance = radius + collider.radius;
                const distanceSquared = dx * dx + dz * dz;
                if (distanceSquared >= minDistance * minDistance) continue;

                const distance = Math.sqrt(distanceSquared);
                // Stable fallback normal for exact center overlap.
                const normalX = distance < 1e-6 ? 1 : dx / distance;
                const normalZ = distance < 1e-6 ? 0 : dz / distance;
                const push = minDistance - distance;
                resolvedX += normalX * push;
                resolvedZ += normalZ * push;
                moved = true;
                if (!contacts.includes(collider)) contacts.push(collider);
            }
            if (!moved) break;
        }

        return { x: resolvedX, z: resolvedZ, collided: contacts.length > 0, contacts };
    }

    clear({ staticOnly = false } = {}) {
        for (const collider of Array.from(this.colliders)) {
            if (!staticOnly || collider.isStatic) this.remove(collider);
        }
    }
}
