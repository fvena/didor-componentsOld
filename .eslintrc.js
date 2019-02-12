module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-element-newline': ['error', 'consistent'],
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'max-len': [
      'error',
      { code: 100, ignoreStrings: true, ignoreTrailingComments: true, ignoreComments: true },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
