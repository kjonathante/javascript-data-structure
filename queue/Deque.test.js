'user strict'
const assert = require('assert')
const Deque = require('./Deque')

describe('Deque', function() {
  it('should exist', function() {
    assert(Deque !== undefined)
  })
})

describe('Deque addBack', function() {
  const deque = new Deque()
  it('should add to items', function() {
    deque.addBack('John')
    assert(deque.count === 1)
    assert(deque.lowestCount === 0)
    assert(deque.items[0] === 'John')
  })
})
