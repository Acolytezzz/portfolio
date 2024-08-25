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
    },
  },
  plugins: [],
  darkMode: "class",
};
