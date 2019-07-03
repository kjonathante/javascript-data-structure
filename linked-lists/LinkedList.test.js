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
  describe('.push()', () => {
    let linkedList
    before(() => {
      linkedList = new LinkedList()
    })

    it('should be a method', () => {
      // const linkedList = new LinkedList()
      assert(typeof linkedList.push === 'function')
    })

    it('accept a element', () => {
      const element = 'Hello'
      linkedList.push(element)
      assert(linkedList.count === 1)
      assert(linkedList.head.element === element)
    })

    it('accept another element', () => {
      const element = 'Hey'
      linkedList.push(element)
      assert(linkedList.count === 2)
      assert(linkedList.head.next.element === element)
    })
  })
  describe('.removeAt()', () => {
    let linkedList
    before(() => {
      linkedList = new LinkedList()
    })
    it('should be a method', () => {
      assert(typeof linkedList.removeAt === 'function')
    })
    it('should return undefined if index is out of range', () => {
      assert(linkedList.removeAt(5) === undefined)
    })
    it('should remove first item', () => {
      const element = 5
      linkedList.push(element)
      assert(linkedList.removeAt(0) === element)
      assert(linkedList.count === 0)
    })
    it('should remove middle item then the last item', () => {
      const element = 5
      linkedList.push(element)
      linkedList.push(element + 1)
      linkedList.push(element + 2)
      assert(linkedList.removeAt(1) === element + 1)
      assert(linkedList.count === 2)
      assert(linkedList.removeAt(1) === element + 2)
      assert(linkedList.count === 1)
    })
  })
  describe('./getElementAt()', () => {
    let linkedList
    before(() => {
      linkedList = new LinkedList()
    })
    it('should be a method', () => {
      assert(typeof linkedList.getElementAt === 'function')
    })
    it('should return undefined if linkedlist is empty', () => {
      assert(linkedList.getElementAt(0) === undefined)
    })
    it('should return undefined if index is out of range', () => {
      assert(linkedList.getElementAt(5) === undefined)
    })
    it('should return Node object after pushing 1 node', ()=>{
      linkedList.push(5)
      assert(linkedList.getElementAt(0).element === 5)
      assert(linkedList.getElementAt(1) === undefined)
    })
    it('should return Node object after pushing 1 node', ()=>{
      linkedList.push(6)
      linkedList.push(7)
      assert(linkedList.getElementAt(0).element === 5)
      assert(linkedList.getElementAt(1).element === 6)
      assert(linkedList.getElementAt(2).element === 7)
      assert(linkedList.getElementAt(3) === undefined)
    })
  })
})
