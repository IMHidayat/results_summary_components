/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#cec0ff",
      },
      fontSize: {
        fontsize1: "1.3rem",
      },
    },
    screens: {
      xs: { max: "359px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
