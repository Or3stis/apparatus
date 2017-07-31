'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addDgnComponent (cy, component, nodeCounter) {
  switch (component) {
    case 'thing':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            component: '',
            concept: 'thing'
          }
        }
      })
      break
    case 'micronet':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            purpose: '',
            concept: 'micronet'
          }
        }
      })
      break
    case 'information':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'information'
          }
        }
      })
      break
    case 'net':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'net'
          }
        }
      })
      break
    case 'actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            intent: '',
            concept: 'actor'
          }
        }
      })
      break
    case 'malicious actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            intent: '',
            concept: 'malicious actor'
          }
        }
      })
      break
    case 'asset':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'asset'
          }
        }
      })
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            property: '',
            concept: 'constraint'
          }
        }
      })
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            type: '',
            concept: 'threat'
          }
        }
      })
      break
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
    default:
      console.error('error in addDgnComponent.js')
  }
}
