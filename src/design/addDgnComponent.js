'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addDgnComponent (cy, component) {
  let lastNode = cy.nodes().length + 1
  // let nodeInfo = {}

  switch (component) {
    case 'thing':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            component: '',
            concept: 'thing'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'micronet':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            purpose: '',
            concept: 'micronet'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'information':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'information'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'net':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'net'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            intent: '',
            concept: 'actor'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'malicious actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            intent: '',
            concept: 'malicious actor'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'asset':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'asset'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            property: '',
            concept: 'constraint'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${lastNode}`,
          label: `${component}`,
          info: {
            description: '',
            type: '',
            concept: 'threat'
          },
          position: {
            x: 200,
            y: 400
          }
        }
      })
      break
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
    default:
      console.error('error in addDgnComponent.js')
  }
}
