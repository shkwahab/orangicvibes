/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        slideleft:{
          "0%":{translate:"0px" },
          "50%":{translate:"30px" },
         "100%":{translate:"0px"}
        }
      },
      animation:{
        "slideleft":"slideleft 1s  ease-in-out  "
      },
      backgroundImage:{
        "food":"url('../public/orangicfood.jpg')"
      }

    },
   
  },
  plugins: [],
}