// const min = require('./min.js')
import {min} from './min.js'
export const add = (x, y) => {
    return x + y + min(x, y)
}
console.log('add')
