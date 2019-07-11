class Node {
  left = null
  right = null
  constructor(key) {
    this.key = key
  }
}

const defaultCompareFn = (a, b) => {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

class BinarySearchTree {
  root = null
  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn
  }
}
