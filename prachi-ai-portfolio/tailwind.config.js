/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        cyber: {
          bg: '#050811',
          card: 'rgba(13, 20, 36, 0.7)',
          border: 'rgba(0, 240, 255, 0.15)',
          cyan: '#00f0ff',
          purple: '#9d4edd',
          pink: '#f72585',
          neon: '#39ff14',
          gold: '#ffb703',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.35)',
        'glow-purple': '0 0 25px rgba(157, 78, 221, 0.35)',
        'glow-pink': '0 0 25px rgba(247, 37, 133, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-flicker': 'glowFlicker 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowFlicker: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(157, 78, 221, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}

