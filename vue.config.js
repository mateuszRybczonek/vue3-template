const webpack = require('webpack')
const { resolve } = require('./src/aliases')

module.exports = {
  devServer: {
    port: 8800,
    progress: false
  },

  configureWebpack: {
    resolve: {
      alias: resolve.alias
    },

    plugins: [
      // Define Bundler Build Feature Flags
      new webpack.DefinePlugin({
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: false,

        // I18n Feature Flags
        __VUE_I18N_FULL_INSTALL__: false,
        __VUE_I18N_LEGACY_API__: true,
        __INTLIFY_PROD_DEVTOOLS__: false
      })
    ]
  },

  chainWebpack: (config) => {
    const rule = config.module.rule('svg')

    // Clear all existing loaders
    rule.uses.clear()

    // Add replacement loader(s)
    rule
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
