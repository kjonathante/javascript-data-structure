const assert = require('assert')

const Node = require('./Node')

describe('Node Class', () => {
  it('should exist', () => {
    assert(Node !== undefined)
  })

  it('should be a exported', () => {
    assert(typeof Node === 'function') // class are just function
  })

  it('should accept an element upon instantiation', () => {
    const str = 'Test'
    const node = new Node(str)
    assert(node.element === str)
  })

  it('should it should have a next property that defaults to undefined', () => {
    const str = 'Test'
    const node = new Node(str)
    assert(node.next === undefined)
  })
})
