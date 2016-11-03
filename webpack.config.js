const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

// env
const buildDirectory = './dist/';

module.exports = {
  entry: './src/main.js',
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:8080/dist',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new WebpackNotifierPlugin()
  ]
};
