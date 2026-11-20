import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { Material } from './Engine/Rendering/Material.js';
import { Texture } from './Engine/Rendering/Texture.js';

/** Loads and attaches the textured first-person hand to the camera. */
export class FirstPersonHand {
    constructor(gl, renderer, shader, camera, scene, options = {}) {
        const { controller = null, ...settings } = options;
        this.settings = {
            modelPath: './Assets/Characters/hand.obj',
            texturePath: './Assets/Characters/colormap.png',
            position: [0.32, -0.28, -0.55],
            rotation: [0, -Math.PI / 2, 0],
            scale: [0.015, 0.015, 0.015],
            bobAmount: 0.045,
            bobSideAmount: 0.02,
            bobSmoothing: 10,
            ...settings
        };
        this.camera = camera;
        this.scene = scene;
        this.controller = controller;
        this.bobBlend = 0;
        this.ready = this._load(gl, renderer, shader);
    }

    async _load(gl, renderer, shader) {
        try {
            const mesh = await ObjLoader.load(gl, this.settings.modelPath);
            this.texture = new Texture(gl, this.settings.texturePath);
            this.material = new Material(shader, 'First Person Hand');
            this.material.setUniforms({
                uColor: [1, 1, 1, 1],
                uHasTexture: 1,
                uMainTex: this.texture.texture,
                uRoughness: 1
            });

            const hand = new GameObject(renderer, this.material, mesh, 'First Person Right Hand');
            hand.transform.position.set(...this.settings.position);
            hand.transform.rotation.set(...this.settings.rotation);
            hand.transform.scale.set(...this.settings.scale);
            this.camera.transform.add(hand.transform);
            this.scene.push(hand);
            this.gameObject = hand;
            return hand;
        } catch (error) {
            console.error('Could not load first-person hand:', error);
            return null;
        }
    }

    update(dt) {
        const handTransform = this.gameObject?.transform;
        if (!handTransform || !this.controller) return;

        const blend = 1 - Math.exp(-this.settings.bobSmoothing * Math.min(dt, 0.05));
        const target = this.controller.isWalking ? 1 : 0;
        this.bobBlend += (target - this.bobBlend) * blend;
        const phase = this.controller.bobTime;
        handTransform.position.set(
            this.settings.position[0] + Math.cos(phase * 0.5) * this.settings.bobSideAmount * this.bobBlend,
            this.settings.position[1] + Math.abs(Math.sin(phase)) * this.settings.bobAmount * this.bobBlend,
            this.settings.position[2]
        );
    }
}
