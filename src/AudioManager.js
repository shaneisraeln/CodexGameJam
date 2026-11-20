/**
 * AudioManager
 *
 * Owns all game audio.
 *
 * Death + ambient + background music → plain HTML Audio (no pitch needed,
 * simpler looping, untouched per the brief).
 *
 * Walk, sword, eat → Web Audio API so each play gets a randomised
 * playbackRate, preventing the repetition fatigue of a fixed pitch loop.
 *
 *   Pitch variation ranges (semitones):
 *     walk  → ±2  st  (subtle — a small stride-cadence shift each loop)
 *     sword → ±3  st  (each swing sounds slightly different)
 *     eat   → ±4  st  (crunchy variety between bites)
 *
 * Usage:
 *   const audio = new AudioManager();
 *   audio.update(isWalking);   // every frame
 *   audio.playSword();
 *   audio.playEat();
 *   audio.playDeath();
 */
export class AudioManager {
    constructor() {
        // ── Web Audio context (lazy — created on first interaction) ──────
        this._ctx = null;

        // ── Decoded buffers for pitched sounds (populated after first use) ─
        this._buffers = {
            walk: null,
            sword: null,
            eat: null
        };

        // Source paths
        this._paths = {
            walk: './Assets/Audio/Walking sound.mp3',
            sword: './Assets/Audio/Sword sound.mp3',
            eat: './Assets/Audio/Eating sound.mp3',
        };

        // Volumes for Web Audio sounds
        this._gains = {
            walk: 0.55,
            sword: 0.80,
            eat: 0.70
        };

        // Semitone variation per sound (±N semitones, random each play)
        this._pitchRange = {
            walk: 2,
            sword: 3,
            eat: 4
        };

        // Currently playing walk source node (so we can stop it cleanly)
        this._walkSource = null;
        this._walkGain = null;
        this._wasWalking = false;

        // ── Plain HTML Audio for ambient, music, death ───────────────────
        this._ambient = this._makeHtml('./Assets/Audio/Ocean Waves and Seagulls Sound.mp3', {
            loop: true,
            volume: 0.35
        });
        this._music = this._makeHtml('./Assets/Audio/Background music.mp3', {
            loop: true,
            volume: 0.28
        });
        this._death = this._makeHtml('./Assets/Audio/Death Sound.mp3', {
            loop: false,
            volume: 1.00
        });

        // Start ambient + music on first interaction
        this._startOnInteraction();
    }

    // ── Public API ────────────────────────────────────────────────────────

    /** Call every frame. Handles walk loop start/stop with pitch variation. */
    update(isWalking) {
        if (isWalking && !this._wasWalking) {
            this._playWalkLoop();
        } else if (!isWalking && this._wasWalking) {
            this._stopWalkLoop();
        }
        this._wasWalking = isWalking;
    }

    /** Play a sword swing at a randomly varied pitch. */
    playSword() {
        this._playPitched('sword');
    }

    /** Play the eating sound at a randomly varied pitch. */
    playEat() {
        this._playPitched('eat');
    }

    /** Play the death sting. Silences walk, ambient, and music while it plays. */
    playDeath() {
        this._stopWalkLoop();
        this._wasWalking = false;

        this._ambient.pause();
        this._music.pause();

        this._death.currentTime = 0;
        this._death.play().catch(() => {});

        // Fade ambient + music back in after ~3 s
        const self = this;
        setTimeout(function() {
            self._ambient.play().catch(() => {});
            self._music.play().catch(() => {});
        }, 3000);
    }

    // ── Web Audio internals ───────────────────────────────────────────────

    /** Ensure the AudioContext exists (must be after user gesture). */
    _getCtx() {
        if (!this._ctx) {
            this._ctx = new(window.AudioContext || window.webkitAudioContext)();
        }
        // Resume if suspended (browser policy)
        if (this._ctx.state === 'suspended') this._ctx.resume();
        return this._ctx;
    }

    /**
     * Load and decode an audio file, caching the result.
     * @param {'walk'|'sword'|'eat'} key
     * @returns {Promise<AudioBuffer>}
     */
    async _getBuffer(key) {
        if (this._buffers[key]) return this._buffers[key];
        const ctx = this._getCtx();
        const response = await fetch(this._paths[key]);
        const arrayBuffer = await response.arrayBuffer();
        const decoded = await ctx.decodeAudioData(arrayBuffer);
        this._buffers[key] = decoded;
        return decoded;
    }

    /**
     * Play a one-shot sound at a random pitch offset.
     * @param {'walk'|'sword'|'eat'} key
     */
    async _playPitched(key) {
        const ctx = this._getCtx();
        const buffer = await this._getBuffer(key);

        const source = ctx.createBufferSource();
        source.buffer = buffer;

        // Random pitch: ±pitchRange semitones → playbackRate = 2^(semitones/12)
        const range = this._pitchRange[key];
        const semitones = (Math.random() * 2 - 1) * range;
        source.playbackRate.value = Math.pow(2, semitones / 12);

        const gainNode = ctx.createGain();
        gainNode.gain.value = this._gains[key];

        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);
    }

    /** Start the walk loop with a random pitch offset. */
    async _playWalkLoop() {
        const ctx = this._getCtx();
        const buffer = await this._getBuffer('walk');

        // Stop any existing walk source first
        this._stopWalkLoop();

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const range = this._pitchRange.walk;
        const semitones = (Math.random() * 2 - 1) * range;
        source.playbackRate.value = Math.pow(2, semitones / 12);

        const gainNode = ctx.createGain();
        gainNode.gain.value = this._gains.walk;

        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);

        this._walkSource = source;
        this._walkGain = gainNode;
    }

    _stopWalkLoop() {
        if (this._walkSource) {
            try {
                this._walkSource.stop();
            } catch (_) {}
            this._walkSource.disconnect();
            this._walkSource = null;
        }
        if (this._walkGain) {
            this._walkGain.disconnect();
            this._walkGain = null;
        }
    }

    // ── HTML Audio helpers ────────────────────────────────────────────────

    _makeHtml(src, {
        loop = false,
        volume = 1
    } = {}) {
        const a = new Audio(src);
        a.loop = loop;
        a.volume = volume;
        return a;
    }

    _startOnInteraction() {
        const self = this;
        const handler = function() {
            // Resume Web Audio context in case it was auto-suspended
            if (self._ctx) self._ctx.resume();
            self._ambient.play().catch(() => {});
            self._music.play().catch(() => {});
            window.removeEventListener('click', handler);
            window.removeEventListener('keydown', handler);
        };
        window.addEventListener('click', handler, {
            once: true
        });
        window.addEventListener('keydown', handler, {
            once: true
        });
    }
}