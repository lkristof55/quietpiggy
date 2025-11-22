/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        presidential: '#5D8AA8',
        'presidential-dark': '#4a6e86',
        piggy: '#FFB6C1',
        'piggy-dark': '#ff9eb0',
        censored: '#FF0000',
        paper: '#f4f4f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

