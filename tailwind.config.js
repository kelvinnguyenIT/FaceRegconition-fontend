module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo Tammudu 2', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}