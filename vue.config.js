const path = require('path');

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
        vue$: 'vue/dist/vue.common',
      },
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
  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      const fromPackages = path.resolve('packages');
      const fromDocs = path.resolve('docs');
      const toPackages = `${pathConfigs[0].to}/packages`;
      const toDocs = `${pathConfigs[0].to}/docs`;

      const configPackages = {
        from: fromPackages,
        to: toPackages,
        toType: 'dir',
      };
      const configDocs = {
        from: fromDocs,
        to: toDocs,
        toType: 'dir',
      };

      pathConfigs.push(configPackages);
      pathConfigs.push(configDocs);

      return [pathConfigs];
    });
  },
};
