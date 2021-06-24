const module1 = require('./js/module1')
const module2 = require('./js/module2')

import './css/index.css'
import './less/index.less'

console.log('hello webpack1')
console.log(module1() + ' ~ ' + module2());