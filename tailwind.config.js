module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Roboto', 'serif'],
      'sans-serif': [ 'Georgia', 'Times New Roman', 'sans-serif'],
      'logo': ["Monoton", 'cursive'],
      'header': ['Major Mono Display', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
