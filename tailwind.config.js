/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#f6f6f6",
      gray: "#737373",
      red1: "#9c4747",
      red2: "#fff1f1",
      green1: "#5da039",
      green2: "#f8fff0",
      gray2: "#d8d8d8",
      blue: "#00095f",
      yellow: "#dfa00b",
      D: "#00095f",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
