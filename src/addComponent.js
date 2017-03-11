'use strict'

// add components in the graph
// module.exports = function addComponent(component, cy) {
module.exports = function addComponent (cy, component) {
  let lastNode = cy.nodes().length + 1

  switch (component) {
    case 'device':
      // color = config.blue
      // type = 'circle'
      break
    case 'network connection':
      // color = config.blue
      // type = 'diamond'
      break
    case 'micronet':
      // color = config.blue
      // type = 'triangle'
      break
    case 'data':
      // color = config.blue
      // type = 'square'
      break
    case 'net':
      // color = config.gray
      // type = 'triangle'
      break
    case 'unidentified node':
      // color = config.gray
      // type = 'circle'
      break
    case 'actor':
      // color = config.yellow
      // type = 'actor'
      break
    case 'malicious actor':
      // color = config.red
      // type = 'actor'
      break
    case 'secure micronet':
      // color = config.green
      // type = 'triangle'
      break
    case 'asset':
      // color = config.orange
      // type = 'hourglass'
      break
    case 'constraint':
      // color = config.green
      // type = 'equilateral'
      break
    case 'mechanism':
      // color = config.green
      // type = 'circle'
      break
    case 'threat':
      // color = config.red
      // type = 'diamond'
      break
    case 'vulnerability':
      // color = config.red
      // type = 'circle'
      break
    case 'objective':
      // color = config.green
      // type = 'square'
      break
    default:
      console.error('error in addComponent.js')
  }

  cy.add({
    group: 'nodes',
    data: {
      id: `n${lastNode}`,
      label: `${component}`,
      info: {
        description: `${component}`
        // type: `${component}`
      },
      position: {
        x: 400,
        y: 400
      }
    }
  })
}
