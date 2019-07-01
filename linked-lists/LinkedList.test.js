const assert = require('assert')

describe('LinkedList File', () => {
  let LinkedList

  before(() => {
    LinkedList = require('./LinkedList')
  })

  it('should exist', () => {
    // const LinkedList = require('./LinkedList')
    assert(LinkedList !== undefined)
  })

  it('should be a function', () => {
    // const LinkedList = require('./LinkedList')
    assert(typeof LinkedList === 'function')
  })

  it('should instantiate an object', () => {
    // const LinkedList = require('./LinkedList')
    const linkedList = new LinkedList()
    assert(typeof linkedList === 'object')
  })

  describe('.next', () => {
    it('defaults to undefined', () => {
      // const LinkedList = require('./LinkedList')
      const linkedList = new LinkedList()
      assert(linkedList.next === undefined)
    })
  })
  describe('.count', () => {
    it('defaults to 0', () => {
      // const LinkedList = require('./LinkedList')
      const linkedList = new LinkedList()
      assert(linkedList.count === 0)
    })
  })
  describe('.push()', () => {})
})
