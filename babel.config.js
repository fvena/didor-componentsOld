module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup', 'scss', 'json', 'pug', 'bash', 'markdown'],
        plugins: ['line-numbers', 'line-highlight', 'toolbar'],
        css: true,
      },
    ],
  ],
};
