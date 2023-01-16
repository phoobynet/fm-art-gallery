/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    fontFamily: {
      heading: ['Big Shoulders Display', 'sans-serif'],
      body: ['Outfit', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      'dark-gray': '#444444',
      'almost-black': '#151515',
      'gold': '#D5966C',
    },
  },
  plugins: [],
}
