var __webpack_modules__ = ({
    "./src/esmodule/index.js":
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            // 1. 给__webpack_exports__(exports)绑定{__esModule: true}属性
            __webpack_require__.r(__webpack_exports__);

            // 2. 为__webpack_exports__(exports)绑定函数
            __webpack_require__.d(__webpack_exports__, {
                "add": () => (add),
                "sub": () => (sub)
            });

            function add(num1, num2) {
                return num1 + num2
            }

            function sub(num1, num2) {
                return num1 - num2
            }

        })
});

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {

    var cachedModule = __webpack_module_cache__[moduleId];

    // 1. 尝试从缓存获取
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }

    // 2. 连续赋值 module = __webpack_module_cache__[moduleId] = { exports: {} }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };

    // 3. 根据传入的moduleId调用__webpack_modules__函数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
}

__webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
        // definition有这个属性,但是exports没有这个属性
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
        }
    }
};

__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))

__webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
    }
    Object.defineProperty(exports, '__esModule', {value: true});
};

var __webpack_exports__ = {};

// 1. 为__webpack_exports__对象绑定了__esModule = true这个属性
__webpack_require__.r(__webpack_exports__);

// 2. 调用__webpack_require__函数
var _esmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/esmodule/index.js");

console.log((0, _esmodule__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2));
console.log((0, _esmodule__WEBPACK_IMPORTED_MODULE_0__.sub)(2, 1));