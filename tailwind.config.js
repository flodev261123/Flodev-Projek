/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#422006",
        semi: "#fff7ed",
        cv: "#172554",
        c2: "#0f766e",
        button1: "#713f12",
        text: "#64748b",
        card: "#020617",
        cost: "#1e40af",
      },
    },
  },
  plugins: [],
};
