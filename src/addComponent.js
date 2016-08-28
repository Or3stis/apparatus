'use strict'

const blue = '#3a99d8'
const red = '#e54d42'
const orange = '#e47e30'
const green = '#39ca74'
const yellow = '#e47e30'
const gray = '#94a4a5'

let color = '#ffffff'
let type = 'circle'
let size = 5

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  switch (component) {
    case 'device':
      color = blue
      type = 'circle'
      size = 5
      break
    case 'network connection':
      color = blue
      type = 'diamond'
      size = 5
      break
    case 'micronet':
      color = blue
      type = 'triangle'
      size = 7
      break
    case 'data':
      color = blue
      type = 'square'
      size = 5
      break
    case 'net':
      color = gray
      type = 'triangle'
      size = 7
      break
    case 'unidentified node':
      color = gray
      type = 'circle'
      size = 5
      break
    case 'actor':
      color = yellow
      type = 'actor'
      size = 5
      break
    case 'malicious actor':
      color = red
      type = 'actor'
      size = 5
      break
    case 'secure micronet':
      color = green
      type = 'triangle'
      size = 7
      break
    case 'asset':
      color = orange
      type = 'hourglass'
      size = 5
      break
    case 'constraint':
      color = green
      type = 'equilateral'
      size = 5
      break
    case 'mechanism':
      color = green
      type = 'circle'
      size = 5
      break
    case 'threat':
      color = red
      type = 'diamond'
      size = 5
      break
    case 'vulnerability':
      color = red
      type = 'circle'
      size = 5
      break
    case 'objective':
      color = green
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
