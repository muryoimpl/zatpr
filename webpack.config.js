var path    = require('path');
var webpack = require('webpack');
var merge   = require('webpack-merge');

var ROOT_PATH = path.resolve(__dirname);
var TARGET = process.env.npm_lifecycle_event;

var common = {
  entry: path.resolve(ROOT_PATH, 'main.jsx'),

  output: {
    path: path.resolve(ROOT_PATH, './'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  });
}
