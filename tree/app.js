var svg = d3.select('svg')
svg
  .selectAll('circle')
  .data([32, 57, 112, 293, 50])
  .enter()
  .append('circle')
  .attr('cy', 60)
  .attr('cx', function(d, i) {
    console.log(d)
    return i * 100 + 30
  })
  .attr('r', function(d) {
    return Math.sqrt(d)
  })

svg
  .selectAll('circle')
  .data([32, 57])
  .exit()
  .remove()

var data = {
  name: 'A1',
  children: [
    {
      name: 'B1',
      children: [
        {
          name: 'C1',
          value: 100
        },
        {
          name: 'C2',
          value: 300
        },
        {
          name: 'C3',
          value: 200
        }
      ]
    },
    {
      name: 'B2',
      value: 200
    }
  ]
}

var root = d3.hierarchy(data)
