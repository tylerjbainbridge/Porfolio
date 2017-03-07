const { resolve } = require('path');
const webpack =require('webpack');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './index.js'
    ],

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    context: resolve(__dirname, 'src/js'),

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/dist/',
        // proxy: {
        //     "/": "http://localhost:4000"
        // },
        // historyApiFallback: true
    },

    module: {
        loaders: [
            { test: /\.js$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // activates HMR
        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ]

};