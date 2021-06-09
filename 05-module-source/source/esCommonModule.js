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
        }),
    "./src/esmodule/index.js":
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);

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

    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}

__webpack_require__.n = (module) => {
    var getter = module && module.__esModule ?
        () => (module['default']) :
        () => (module);
    __webpack_require__.d(getter, {a: getter});
    return getter;
};

__webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
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
__webpack_require__.r(__webpack_exports__);
var _common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-module */ "./src/common-module/index.js");
var _common_module__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_common_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 使用es6的导入方式导入commonModule
 * 使用commonjs的导入方式导入esModule
 */
const {add, sub} = __webpack_require__("./src/esmodule/index.js")

console.log(add(1, 2));
console.log(sub(2, 1));
console.log((0, _common_module__WEBPACK_IMPORTED_MODULE_0__.mul)(3, 5));
console.log((0, _common_module__WEBPACK_IMPORTED_MODULE_0__.div)(15, 3));