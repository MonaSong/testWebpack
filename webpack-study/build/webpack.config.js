let webpack = require('webpack')
var path = require('path')
var htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'src'),
      exclude: path.resolve(__dirname, 'node_modules'),
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      include: path.resolve(__dirname, 'src'),
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
    },
    {
      test: /\.less$/,
      include: '/src',
      loader: 'style!css!postcss!less'
    }]
  },
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new htmlwebpackplugin({
      // filename: '[name]-[hash].html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}