module.exports = {
    entry: './views/index.jsx',
    output: {
        path:__dirname + '/public/javascripts',
        filename: 'bundle.js',
    },
    module: {
        // loaders: [
        //     {
        //         exclude: /(node_modules)/,
        //         loaders: babel,
        //         query: {
        //             presets: ['es2015', 'react']
        //         }
        //     }
        // ],
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    watch: true
};