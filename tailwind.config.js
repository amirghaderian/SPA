/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/home-hero.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      screens:{
        fsm:"318px",
        vvs:"400px",
        vsm:"530px"
      }
    },
  },
  plugins: [],
};
