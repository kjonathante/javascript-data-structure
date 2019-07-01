class Deque {
  items = {}
  count = 0
  lowestCount = 0

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count]
    delete this.items[this.count]
    this.count--
    return result
  }
  peekFront() {}
  peekBack() {}
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  clear() {}
  size() {
    return this.count - this.lowestCount
  }
  toString() {}
}

module.exports = Deque