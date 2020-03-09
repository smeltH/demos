const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                ]
            },
            {
                test: /.(jpe?g|png|gif)$/i, // 图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, // 限制10kb，10kb以上就用base64编码
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].css'
        })
    ]
};
module.exports = config;
