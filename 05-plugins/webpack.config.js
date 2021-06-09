const path = require('path')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dist.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 1. 如果不使用title,默认的title为Webpack App
            title: "zzzj webpack",
            // 2. 如果不使用filename,默认为index.html
            filename: "index.html",
            // 3. 如果不指定模板html,将使用默认的模板
            template: path.join(__dirname, "public", "index.html")
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "public"),
                    // 写或不写都一样,默认生成到output目录
                    // to: path.join(__dirname, "dist"),
                    globOptions: {
                        ignore: ["**/index.html", "**/abc.txt"]
                    }
                }
            ]
        })
    ]
}
