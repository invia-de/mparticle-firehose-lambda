const slsw = require('serverless-webpack')
const path = require('path')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'development',
  externals: [{ 'aws-sdk': true }],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'hiredis': path.join(__dirname, 'aliases/hiredis.js'),
      'bignumber.js$': 'bignumber.js/bignumber.js'
    }
  }
}
