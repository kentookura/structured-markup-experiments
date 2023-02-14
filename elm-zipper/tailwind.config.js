/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/main.js", "./src/**/*.elm"],
  theme: {
    extend: {
      fontFamily: { garamond: ["Garamond"] },
    },
  },
  plugins: [],
};
