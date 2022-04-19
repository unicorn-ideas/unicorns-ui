module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: {
          x: 'gold',
          y: 'black',
        },
        primary: {
          x: 'red',
          y: 'white',
        },
        button: {
          x: 'steelblue',
          y: 'white',
        },
        'button-hover': {
          x: 'rebeccapurple',
          y: 'white',
        },
      },
    },
  },
  plugins: [],
};
