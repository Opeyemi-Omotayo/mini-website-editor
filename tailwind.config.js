/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors:{
        emerald150: "#E7F1E9",
        emerald250:"#CEE3D4",
        primary: "#0A7227",
        primary100: "#9DC7A9",
        primary500: "#23803D",
        primary600: "#3B8E52",
        primary700: "#6CAA7D",
        grey100: "#FAFAFA",
        red700:"#C32611"
      }
    },
  },
  plugins: [],
};
