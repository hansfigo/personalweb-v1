/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    containerHero:{
      center: true,
    },
    container:{
      center: true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary :'#FF0066',
        grey :'#334155'
      }, 
      scale: {
        '200': '2',
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
