/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf8f0',
          100: '#f5f0dc',
          200: '#ead9a8',
          300: '#dfc275',
          400: '#c9a84c',
          500: '#b8892a',
          600: '#966e1f',
          700: '#745519',
          800: '#523c12',
          900: '#30230b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
};
