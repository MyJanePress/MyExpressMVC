const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
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
            'style-loader',
            'css-loader',
            'sass-loader',
            // 'postcss-loader'
          ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  // resolve:{
  //   mainFiles:['index'],
  //   extensions: ['.js','.jsx','.css', 'scss']
  // },
};