/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include your source files
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#124996", // your custom color
      },
    },
  },
  plugins: [],
};
