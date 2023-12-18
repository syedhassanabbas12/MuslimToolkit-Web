const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FFFAEC",
          secondary: "#E3EADE",
          accent: "#0A8270",
          // neutral: "#090909",
          // "base-100": "#efffff",
          // info: "#00feff",
          // success: "#6ab800",
          // warning: "#bf5500",
          // error: "#ff3e70",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#0A1614",
          accent: "",
          secondary: "",
          // : "#FFBC00"
        },
      },
      // "light",
      // "dark",
      // "cupcake",
      // "retro",
    ],
  },
  theme: {
    extend: {
      // colors: {
      //   secondary: "#26534C",
      //   accent: "#F2AC0D",
      //   white: "#FFFFFF",
      //   onNeutralBg: "var(--onNeutralBg)",
      //   neutralBg: "var(--neutralBg)",
      //   onPrimaryBg: "var(--onPrimaryBg)",
      //   primaryBg: "var(--primaryBg)",
      //   primary: "var(--primary)",
      // },
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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
