class LinkedList {
  count = 0
  head = undefined

  constructor(equalsFn) {
    this.equalsFn = equalsFn
  }
}

module.exports = LinkedList