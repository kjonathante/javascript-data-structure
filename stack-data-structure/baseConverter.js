const Stack = require('./Stack2')

function baseConverter( decNumber = 0, base ) {
  const remainderStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  if (number === 0) {
    remainderStack.push(0)
  } else {
    while (number > 0) {
      remainderStack.push(number % base)
      number = Math.floor(number / base)
    }
  }

  let binaryStr = ''
  while (!remainderStack.isEmpty()) {
    binaryStr += digits[ remainderStack.pop() ]
  }
  return binaryStr
}

console.log(
  baseConverter(
    parseInt(process.argv[2]) || 0,
    parseInt(process.argv[3]) || 2
  )
)
