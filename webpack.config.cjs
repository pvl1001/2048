const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDev = process.env.WEBPACK_SERVE
const envPath = isDev ? './.env.development' : './.env.production'
const mode = isDev ? 'development' : 'production'

require('dotenv').config({path: envPath})

module.exports = {
    mode,
    devtool: "inline-source-map",
    entry: "/index.tsx",
    output: {
        publicPath: process.env.BASEPATH,
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].bundle.js',
        clean: true
    },
    devServer: {
        hot: true,
        port: 4200,
        historyApiFallback: true,
    },
    plugins: [
        new Dotenv({
            path: envPath
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./public", to: "./", globOptions: {ignore: ['**/index.html']}}
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(webp|png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[name][ext]',
                },
            },
            {
                test: /\.(webm)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/video/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                oneOf: [
                    {
                        include: /node_modules|styles/,
                        use: ["style-loader", "css-loader", "sass-loader"],
                    },
                    {
                        use: [
                            "style-loader",
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[name]__[local]__[hash:base64:5]'
                                    },
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    additionalData: '@import "app/styles/mixins.scss";'
                                },
                            }
                        ],
                    },

                ],
            },
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "tsconfig.json"
            })
        ],
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve(__dirname, "node_modules")]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};