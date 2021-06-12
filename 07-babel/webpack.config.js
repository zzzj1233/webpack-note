const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dist.js"
    },
    module: {
        rules: [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "babel-loader"
            },
            {
                "test": /\.(ts)$/,
                "exclude": /node_modules/,
                "use": ["babel-loader", "ts-loader"]
            },
            {
                "test": /\.(vue)$/,
                "exclude": /node_modules/,
                "use": ["vue-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
