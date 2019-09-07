module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-element-newline': ['error', 'consistent'],
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'max-len': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
