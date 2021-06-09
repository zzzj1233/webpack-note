const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "dist.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            // 1. asset/resource 将资源分割为单独的文件，并导出url，就是之前的 file-loader的功能
            // 2. asset/inline 将资源导出为dataURL（url(data:)）的形式，之前的 url-loader的功能
            // 3. asset/source 将资源导出为源码（source code）. 之前的 raw-loader 功能
            // 4. asset 自动选择导出为单独文件或者 dataURL形式（默认为8KB）. 之前有url-loader设置asset size limit 限制实现
            // {
            //     test: /\.(jpg|jpeg|png|gif)$/,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "imgs/[name].[hash:4][ext]"
            //     }
            // },
            // {
            //     test: /\.(jpg|jpeg|png|gif)$/,
            //     type: "asset/inline"
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "img/[name].[hash:6][ext]"
                },
                // 100kb以上使用asset/resource
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name].[hash:6][ext]"
                },
            }
        ]
    }
}
