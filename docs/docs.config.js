// Docs-specific config

// Using CommonJS instead of ES2015+ export, because we also need to
// provide this object to Webpack in vue.config.js.
module.exports = {
  title: 'Didor Docs',
  description: 'Opinionated boilerplate project for an enterprise Vue frontend',
  basePath: './docs',
  loadNavbar: './docs/_navbar.md',
  languages: false,
  gitRepoLink: 'https://github.com/fvena/didor-components',
};
