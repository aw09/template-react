module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "11/12": "92%",
        "1/12": "8%",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
