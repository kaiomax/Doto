const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

// env
const buildDirectory = './dist/';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/main.js'
  ],
  devServer: {
    hot: true,
    contentBase: './'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: '/static/',
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
      },
      {
        test: /\.(mp3|wav)$/,
        loader: 'file-loader?name=sounds/sound-[hash:6].[ext]'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ]
};
