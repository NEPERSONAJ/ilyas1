/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
        },
        surface: {
          DEFAULT: '#111827',
          dark: '#030712',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-flow': 'borderFlow 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(251, 191, 36, 0.5)',
        'neon-strong': '0 0 30px rgba(251, 191, 36, 0.8)',
      }
    },
  },
  plugins: [],
};