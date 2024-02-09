/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        color1: "#F0F0F6",
        color2: "#FFB400",
        color3: "#F0F0F6",
      },

      textColor: {
        color1: "#FFB400",
        color2: "#767676",
        color3: "#F0F0F6",
      },
      borderColor: {
        color2: "#FFB400",
      },
    },
  },
  plugins: [],
};
