module.exports = {
  purge: ['./pages/index.js', "./components/*.js"], //'./pages/index.js', "./components/*.js"
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        "sidebar":"16.666667%"
      },
      colors: {
        hero: {
          alt: '#e400f8',
  
      
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
