var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '../client/index.js'),
    path.join(__dirname, '../styles/index.scss')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
