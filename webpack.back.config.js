const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'backend.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ]
    },
    target: 'node',
    // optimization: {
    //     minimizer: [new UglifyJsPlugin()]
    // },
    externals: [nodeExternals()],
};