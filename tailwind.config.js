module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
        mali: ["Mali", "cursive"],
      },
      colors: {
        themeBlue: "#35BBCA",
        themeNavy: "#0191B4",
        themeNavyDarker: "#005064",
        themeOrange: "#FE7A15",
        themeGreen: "#D3dd18",
        themeYellow: "#FFD667",
        themeCourseColor1: "#FFEC8D",
        themeCourseColor2: "#FFD88D",
        themeCourseColor3: "#FFC68D",
        themeCourseColor4: "#FFB48D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
