const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: './views/index.js',
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
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./views/index.html" })
  ],
  resolve:{
    mainFiles:['index'],
    extensions: ['.js','.jsx','.css']
  },
  watch: true,
  devServer: {
    historyApiFallback: true
  }
};