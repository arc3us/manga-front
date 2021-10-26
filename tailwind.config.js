module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'dracula',
      'synthwave',

    ],
  },
}
