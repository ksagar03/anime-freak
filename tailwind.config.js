/** @type {import('tailwindcss').Config} */

const { transform } = require("next/dist/build/swc");

// import home_bgg from "./public/images/home_background.jpg";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home_bg: 'url("/images/Home_background.jpg")',
        home_bg_zoro: 'url("/images/Home_background_zoro.png")',
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
    screens: {
      // it will add a media query of max width
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px)

      xl: { max: "1279px" },
      // => @media (max-width: 1279px)

      lg: { max: "1023px" },
      // => @media (max-width: 1023px)

      md: { max: "767px" },
      // => @media (max-width: 767px)

      sm: { max: "639px" },
      // => @media (max-width: 639px)

      xs: { max: "479px" },
      // => @media (max-width: 479px)
    },
  },

  plugins: [],
};
