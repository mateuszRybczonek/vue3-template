const os = require('os')
const path = require('path')
const webpack = require('webpack')
const { info } = require('@vue/cli-shared-utils')
const runtimeEnv = require('./src/utils/runtimeEnv.js')
const { resolve } = require('./src/aliases')

const interfaces = os.networkInterfaces()
let ip

Object.keys(interfaces).find((ifname) => {
  return interfaces[ifname].some((iface) => {
    if (iface.family === 'IPv4' && !iface.internal) {
      ip = iface.address
      return true
    }

    return false
  })
})

function addEnvironmentVars(config, appName) {
  // Pass some process.env vars to Vue
  config.plugin('define').tap((args) => {
    const [defines] = args

    if (!defines['process.env']) {
      defines['process.env'] = {}
    }

    const env = defines['process.env']

    // The name we show in the about dialog
    env.WS_APP_NAME = `"${appName}"`

    // The IP address of the dev server
    env.WS_SERVER_IP_ADDRESS = `"${ip}"`

    Object.entries(runtimeEnv.env).forEach(([name, type]) => {
      const value = process.env[name]

      if (value !== undefined) {
        if (type === String) {
          env[name] = `"${value}"`
        } else {
          env[name] = value
        }
      }
    })

    runtimeEnv.logEnv(env, info)
    return args
  })
}

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

    // Use our html template
    config.plugin('html').tap((args) => {
      args[0].template = path.join(__dirname, '/public/index.html')
      return args
    })
  }
}
