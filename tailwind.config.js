module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE61B',
        secondary: '#F7F7F7',
        textPrimary: '#111315',
        textSecondary: '#4E9F3D',
        borderSecondary: '#C7C7C7',
        searchBg: '#E5E5E5',
        orange: '#FFB72B',
        darkOrange: '#ED8C1D',
      },

      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },

      backgroundImage: {
        corak: "url('/src/asset/bg-corak.png')",
      },

      borderWidth: {
        0.5: '0.5px',
      },

      borderRadius: {
        '10px': '10px',
      },

      spacing: {
        'fit-important': 'fit-content!important',
      },
    },
  },
  plugins: [],
};
