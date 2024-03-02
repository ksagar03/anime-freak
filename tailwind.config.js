/** @type {import('tailwindcss').Config} */
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
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },

  plugins: [],
};
