/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //for left and right side margin
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        headerBg: {
          400: "#209687",
          "custom-gray": "#FFFFFF",
        },
        bodyBg: {
          "custom-white": "#F0F0F0",
        },
        button: {
          "search-btn": "#DC2626",
        },
      },
    },
  },
  plugins: [],
};
