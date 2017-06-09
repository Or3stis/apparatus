'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addDgnComponent (cy, component) {
  let lastNode = cy.nodes().length + 1
  // let nodeInfo = {}

  switch (component) {
    case 'sensor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'sensor'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'model':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'model'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'event':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            trigger: '',
            constraint: '',
            concept: 'evnet'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }

  // cy.add({
  //   group: 'nodes',
  //   data: {
  //     id: `n${lastNode}`,
  //     label: `${component}`,
  //     info: {
  //       [`${Object.keys(nodeInfo)[0]}`]: `${Object.values(nodeInfo)[0]}`,
  //       [`${Object.keys(nodeInfo)[1]}`]: `${Object.values(nodeInfo)[1]}`,
  //       [`${Object.keys(nodeInfo)[2]}`]: `${Object.values(nodeInfo)[2]}`
  //     },
  //     position: {
  //       x: 200,
  //       y: 400
  //     }
  //   }
  // })
}
