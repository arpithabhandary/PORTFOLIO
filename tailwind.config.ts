import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: '#0A192F',
          deep: '#112240',
          light: '#64B5F6',
          accent: '#00D9FF',
          secondary: '#0F3460',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(100, 181, 246, 0.5), 0 0 10px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(100, 181, 246, 0.8), 0 0 30px rgba(0, 217, 255, 0.6)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 1)' },
        },
        wave: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(5deg) rotateY(5deg)' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
