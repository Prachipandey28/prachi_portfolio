// Futuristic Web Audio Synthesizer (Zero external dependencies)
// Creates rich, interactive sci-fi micro-sound effects using native browser AudioContext

let audioCtx = null;
let isMuted = typeof window !== 'undefined' ? localStorage.getItem('prachi_audio_enabled') === 'true' : false;
const listeners = new Set();

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const isSoundEnabled = () => isMuted;

export const toggleSound = () => {
  isMuted = !isMuted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('prachi_audio_enabled', isMuted ? 'true' : 'false');
  }
  listeners.forEach((fn) => fn(isMuted));
  if (isMuted) {
    playSound('activate');
  }
  return isMuted;
};

export const subscribeSound = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const playSound = (type = 'click') => {
  if (!isMuted) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.045);
        break;
      }

      case 'hover': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1100, now + 0.03);

        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
        break;
      }

      case 'modalOpen': {
        // High-tech sci-fi power-up chord
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq * 0.8, now + idx * 0.025);
          osc.frequency.exponentialRampToValueAtTime(freq, now + idx * 0.025 + 0.12);

          gain.gain.setValueAtTime(0.06, now + idx * 0.025);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.025 + 0.15);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.025);
          osc.stop(now + idx * 0.025 + 0.16);
        });
        break;
      }

      case 'modalClose': {
        // Soft descending power-down
        [880, 659.25, 440].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.03);
          osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + idx * 0.03 + 0.1);

          gain.gain.setValueAtTime(0.05, now + idx * 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.1);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.03);
          osc.stop(now + idx * 0.03 + 0.11);
        });
        break;
      }

      case 'activate': {
        // Audio Online chime
        [440, 554.37, 659.25, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          gain.gain.setValueAtTime(0.08, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.22);
        });
        break;
      }

      case 'success': {
        // Uplifting triad
        [587.33, 739.99, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);

          gain.gain.setValueAtTime(0.07, now + idx * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.18);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.04);
          osc.stop(now + idx * 0.04 + 0.2);
        });
        break;
      }

      case 'micOn': {
        // Voice recognition beep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.linearRampToValueAtTime(1050, now + 0.08);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.11);
        break;
      }

      case 'filter': {
        // Search & filter tab blip
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.055);
        break;
      }

      default:
        break;
    }
  } catch (err) {
    // Graceful fallback if Web Audio is restricted
    console.debug('Web Audio play suppressed:', err);
  }
};
