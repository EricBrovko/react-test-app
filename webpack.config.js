const path = require('path');


console.log(path.join(__dirname, 'src', 'index.js'));
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot-loader", "babel-loader"]
    }]
  }
}
