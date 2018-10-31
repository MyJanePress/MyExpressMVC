
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    //   entry: "./src/index.js",
    //   output: {
    //     path: path.resolve('dist'),
    //     filename: 'bundled.js'
    //   },
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
          use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64]",
                    sourceMap: true,
                    minimize: true
                }
            }
        ]
      },
      {
          test: /\.jsx$/,
          use: {
              loader: "jsx-loader",
              options: {
                  modules: true,
              }
          }
      }
    ]
  },
  plugins: [htmlPlugin]
};