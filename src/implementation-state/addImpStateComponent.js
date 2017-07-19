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
          },
          position: {
            x: 200,
            y: 400
          }
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
          },
          position: {
            x: 200,
            y: 400
          }
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
          id: `n${nodeCounter}`,
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
          },
          position: {
            x: 200,
            y: 400
          }
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
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    default:
      console.error('error in addImpStateComponent.js')
  }
}
