const Stack = require('./Stack2')

function parenthesesChecker(symbols) {
  const stack = new Stack(),
    opens = '([{',
    closers = ')]}'

  let balance = true,
    index = 0,
    symbol,
    top

  while (index < symbols.length && balance) {
    symbol = symbols[index]
    if (opens.indexOf(symbol) > -1) {
      stack.push(symbol)
    } else if (stack.isEmpty()) {
      balance = false
    } else {
      top = stack.pop()
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
        balance = false
      }
    }
    index++
  }
  return balance && stack.isEmpty()
}

console.log(parenthesesChecker(process.argv[2]))
