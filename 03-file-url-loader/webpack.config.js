const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "dist.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            // {
            //     test: /\.(jpg|jpeg|png|gif)$/,
            //     use: [
            //         {
            //             'loader': "file-loader",
            //             options: {
            //                 name: '[name].[hash:6].[ext]',
            //                 outputPath: "imgs"
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        'loader': "url-loader",
                        options: {
                            name: '[name].[hash:6].[ext]',
                            outputPath: "imgs",
                            // 超过80KB使用fileLoader,上面两个options也会传递给fileLoader
                            limit: 81920
                        }
                    }
                ]
            }
        ]
    }
}
