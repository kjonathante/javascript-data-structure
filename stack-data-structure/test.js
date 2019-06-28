const Stack = require('./Stack')
const stack = new Stack()

console.log(stack)

console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)

console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size())