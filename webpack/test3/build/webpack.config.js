const path = require('path');
const config = {
    mode: 'development',
    entry: [path.resolve(__dirname, '../src/main.js')],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
module.exports = config;
