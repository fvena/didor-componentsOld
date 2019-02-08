// Docs-specific config

// Using CommonJS instead of ES2015+ export, because we also need to
// provide this object to Webpack in vue.config.js.
module.exports = {
  title: 'Didor Docs',
  description: 'Opinionated boilerplate project for an enterprise Vue frontend',
  docsPath: './docs',
  packagePath: './packages',
  loadNavbar: './docs/_navbar.md',
  prefix: 'Az',
  languages: false,
  gitRepoLink: 'https://github.com/fvena/didor-components',
};
