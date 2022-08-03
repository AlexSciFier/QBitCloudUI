const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "var(--main-color)", //colors.cyan[500],
      primaryLight: "var(--secondary-color)", //colors.cyan[400],
      light: colors.gray[200],
      neutral: colors.gray[500],
      dark: colors.gray[900],
      white: colors.white,
      black: colors.black,
      red: colors.red[500],
      redLight: colors.red[400],
      amber: colors.amber[500],
      green: colors.green[500],
      blue: colors.blue[500],
      transparent: colors.transparent,
    },
  },
  plugins: [],
};
