module.exports = {
  // mode:"jit",
  purge: ['./pages/index.js', "./components/*.js"], //'./pages/index.js', "./components/*.js"
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        "sidebar":"16.666667%"
      },
      colors: {
        hero: {
          // theme('colors.indigo.light')
          alt: '#e400f8',
  
          // theme('colors.indigo.DEFAULT')
          DEFAULT: '#02c6f0',
        },
      },
      fontFamily: {
        'varela': ['"Varela Round"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif']
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/2.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
