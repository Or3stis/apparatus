'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addDgnComponent (cy, component, nodeCounter) {
  switch (component) {
    case 'sensor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'sensor'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'model':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'model'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'event':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            trigger: '',
            constraint: '',
            concept: 'event'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }
}
