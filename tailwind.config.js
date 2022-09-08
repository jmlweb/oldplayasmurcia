/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      alternate: ['Bebas Neue', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        beaches: 'repeat( auto-fit, minmax(20rem, 1fr) )',
        features: 'repeat( auto-fit, minmax(10rem, 1fr) )',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
