module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 10px rgba(0, 0, 0, 0.1);',
        'custom2': '0 0 20px rgba(255, 255, 255, 0.25);'
      },
      backgroundSize: {
        '110': '110%',
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1250px',
        },
      },
    },
  },
  plugins: [],
}