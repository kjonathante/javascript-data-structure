const Stack = require('./Stack2')

function decimalToBinary(decNumber = 0) {
  const remainderStack = new Stack()
  let number = decNumber

  if (number === 0) {
    remainderStack.push(0)
  } else {
    while (number > 0) {
      remainderStack.push(number % 2)
      number = Math.floor(number / 2)
    }
  }

  let binaryStr = ''
  while (!remainderStack.isEmpty()) {
    binaryStr += remainderStack.pop().toString()
  }
  return binaryStr
}

console.log(
  decimalToBinary(
    parseInt(process.argv[2]) || 0
  )
)
