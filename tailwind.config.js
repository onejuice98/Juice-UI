/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#23036A",
          800: "#30009C",
          700: "#3700B3",
          600: "#5600E8",
          500: "#6200EE",
          400: "#7F39FB",
          300: "#985EFF",
          200: "#BB86FC",
          100: "#DBB2FF",
          050: "#F2E7FE",
        },
        secondary: {
          900: "#005457",
          800: "#017374",
          700: "#018786",
          600: "#019592",
          500: "#01A299",
          400: "#03DAC5",
          300: "#00C4B4",
          200: "#03DAC5",
          100: "#70EFDE",
          050: "#C8FFF4",
        },
        background: "#ffffff",
        error: "#B00020",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
