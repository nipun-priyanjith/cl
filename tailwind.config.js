/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        darkGray: '#1E1F21',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
}