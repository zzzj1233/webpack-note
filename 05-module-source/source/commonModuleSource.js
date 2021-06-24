var __webpack_modules__ = ({
    "./src/common-module/index.js":
        ((module) => {
            module.exports = {
                mul(num1, num2) {
                    return num1 * num2
                },
                div(num1, num2) {
                    return num1 / num2
                }
            }
        })
});

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];

    // 1. 走缓存
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }

    // 2. 连续赋值
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };

    // 3. 执行__webpack_modules__对象的对应的函数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // 4. 返回exports对象
    return module.exports;
}

const {mul, div} = __webpack_require__("./src/common-module/index.js")

console.log(mul(1, 2))

console.log(div(15, 3))