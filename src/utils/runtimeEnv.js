module.exports = {
  env: {
    S5_API_URL: String
  },

  logEnv(env, logger = console.log) {
    // Only log in the app in dev mode
    if (process.platform === 'browser' && process.env.NODE_ENV !== 'development') {
      return
    }

    let vars = ''

    Object.entries(env).forEach(([name, value]) => {
      let rep = value

      // If this is node, it's the build process. In that case all of the env vars are strings,
      // and we have to check the type in module.exports.env. At runtime we check value's type.
      let addQuotes

      if (process.platform === 'browser') {
        addQuotes = typeof value === 'string'
      } else {
        addQuotes = module.exports.env[name] === String && value.charAt(0) !== '"'
      }

      if (addQuotes) {
        rep = `"${value}"`
      }

      vars += `  ${name}: ${rep}\n`
    })

    logger('Runtime environment vars:\n' + vars)
  }
}
