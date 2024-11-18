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
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        appear: {
          "0%": { opacity: "0", scale: 0.5 },
          "100%": { opacity: "1", scale: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        slideLeft: "slideLeft 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        fadeIn: "fadeIn 1s ease-in-out",
        scrollAppear: "appear 5s linear",
      },
      colors: {
        dark: "#000",
        textRed: "#FF4A4A",
        textYellow: "#FCF596",
        textYellowAlpha: "#fcf59673",
        text: "#fff",
        bgBlur: "#af807966",
      },
      cursor: {
        cursor1: "url('/cursor.svg') 12 12,auto",
        cursorHover: "url('/cursorHover.svg') 15 15,auto",
      },
    },
  },
  plugins: [],
};
