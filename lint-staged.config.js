module.exports = {
  '*.js': ['vue-cli-service lint', 'git add'],
  '{!(package)*.json,*.code-snippets,.*rc}': ['yarn lint:prettier --parser json', 'git add'],
  'package.json': ['yarn lint:prettier', 'git add'],
  '*.vue': ['vue-cli-service lint', 'yarn lint:stylelint', 'git add'],
  '*.scss': ['yarn lint:stylelint', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
};
