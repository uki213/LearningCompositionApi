const StylelintPlugin = require('stylelint-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

module.exports = {
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  }
}
