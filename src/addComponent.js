const config = require('./config')

'use strict'

// initial values
let color = '#ffffff'
let type = 'circle'
let size = 5

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  switch (component) {
    case 'device':
      color = config.red
      type = 'circle'
      size = 5
      break
    case 'network connection':
      color = config.blue
      type = 'diamond'
      size = 5
      break
    case 'micronet':
      color = config.blue
      type = 'triangle'
      size = 7
      break
    case 'data':
      color = config.blue
      type = 'square'
      size = 5
      break
    case 'net':
      color = config.gray
      type = 'triangle'
      size = 7
      break
    case 'unidentified node':
      color = config.gray
      type = 'circle'
      size = 5
      break
    case 'actor':
      color = config.yellow
      type = 'actor'
      size = 5
      break
    case 'malicious actor':
      color = config.red
      type = 'actor'
      size = 5
      break
    case 'secure micronet':
      color = config.green
      type = 'triangle'
      size = 7
      break
    case 'asset':
      color = config.orange
      type = 'hourglass'
      size = 5
      break
    case 'constraint':
      color = config.green
      type = 'equilateral'
      size = 5
      break
    case 'mechanism':
      color = config.green
      type = 'circle'
      size = 5
      break
    case 'threat':
      color = config.red
      type = 'diamond'
      size = 5
      break
    case 'vulnerability':
      color = config.red
      type = 'circle'
      size = 5
      break
    case 'objective':
      color = config.green
      type = 'square'
      size = 5
      break
    default:
      console.error('error in addComponent.js')
  }

  s.graph.addNode({
    id: `n${lastNode}`,
    label: `n${lastNode} ${component}`,
    x: 0,
    y: 0,
    size: size,
    color: color,
    originalColor: color,
    type: type,
    info: {
      description: '',
      type: `${component}`
    }
  })
  s.refresh()
}
