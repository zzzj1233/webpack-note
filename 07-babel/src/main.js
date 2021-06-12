import './index.jsx'
import rendBooks from "./ts/index.ts"
import App from './vue/index.vue'
import Vue from 'vue'

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.hobby = {
            game: "none"
        }
    }
}

const name = "zzzj"
const age = 23

const zzzj = new Person(name, age)

zzzj.getInfo = () => {
    return `name = ${zzzj.name} , age = ${zzzj.age}`
}

console.log(zzzj.getInfo())

console.log(zzzj?.hobby?.study?.book)

rendBooks([
    {name: "傲慢与偏见", isin: "1233", number: 1},
    {name: "Nodejs in action", isin: "456"}
], document.getElementById('books'))

new Vue({
    render: h => h(App)
}).$mount("#root")
