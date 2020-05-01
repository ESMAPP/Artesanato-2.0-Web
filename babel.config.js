module.exports = {
  plugins: [
    'lodash',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ],
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ]
  ]
}
