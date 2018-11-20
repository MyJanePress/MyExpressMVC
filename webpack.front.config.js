const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
          },
            'css-loader',
          ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
        filename: 'Navigation.css',
        chunkFilename: 'Navigation.css',
    }),
  ],
  resolve:{
    extensions: ['.js','.jsx','.css', 'scss']
  },
};