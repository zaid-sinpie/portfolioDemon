/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
      colors: {
        dark: "#000",
        textRed: "#FF4A4A",
        textYellow: "#FCF596",
        textYellowAlpha: "#fcf59673",
        text: "#fff",
        bgBlur: "#af807966",
      },
    },
  },
  plugins: [],
};
