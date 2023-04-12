const path = require('path')

module.exports = {
  reactStrictMode: true,
  compress: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}