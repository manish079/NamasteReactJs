/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        headerBg: {
          400: "#209687",
          "custom-gray": "#FFFFFF",
        },
        bodyBg: {
          "custom-white": "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};
