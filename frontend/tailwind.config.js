/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        textRed: "#FF4A4A",
        text: "#fff",
        bgBlur: "#af807966",
      },
    },
  },
  plugins: [],
};
