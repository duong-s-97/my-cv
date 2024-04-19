/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#1b1a2ea9",
        },
        purple: {
          100: "#cd5ff8",
          200: "#77358875",
          300: "#6d20c5d7",
          400: "#623686",
        },
      },
    },
  },
  plugins: [],
};
