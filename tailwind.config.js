/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
  theme: {
    extend: {
      colors: {
        primary: "#6E00EE",
        secondary: "#03DAC5",
        background: "#ffffff",
        error: "#B00020",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
