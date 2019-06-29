const Stack2 = require('./Stack2')
const stack = new Stack2()
stack.push(5)
stack.push(8)

console.log(stack)
console.log(stack.pop())
console.log(stack)
stack.push(5)
stack.push(8)

console.log( stack.toString() )
// console.log(Object.getPrototypeOf(stack) === Stack2.prototype)
