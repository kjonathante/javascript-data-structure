const Node = require('./Node')

class LinkedList {
  count = 0
  head = undefined

  constructor(equalsFn) {
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    if (this.head == null) {
      // is equivalent to this.head === undefined || this.head === null
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
}

module.exports = LinkedList
