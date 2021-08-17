module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node-modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node-modules/ }
    ]
  }
}