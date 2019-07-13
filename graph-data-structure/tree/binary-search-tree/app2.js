const avl = new AVLTree()
avl.insert(11)
avl.insert(7)
avl.insert(15)
avl.insert(5)
avl.insert(3)
avl.insert(9)
avl.insert(8)
avl.insert(10)
avl.insert(13)
avl.insert(12)
avl.insert(14)
avl.insert(20)
avl.insert(18)
avl.insert(25)
avl.insert(27)
avl.insert(30)
avl.insert(46)
avl.insert(70)
avl.insert(6)
// bst.remove(5)
console.log(avl.getNodeHeight(avl.root))

const data = avl.traverse()

const margin = { top: 20, right: 20, bottom: 20, left: 20 }
const width = 960 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom

// appends the svg object to the body of the page
// appends g or "group" element to the svg object
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`)
// svg points to g

// creates a tree layout and assigns the size
const treeLayout = d3.tree().size([width, height])

const root = d3.hierarchy(data)

// treeLayout root
const treeData = treeLayout(root)

// Generate the nodes, descendants returns an array
const nodes = treeData.descendants()

// Normalize for fixed-depth.
// nodes.forEach(function(d) {
//   d.y = d.depth * 100
// })

// ****************** Nodes section ***************************

// nodes.forEach(d => {
//   console.log('d', d)
// })

const node = svg.selectAll('g.node').data(nodes)

// Enter()
const nodeEnter = node
  .enter()
  .append('g')
  .attr('class', 'node')

// Add Circle for the nodes
nodeEnter
  .append('circle')
  .attr('class', 'node')
  .attr('cx', function(d) {
    return d.x
  })
  .attr('cy', function(d) {
    return d.y
  })
  .attr('r', 10)
  .style('fill', 'lightsteelblue')

// Add labels for the nodes
nodeEnter
  .append('text')
  .attr('text-anchor', 'end')
  .attr('x', d => d.x - 15)
  .attr('y', d => d.y)
  .text(function(d) {
    return d.data.name
  })

svg
  .selectAll('line.link')
  .data(root.links())
  .enter()
  .append('line')
  .classed('link', true)
  .attr('x1', function(d) {
    return d.source.x
  })
  .attr('y1', function(d) {
    return d.source.y
  })
  .attr('x2', function(d) {
    return d.target.x
  })
  .attr('y2', function(d) {
    return d.target.y
  })
