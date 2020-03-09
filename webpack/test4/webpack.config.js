const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: 'development',
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist',
        progress: true
    },
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        filename: '[hash:8].js',
        path: path.resolve(__dirname, './dist') // 必须是一个绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertAt: top
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}
module.exports = config;