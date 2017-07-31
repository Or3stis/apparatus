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
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }
}
