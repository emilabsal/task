module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      xs: { max: '500px' },
    },
    container: {
      padding: '16px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      aqua: '#12b0c9',
    },
    fontFamily: {
      main: ['Fuzzy Bubbles', 'sans-serif'],
    },
    extend: {
      spacing: {
        main: '20px',
      },
    },
    boxShadow: {
      block: '3px 3px 0px 2px #000',
    },
  },
};
