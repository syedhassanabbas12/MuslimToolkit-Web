const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#242424",
        tertiary: "#B9C4FF",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins var", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
