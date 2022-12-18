/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'linkedin': '#0a66c2'
      }
    },
  },
  plugins: [require("daisyui")],
}
