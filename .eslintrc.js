module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-parens': ['error', 'always'],
    'no-console': 'off',
  },
};
