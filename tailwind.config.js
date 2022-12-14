/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        slideleft:{
          "0%":{left:"0px" },
          "100%":{left:"20px"}
        }
      },
      animation:{
        "slideleft":"slideleft 0.4s ease-in "
      }
    },
   
  },
  plugins: [],
}