const path = require('path')

const resolve = {
  alias: {
    '@': __dirname,
    '@components': path.join(__dirname, 'components')
  },
  extensions: ['.ts', '.vue']
}

module.exports = {
  resolve
}
