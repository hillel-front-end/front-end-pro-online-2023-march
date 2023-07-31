const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'SPA',
            template: './public/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            postcssOptions: { // post css plugins, can be exported to postcss.config.js
                                    plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { version: "2023-05" }],
                        ]
                    }
                }
            }
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        compress: true,
        hot: true,
        port: 9000,
        open: true,
        historyApiFallback: true
    },


    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    devtool: "source-map"
}