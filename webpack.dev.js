const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  output: {
    path: path.resolve(__dirname, 'dev_build')
  },
  plugins: [
    new webpack.DefinePlugin({
      __BASE_PATH__: JSON.stringify('/')
    })
  ]
})