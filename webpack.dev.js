const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        loader: 'eslint-loader',
        options: {
          emitError: true
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader?sourceMap=true', 'postcss-loader']
      }
    ]
  }
});
