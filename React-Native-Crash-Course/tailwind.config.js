/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaty: '#161622',
        secondary: {
          DEFAULT: "#FF9C01",
          100: "FF9001",
          200: "FF8E01",
        },
        black: {
          DEFAULT:"",

        },
      }
    },
  },
  plugins: [],
}

