'user strict'
const assert = require('assert')
const BinarySearchTree = require('./BinarySearchTree')

describe('Binary Search Tree', () => {
  describe('.min()', () => {
    it('should return', () => {
      const bst = new BinarySearchTree()
      bst.insert(11)
      bst.insert(7)
      const node = bst.min()
      assert( node.key === 7 )
    })
  })
  describe('.max()', () => {
    it('should return', () => {
      const bst = new BinarySearchTree()
      bst.insert(11)
      bst.insert(7)
      let node = bst.max()
      assert( node.key === 11 )
      bst.insert(15)
      node = bst.max()
      assert( node.key === 15 )
    })
  })
})
