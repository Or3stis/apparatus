'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addImpComponent (cy, component, nodeCounter) {
  switch (component) {
    case 'event sensor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'event sensor'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'report sensor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'report sensor'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'control sensor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'control sensor'
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
    case 'high-level event':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            trigger: '',
            constraint: '',
            concept: 'high-level event'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'low-level event':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            trigger: '',
            mechanism: '',
            concept: 'low-level event'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    default:
      console.error('error in addImpStateComponent.js')
  }
}
