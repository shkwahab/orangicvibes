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
        },
       
      },
      animation:{
        "slideleft":"slideleft 1s  ease-in-out  ",
       
      },
      backgroundImage:{
        "food":"url('../public/orangicfood.jpg')",
        "banner1":"url('../public/banner1.jpg')",
        "banner2":"url('../public/banner2.jpg')",
        "banner3":"url('../public/banner3.jpg')",
        "jumbotron":"url('../public/jumbotron2.png')",
        "footer":"url('../public/footer-shape-1.svg')"
      }
    },
    fontFamily:{
      "QuickSand":'Quicksand',
      "Jost":'Jost',
      "Schoolbell":'Schoolbell',
    }
   
  },
  plugins: [],
}