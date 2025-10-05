/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include your source files
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#124996",
        primary: "#124996",
        secondary: "#9333EA",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [],
};
