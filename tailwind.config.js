/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      alternate: ['Bebas Neue', 'sans-serif'],
    },
    gridTemplateColumns: {
      beaches: 'repeat( auto-fit, minmax(20rem, 1fr) )',
    },
    extend: {},
  },
  plugins: [],
};
