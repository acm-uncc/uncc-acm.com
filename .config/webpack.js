var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var DEV = (process.env.NODE_ENV == 'development');
var PROD = (process.env.NODE_ENV == 'production');

var templateEntries = require('./loader.js');
var templatePath = path.join(__dirname, '../client/partials/');

module.exports = {
  devtool: DEV ? '#inline-source-map' : false,
  debug: true,
  entry: templateEntries.join([
    path.join(__dirname, '../client/app/index.js'),
    path.join(__dirname, '../client/styles/index.scss')
  ]),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  devServer: {
    quiet: false,
    noInfo: DEV,
    stats: {
      colors: true
    }
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'ngtemplate?relativeTo=' + templatePath + '!html' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
