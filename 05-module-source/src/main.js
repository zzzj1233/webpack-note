/**
 * 使用es6的导入方式导入commonModule
 * 使用commonjs的导入方式导入esModule
 */

import {mul, div} from './common-module'

const {add, sub} = require('./esmodule')


console.log(add(1, 2));
console.log(sub(2, 1));

// -------------------------------

console.log(mul(3, 5));
console.log(div(15, 3));