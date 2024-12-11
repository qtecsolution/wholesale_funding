/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        primary: 'hsl(354, 73%, 43%)', 
        secondary:'hsl(192, 84%, 55%)'
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}

