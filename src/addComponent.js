'use strict'

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  if (component === 'device') {
    color = '#3a99d8'
    type = 'circle'
  } else if (component === 'network connection') {
    color = '#3a99d8'
    type = 'diamond'
  } else if (component === 'micronet') {
    color = '#3a99d8'
    type = 'triangle'
    size = 7
  } else if (component === 'data') {
    color = '#3a99d8'
    type = 'square'
  } else if (component === 'net') {
    color = '#94a4a5'
    type = 'triangle'
    size = 7
  } else if (component === 'unidentified node') {
    color = '#94a4a5'
    type = 'circle'
  } else if (component === 'actor') {
    color = '#f0c330'
    type = 'actor'
  } else if (component === 'malicious actor') {
    color = '#e54d42'
    type = 'actor'
  } else if (component === 'secure micronet') {
    color = '#39ca74'
    type = 'triangle'
    size = 7
  } else if (component === 'asset') {
    color = '#e47e30'
    type = 'hourglass'
  } else if (component === 'constraint') {
    color = '#39ca74'
    type = 'equilateral'
    // TODO fix it
  } else if (component === 'mechanism') {
    color = '#39ca74'
    type = 'circle'
  } else if (component === 'threat') {
    color = '#e54d42'
    type = 'diamond'
  } else if (component === 'vulnerability') {
    color = '#e54d42'
    type = 'circle'
  } else if (component === 'objective') {
    color = '#39ca74'
    type = 'square'
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

let color = '#ffffff'
let type = 'circle'
let size = 5
