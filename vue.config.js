const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      })
    ]
  }
}
