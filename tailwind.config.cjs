/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      card: "#ffffff",
      border: "#e6e6e6",
      dark: "#212121",
      white: "#fafafa",
      error: "#d86161",
      placeholder: "#7a7a7a",
      primary: "#1597e4",
    },
  },
  plugins: [],
};
