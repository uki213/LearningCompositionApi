module.exports = {
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: true,
      files: 'src/**/*.{vue,scss}'
    }
  }
}
