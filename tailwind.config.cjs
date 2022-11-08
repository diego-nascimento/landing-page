/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      maxWidth: {
        'not-full': '1280px'
      },
      padding: {
        'container-padding': 'padding: 1.25rem'
      },
      gridTemplateColumns: {
        'right-bigger': '1fr, 2fr',
        'left-bigger': '2fr, 1fr'
      }
    },
  },
  plugins: [],
}
