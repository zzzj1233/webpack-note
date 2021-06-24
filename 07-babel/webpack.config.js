const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dist.js'
    },
    resolve: {
        // 引用别名
        alias: {
            '@': path.join(__dirname, 'src')
        },
        // 默认的extensions: ['.js', '.json', '.wasm']
        // extensions: ['.js', '.json', '.wasm', '.vue', '.jsx', 'ts']
        // 同上
        extensions: ['.vue', '.jsx', '.ts', '...'],
    },
    module: {
        rules: [
            {
                'test': /\.(js|jsx)$/,
                'exclude': /node_modules/,
                'use': 'babel-loader'
            },
            {
                'test': /\.(ts)$/,
                'exclude': /node_modules/,
                'use': ['babel-loader', 'ts-loader']
            },
            {
                'test': /\.(vue)$/,
                'exclude': /node_modules/,
                'use': ['vue-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
