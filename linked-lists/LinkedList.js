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
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  getElementAt(index) {
    if(index>=0 && index < this.count) {
      let node = this.head
      for(let i=0; i<index; i++) {
        node = node.next
      }
      return node
    }
  }
}

module.exports = LinkedList
