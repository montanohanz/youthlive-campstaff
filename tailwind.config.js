/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      '2023-moonstone':'#35BBCA',
      '2023-bondiblue': '#0991B4',
      '2023-ivory': '#FFFCEB',
      '2023-sbyellow': '#F8D90F',
      '2023-pear': '#C0CB00',
      '2023-safetyorange': '#FE7A15',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
