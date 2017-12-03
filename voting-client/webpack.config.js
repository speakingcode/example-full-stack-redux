module.exports = {
  entry : [
    './src/index.js'
  ],
  module :
  output : {
    path       : __dirname + '/dist',
    publicPath : '/',
    filename   : 'bundle.js'
  },
  devServer : {
    contentBase : './dist'
  }
}
