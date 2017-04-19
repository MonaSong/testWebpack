let webpack = require('webpack')
var path = require('path')
var htmlwebpackplugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  entry: {app: './src/main.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[hash].js'
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
        NODE_ENV: '"development"' // production
      }
    }),
    new htmlwebpackplugin({
      // filename: '[name]-[hash].html',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换，也就是更新的地方会被替换，没有更新的地方不会替换
    new FriendlyErrorsPlugin() // 控制台热替换
  ]
}