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

  insert(key) {
    // special case: first key
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new Node(key)
    } else {
      this.insertNode(node.right, key)
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min() {
    let current = this.root
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max() {
    let current = this.root
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  traverse() {
    const result = this.traverseNode(this.root)
    return result
  }
  traverseNode(node) {
    if (node != null) {
      const left = this.traverseNode(node.left)
      const right = this.traverseNode(node.right)
      const result = { name: node.key }
      if (left && right) {
        result.children = [left, right]
      } else if (left) {
        result.children = [left]
      } else if (right) {
        result.children = [right]
      }
      return result
    }
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = BinarySearchTree
}
