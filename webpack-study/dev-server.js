var express = require('express')
var app = express()
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var opn = require('opn')

Object.keys(webpackConfig.entry).forEach(function (name) {
  webpackConfig.entry[name] = ['./dev-client'].concat(webpackConfig.entry[name])
})

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
var staticPath = path.posix.join('/', 'src')
app.use(staticPath, express.static('./src'))

app.use(express.static('dist'))
// app.get('/', function (req, res) {
//   // res.sendFile(__dirname+'/index.html');
// })
app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

app.listen(3033, () => {
  console.log(`listen at http://localhost:3033`)
  opn('http://localhost:3033')
  _resolve()
})

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at 3033\n')
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}







