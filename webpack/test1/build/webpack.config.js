const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', // 开发模式
    // entry: path.resolve(__dirname, '../src/main.js'), // 入口文件
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        header: path.resolve(__dirname, '../src/header.js')
    },
    output: {
        filename: '[name].[hash:8].js', // 文件名name是入口文件的文件名 hash是一个随机值
        path: path.resolve(__dirname, '../dist') // 文件路径
    }, // 出口文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                ] // 从后往前进行解析
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            chunk: 'mains'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/header.html'),
            filename: 'header.html',
            chunk: 'headers'
        }),
        new CleanWebpackPlugin()
    ]
};
