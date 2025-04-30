import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BRISHOP custom color palette
        brishop: {
          50: '#f9f5fd',
          100: '#f3ebfb',
          200: '#e8d7f7',
          300: '#d9b8f0',
          400: '#c58fe6',
          500: '#af66da',
          600: '#9a4bc9',
          700: '#853bb0',
          800: '#6f3490',
          900: '#5c2e76',
          950: '#3d1a52',
        },
        lilac: {
          50: '#fcf8ff',
          100: '#f6eeff',
          200: '#eddefe',
          300: '#e0c2fd',
          400: '#d19dfb',
          500: '#bd70f7',
          600: '#aa50ed',
          700: '#923ad1',
          800: '#7a32ab',
          900: '#662d8b',
          950: '#451a63',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;