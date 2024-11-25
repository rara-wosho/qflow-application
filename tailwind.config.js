/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#f8f4ff",
        primary: "#a976e5",
        secondary: {
          DEFAULT: "#e6d0ff",
          50: "#f9f4ff",
          100: "#f3eaff",
          200: "#e6d0ff",
          300: "#d3aaff",
          400: "#b27bff",
          500: "#8c4eff",
          600: "#6c3dcc",
          700: "#523199",
          800: "#3b2373",
          900: "#27184d",
        },
        third: {
          DEFAULT: "#f5ab16",
          1: "",
        },
        primaryBlack: "rgb(40,40,40)",
        secondaryBlack: "rgb(70,70,70)",
        primaryText: "#4c2876",
      },
      fontFamily: {
        pregular: ["Poppins-Regular", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
