const path = require('path')

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dist.js"
    },
    mode: "development",
    devtool: "source-map"
}