const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const publicDir = 'packages';

module.exports = {
  devServer: {
    port: 3001,
  },
  pages: {
    index: {
      entry: './src/docs/main.js',
      template: './src/docs/index.pug',
      filename: 'index.html',
    },
    demo: {
      entry: './src/demo/main.js',
      template: './src/demo/index.pug',
      filename: 'demo.html',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${__dirname}/src/docs`,
      },
    },
    plugins: [new CopyWebpackPlugin([{ from: 'packages/**/*.md', to: 'packages' }])],
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
  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      pathConfigs[0].from = path.resolve(publicDir);
      return [pathConfigs];
    });
  },
};
