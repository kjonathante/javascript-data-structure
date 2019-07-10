class Node {
  left = null
  right = null
  constructor(key) {
    this.key = key
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class BinarySearchTree {
  root = null
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
  }

  insert(key) {
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
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
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

  traverse() {
    const result = this.traverseNode(this.root)
    return result
  }
  traverseNode(node) {
    if (node != null) {
      const left = this.traverseNode(node.left)
      const right = this.traverseNode(node.right)
      const result = {name: node.key}
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

  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
    } else {
      // key is equal node.key
      // case 1
      if(node.left == null && node.right == null) {
        node = null
        return node
      }

      // case 2
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }

      // case 3
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}

// const bst = new BinarySearchTree()
// bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.inOrderTraverse(r => console.log(r))
// console.dir(bst.traverse(), {depth: 10})

// console.log(bst.min().key)
// console.log(bst.search(2))
