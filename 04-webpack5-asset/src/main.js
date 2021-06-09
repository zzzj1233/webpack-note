const img1 = require('./../img/zznh.png')
const img2 = require('../img/nhlt.jpg')

const img = document.createElement('img')
img.src = img1.default ?? img1

const box = document.createElement('div')
box.style.backgroundImage = `url(${img2.default ?? img2})`
box.style.width = '500px'
box.style.height = '509px'

document.body.appendChild(img)
document.body.appendChild(box)

import('./font/iconfont.css')

const i = document.createElement('i')
i.className = 'iconfont icon-ashbin'
i.style.fontSize = '20px'
i.style.color = 'red'
box.appendChild(i)
