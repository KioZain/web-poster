const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      __BASE_PATH__: JSON.stringify('/web-poster/')
    })
  ]
})