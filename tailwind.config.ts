import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f8c536',
          black: '#0a0a0a'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
