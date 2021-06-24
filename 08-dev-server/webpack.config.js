const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.join(__dirname),
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // 默认8080
        port: '8080',
        // 默认是127.0.0.1,如果有局域网访问的需求,则0.0.0.0
        // host: '0.0.0.0',
        open: true,
        // 为静态文件开启gzip压缩传输
        compress: true,
        // 解决使用react-router或vue-router时,使用historyRouter刷新浏览器出现404的情况,webpack一旦遇到404,就返回根路径[/]的资源
        historyApiFallback: true,
        // 默认情况dev-server以http提供服务
        // https: false,
        // 默认情况下webpack会监视文件变化重新编译,如果lazy=true,则只在刷新浏览器时编译
        // lazy: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    // 相当于访问 /api/test
                    // 转换为 http://localhost:3000/test
                    // ^/api(正则)
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}
