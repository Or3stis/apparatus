'use strict'

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  if (component === 'device') {
    color = '#46afe3'
    type = 'circle'
  } else if (component === 'network connection') {
    color = '#46afe3'
    type = 'diamond'
  } else if (component === 'microcosm') {
    color = '#46afe3'
    type = 'triangle'
  } else if (component === 'data') {
    color = '#46afe3'
    type = 'square'
  } else if (component === 'unkown world') {
    color = '#aaaaaa'
    type = 'triangle'
  } else if (component === 'unkown node') {
    color = '#aaaaaa'
    type = 'circle'
  } else if (component === 'actor') {
    color = '#ffff1a'
    type = 'actor'
  } else if (component === 'malicious actor') {
    color = '#ff0000'
    type = 'actor'
  } else if (component === 'secure microcosm') {
    color = '#70bf53'
    type = 'triangle'
  } else if (component === 'asset') {
    color = '#D08B0F'
    type = 'hourglass'
  } else if (component === 'constraint') {
    color = '#70bf53'
    type = 'equilateral'
    // TODO fix it
  } else if (component === 'mechanism') {
    color = '#70bf53'
    type = 'circle'
  } else if (component === 'threat') {
    color = '#eb5368'
    type = 'diamond'
  } else if (component === 'vulnerability') {
    color = '#eb5368'
    type = 'circle'
  } else if (component === 'property') {
    color = '#70bf53'
    type = 'cross'
  }

  s.graph.addNode({
    id: lastNode,
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
