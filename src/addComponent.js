'use strict'

const blue = '#3a99d8'
const red = '#e54d42'
const orange = '#39ca74'
const green = '#39ca74'
const yellow = '#e47e30'
const gray = '#94a4a5'

let color = '#ffffff'
let type = 'circle'
let size = 5

// add components in the graph
module.exports = function addComponent (component, s) {
  let lastNode = s.graph.nodes().length

  if (component === 'device') {
    color = blue
    type = 'circle'
    size = 5
  } else if (component === 'network connection') {
    color = blue
    type = 'diamond'
    size = 5
  } else if (component === 'micronet') {
    color = blue
    type = 'triangle'
    size = 7
  } else if (component === 'data') {
    color = blue
    type = 'square'
    size = 5
  } else if (component === 'net') {
    color = gray
    type = 'triangle'
    size = 7
  } else if (component === 'unidentified node') {
    color = gray
    type = 'circle'
    size = 5
  } else if (component === 'actor') {
    color = yellow
    type = 'actor'
    size = 5
  } else if (component === 'malicious actor') {
    color = red
    type = 'actor'
    size = 5
  } else if (component === 'secure micronet') {
    color = green
    type = 'triangle'
    size = 7
  } else if (component === 'asset') {
    color = orange
    type = 'hourglass'
    size = 5
  } else if (component === 'constraint') {
    color = green
    type = 'equilateral'
    size = 5
    // TODO fix it
  } else if (component === 'mechanism') {
    color = green
    type = 'circle'
    size = 5
  } else if (component === 'threat') {
    color = red
    type = 'diamond'
    size = 5
  } else if (component === 'vulnerability') {
    color = red
    type = 'circle'
    size = 5
  } else if (component === 'objective') {
    color = green
    type = 'square'
    size = 5
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
