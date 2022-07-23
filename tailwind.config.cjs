module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0D1A2D',
          main: '#15273F',
        },
        text: {
          light: '#15D0D0',
          white: '#87A7D3',
        }
      },
    },
  },
  plugins: [],
};
