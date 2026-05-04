import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0f172a',
        panel: '#111827',
        accent: '#38bdf8',
      },
      backgroundImage: {
        'soft-gradient':
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.25), rgba(17, 24, 39, 0.95) 45%)',
      },
      boxShadow: {
        card: '0 12px 30px -14px rgba(15, 23, 42, 0.75)',
      },
    },
  },
  plugins: [],
} satisfies Config
