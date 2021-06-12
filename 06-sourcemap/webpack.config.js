const path = require('path')


module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dist.js"
    },
    // 1. none : 不会生成source-map

    // 2. eval : 不会生成source-map,但是会在eval函数的最后生成sourceUrl,告诉浏览器源代码的路径

    // 3. source-map : 生成最完整的sourceMap,并且在生成的js最后一行加上魔法注释 //# sourceMappingURL=dist.js.map,浏览器可以根据sourceMap完全还原源代码

    // 4. cheap-source-map : 生成sourceMap,但是不生成sourceMap的列信息,也可以还原源代码,报错是可以定位到指定行,但是无法定位到指定列

    // 5. eval-source-map : 生成sourceMap,但是不生成对应的.js.map文件,而是把sourceMap以base64编码后,放入eval函数的最后

    // 6. inline-source-map : 生成sourceMap,但是不生成对应的.js.map文件,而是把sourceMap以base64编码后,放入dist.js文件最后

    // 7. cheap-module-source-map : 生成sourceMap,并且还原module的源代码,适合导入各种模块时的代码还原,体积比cheap-source-map略大一点

    // 8. nosources-source-map : 生成sourceMap,但是sourceMap的信息只能够帮我们定位错误,无法生成源代码文件
    devtool: 'nosources-source-map'
}
