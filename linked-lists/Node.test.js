const assert = require('assert')

const Node = require('./Node')

describe('Node Class', () => {
  it('should exist', () => {
    console.log(Node)
    assert(Node !== undefined)
  })

  it('should be a exported', () => {
    assert(typeof Node === 'function') // class are just function
  })

  it('should accept a value upon instantiation', () => {
    const str = 'Test'
    const node = new Node(str)
    assert(node.value === str)
  })
})
