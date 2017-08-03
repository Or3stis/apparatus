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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
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
        },
        renderedPosition: {
          x: 200,
          y: 200
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }
}
