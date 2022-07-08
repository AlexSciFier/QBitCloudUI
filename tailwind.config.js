const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.cyan[500],
      primaryLight: colors.cyan[400],
      light: colors.gray[200],
      neutral: colors.gray[500],
      dark: colors.gray[900],
      white: colors.white,
      black: colors.black,
      danger: colors.red[500],
      warning: colors.amber[500],
    },
  },
  plugins: [],
};
