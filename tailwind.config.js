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
        },
      },
    },
  },
  plugins: [],
};
