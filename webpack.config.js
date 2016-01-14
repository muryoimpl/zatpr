var path    = require('path');
var webpack = require('webpack');
var merge   = require('webpack-merge');

var ROOT_PATH = path.resolve(__dirname);
var TARGET    = process.env.npm_lifecycle_event;

var common = {
  target: 'atom',

  entry: path.resolve(ROOT_PATH, 'app', 'main.jsx'),

  output: {
    path: path.resolve(ROOT_PATH, './'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: [
    'FileUtils'
  ]
};

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',

    module: {
      loaders: [
        {test: /\.jsx?$/, loader: 'babel-loader',  exclude: /node_modules/},
        {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/}
      ]
    }
  });
}
