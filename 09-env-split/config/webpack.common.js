const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.join(__dirname, '..'),
    entry: './src/main.js',
    output: {
        filename: 'dist.[hash:6].js',
        path: path.join(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebpackApp'
        })
    ]
}
