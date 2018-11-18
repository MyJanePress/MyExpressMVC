const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss|css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ template: "./src/index.html" }),
  // ],
  resolve:{
    mainFiles:['index'],
    extensions: ['.js','.jsx','.css']
  },
  // plugins: [
  //   new ExtractTextPlugin('style.css'),
  // ]
  // devServer: {
  //   historyApiFallback: true
  // },
};