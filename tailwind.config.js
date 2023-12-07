/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: 'rgb(203, 173, 141)',
        secondary:'rgb(164, 131, 116)',
        dark: 'rgb(58, 45, 40)',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

