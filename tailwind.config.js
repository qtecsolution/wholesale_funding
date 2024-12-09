/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        primary: 'hsl(354, 73%, 43%)', 
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}

