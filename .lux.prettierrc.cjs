module.exports = {
  plugins: ['prettier-plugin-css-order'],
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        parser: 'css',
        tabWidth: 2,
        cssDeclarationSorterKeepOverrides: false,
      },
    },
  ],
};
