const path = require('path')

module.exports = {
    entry: "./src/main_es_module.js",
    output: {
        filename: "dist.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader', {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    }
}