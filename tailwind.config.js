const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      {
        mytheme: {
          primary: "#8200ff",
          secondary: "#00c6ff",
          accent: "#00ec00",
          neutral: "#090909",
          "base-100": "#efffff",
          info: "#00feff",
          success: "#6ab800",
          warning: "#bf5500",
          error: "#ff3e70",
        },
      },
    ],
  },
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
