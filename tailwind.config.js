/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      extend: {
         colors: {
            teal: "#2b6777",
            gray: "#c8d8e4",
            brown: "#D7C0AE",
            green: "#52ab98",
            white: "#E8F9FD",
         },
      },
   },
   plugins: [],
}
