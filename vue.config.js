module.exports = {
  devServer: {
    port: 3001,
  },
  pages: {
    index: {
      entry: './src/main.js',
      template: './src/index.pug',
    },
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/design/index.scss";',
      },
    },
  },
};
