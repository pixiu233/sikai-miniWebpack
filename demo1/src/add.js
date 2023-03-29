const min = require('./min.js')
const add = (x, y) => {
    return x + y + min(x, y)
}
console.log('add')

module.exports = add