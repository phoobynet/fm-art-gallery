/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Big Shoulders', 'sans-serif'],
      body: ['Outfit', 'sans-serif'],
    },

    fontSize: {
      'heading-xl': ['96px', {
        'line-height': '88px',
        'font-weight': 'black',
      }],
      'heading-l': ['70px', {
        'line-height': '70px',
        'font-weight': 'black',
      }],
      'heading-m': ['60px', {
        'line-height': '50px',
        'font-weight': 'black',
      }],
      'heading-s': ['36px', {
        'line-height': '36px',
        'font-weight': 'black',
      }],
      'body-m': ['22px', {
        'line-height': '32px',
        'font-weight': 'light',
      }],
      'body-s': ['18px', {
        'line-height': '28px',
        'font-weight': 'light',
      }],
    },
  },
  plugins: [],
}
