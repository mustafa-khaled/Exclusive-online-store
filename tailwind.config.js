/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#0070d2",
        danger: "#e53d3d",
        white: "#fff",
        gray: "#ccc",
        lightGray: "#eee",
      },
    },
  },
  plugins: [],
};
