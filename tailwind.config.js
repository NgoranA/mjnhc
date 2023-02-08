/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blackish: "#0A0202",
      greyish: "#333333",
      greylight: "#D8D8D8",
      redish: "#BE1614",
      pinkish: "#F8BCBB",
      lightish: "#FBDDDD",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
