if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  const BinarySearchTree = require('./BinarySearchTree')
}

class AVLTree extends BinarySearchTree {
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    )
  }
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = AVLTree
}


