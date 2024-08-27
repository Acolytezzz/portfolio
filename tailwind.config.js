/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cantora: ["Cantora One"],
        Poppins: ["Poppins"],
        Anta: ["Anta"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        tab: "870px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
