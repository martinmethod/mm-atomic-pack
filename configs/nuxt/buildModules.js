export default () => [
  // Doc: https://github.com/nuxt-community/eslint-module
  '@nuxtjs/eslint-module',
  '@nuxtjs/style-resources',
  [
    '@nuxtjs/stylelint-module',
    {
      files: ['./**/*.scss'],
      syntax: 'scss',
      configFile: '.stylelintrc'
    }
  ]
];
