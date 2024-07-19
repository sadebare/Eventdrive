/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: ["bumblebee", "business"],
  },
};
