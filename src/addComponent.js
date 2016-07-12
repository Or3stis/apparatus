'use strict'

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  if (component === 'device') {
    color = '#6a9fb5'
    type = 'circle'
  } else if (component === 'network connection') {
    color = '#6a9fb5'
    type = 'diamond'
  } else if (component === 'microcosm') {
    color = '#6a9fb5'
    type = 'triangle'
  } else if (component === 'data') {
    color = '#6a9fb5'
    type = 'square'
  } else if (component === 'unkown world') {
    color = '#b0b0b0'
    type = 'triangle'
  } else if (component === 'unkown node') {
    color = '#b0b0b0'
    type = 'circle'
  } else if (component === 'actor') {
    color = '#f4bf75'
    type = 'actor'
  } else if (component === 'malicious actor') {
    color = '#ac4142'
    type = 'actor'
  } else if (component === 'secure microcosm') {
    color = '#70bf53'
    type = 'triangle'
  } else if (component === 'asset') {
    color = '#D08B0F'
    type = 'hourglass'
  } else if (component === 'constraint') {
    color = '#90a959'
    type = 'equilateral'
    // TODO fix it
  } else if (component === 'mechanism') {
    color = '#90a959'
    type = 'circle'
  } else if (component === 'threat') {
    color = '#ac4142'
    type = 'diamond'
  } else if (component === 'vulnerability') {
    color = '#ac4142'
    type = 'circle'
  } else if (component === 'property') {
    color = '#90a959'
    type = 'cross'
  }

  s.graph.addNode({
    id: `n${lastNode}`,
    label: `n${lastNode} ${component}`,
    x: 0,
    y: 0,
    size: 5,
    color: color,
    originalColor: color,
    type: type,
    info: {
      type: `${component}`
    }
  })
  s.refresh()
}

let color = '#ffffff'
let type = 'circle'
