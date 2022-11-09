/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const myClass = plugin(function ({addUtilities}){
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    '.preserve-3d': {
        transformStyle:  "preserve-3d"
    },
    ".perspective": {
      perspective: '1000px'
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    }
  })

})
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
  plugins: [myClass],
}
