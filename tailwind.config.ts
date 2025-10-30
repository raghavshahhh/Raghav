import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        background: {
          primary: '#0a0a0a',
          secondary: '#000000',
        },
        surface: {
          glass: 'rgba(39, 39, 42, 0.5)',
          hover: 'rgba(63, 63, 70, 1)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'card-title': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'card-subtitle': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': '6rem',
        'card-stack': '1rem',
        'gallery-gap': '1.5rem',
        'pill-gap': '0.75rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'glass': '0 0 30px rgba(255, 255, 255, 0.03)',
        'glass-hover': '0 0 40px rgba(255, 255, 255, 0.06)',
        'pill': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'pill-hover': '0 6px 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
