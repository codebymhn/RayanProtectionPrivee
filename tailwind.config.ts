/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEEF",
        dark: "#0B1020",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
