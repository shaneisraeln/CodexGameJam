import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { Mesh } from './Engine/Rendering/Mesh.js';
import { HexGridMesh } from './HexGridMesh.js';
import CONTINENT from './CustomMapNoise.js';

/** Builds one static combined mesh and one draw call per grass model. */
export class GrassBatchSpawner {
    constructor(gl, renderer, material, scene, {
        density = 0.006,
        seed = 68,
        scaleRange = [0.75, 1.35]
    } = {}) {
        this.gl = gl;
        this.renderer = renderer;
        this.material = material;
        this.scene = scene;
        this.density = density;
        this.scaleRange = scaleRange;
        this.seed = seed >>> 0;
        this.currentState = this.seed;
        this.objects = [];
        this.files = ['grass.obj', 'grass-patch.obj', 'grass-plant.obj'];
        this.lastSpawnStats = { samples: 0, landSamples: 0, instances: 0, batches: 0 };
    }

    setSeed(seed) { this.seed = seed >>> 0; this.currentState = this.seed; }

    random() {
        this.currentState = (this.currentState + 0x6D2B79F5) | 0;
        let t = this.currentState;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    async spawn(bounds, yFixed = -11) {
        this.clear();
        this.setSeed(this.seed);
        const templates = await Promise.all(this.files.map(async (file) => {
            try { return await ObjLoader.load(this.gl, `./Assets/3D/Land/${file}`); }
            catch (error) { console.warn(`GrassBatchSpawner: failed to load ${file}`, error); return null; }
        }));
        const terrainWidth = 255 * Math.sqrt(3);
        const terrainDepth = 255 * 1.5;
        const area = terrainWidth * terrainDepth;
        const samples = Math.max(1, Math.floor(area * this.density));
        this.lastSpawnStats = { samples, landSamples: 0, instances: 0, batches: 0 };
        const positions = templates.map(() => []);
        const uvs = templates.map(() => []);
        const normals = templates.map(() => []);
        const instancePositions = templates.map(() => []);
        const instanceYaws = templates.map(() => []);
        const instanceScales = templates.map(() => []);
        const terrainOffsetX = -(255 * Math.sqrt(3) / 2);
        const terrainOffsetZ = -(255 * 1.5 / 2);

        const cols = Math.max(1, Math.ceil(Math.sqrt(samples * terrainWidth / terrainDepth)));
        const rows = Math.max(1, Math.ceil(samples / cols));
        const cellWidth = terrainWidth / cols;
        const cellDepth = terrainDepth / rows;
        for (let i = 0; i < samples; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const terrainX = (col + 0.2 + this.random() * 0.6) * cellWidth;
            const terrainZ = (row + 0.2 + this.random() * 0.6) * cellDepth;
            const worldX = terrainX + terrainOffsetX;
            const worldZ = terrainZ + terrainOffsetZ;
            const rawValue = CONTINENT.getValue(terrainX, terrainZ, 0);
            if (rawValue < 0.45) continue;
            this.lastSpawnStats.landSamples++;
            const modelIndex = Math.min(this.files.length - 1, Math.floor(this.random() * this.files.length));
            const template = templates[modelIndex];
            if (!template) continue;
            this.lastSpawnStats.instances++;

            // Same vertical placement as LandObjectSpawner, including terrain object's Y scale.
            const y = yFixed + HexGridMesh.terrainValue(rawValue) * 20 * 0.4;
            const yaw = this.random() * Math.PI * 2;
            const minScale = Math.min(this.scaleRange[0], this.scaleRange[1]);
            const maxScale = Math.max(this.scaleRange[0], this.scaleRange[1]);
            const scale = minScale + this.random() * (maxScale - minScale);
            const cos = Math.cos(yaw) * scale;
            const sin = Math.sin(yaw) * scale;
            instancePositions[modelIndex].push(worldX, y, worldZ);
            instanceYaws[modelIndex].push(yaw);
            instanceScales[modelIndex].push(scale);

            for (let v = 0; v < template.vertices.length; v += 3) {
                const lx = template.vertices[v];
                const ly = template.vertices[v + 1];
                const lz = template.vertices[v + 2];
                // Bake each instance transform into the merged vertex stream. The
                // renderer draws each batch with one identity model matrix.
                positions[modelIndex].push(
                    worldX + lx * cos + lz * sin,
                    y + ly * scale,
                    worldZ - lx * sin + lz * cos
                );
                const nx = template.normals?.[v] ?? 0;
                const ny = template.normals?.[v + 1] ?? 1;
                const nz = template.normals?.[v + 2] ?? 0;
                normals[modelIndex].push(nx * Math.cos(yaw) + nz * Math.sin(yaw), ny, -nx * Math.sin(yaw) + nz * Math.cos(yaw));
                uvs[modelIndex].push(template.uvs?.[(v / 3) * 2] ?? 0, template.uvs?.[(v / 3) * 2 + 1] ?? 0);
            }
        }

        for (let i = 0; i < this.files.length; i++) {
            if (!positions[i].length) continue;
            const mesh = new Mesh(this.gl, new Float32Array(positions[i]), new Float32Array(uvs[i]), new Float32Array(normals[i]));
            const obj = new GameObject(this.renderer, this.material, mesh, `Grass Batch: ${this.files[i]}`);
            obj.isGrassBatch = true;
            obj.instancePositions = instancePositions[i];
            obj.instanceYaws = instanceYaws[i];
            obj.instanceScales = instanceScales[i];
            obj.windInstances = true;
            this.scene.push(obj);
            this.objects.push(obj);
        }
        this.lastSpawnStats.batches = this.objects.length;
        console.info('[GrassBatchSpawner] Built static grass batches:', this.lastSpawnStats);
        return this.objects;
    }

    clear() {
        for (const object of this.objects) {
            const index = this.scene.indexOf(object);
            if (index !== -1) this.scene.splice(index, 1);
        }
        this.objects.length = 0;
    }
}
