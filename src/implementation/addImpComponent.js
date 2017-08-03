'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addImpComponent (cy, component, nodeCounter) {
  switch (component) {
    case 'device':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            aspect: '',
            layer: '',
            type: '',
            service: '',
            input: '',
            output: '',
            update: '',
            concept: 'device'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'network connection':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            listOfProtocols: '',
            concept: 'network connection'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
    case 'application':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            version: '',
            update: '',
            concept: 'application'
          }
        },
        renderedPosition: {
          x: 100,
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
            state: '',
            purpose: '',
            concept: 'micronet'
          }
        },
        renderedPosition: {
          x: 100,
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
            location: '',
            concept: 'information'
          }
        },
        renderedPosition: {
          x: 100,
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
          x: 100,
          y: 200
        }
      })
      break
    case 'unidentified node':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'unidentified node'
          }
        },
        renderedPosition: {
          x: 100,
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
          x: 100,
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
          x: 100,
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
          x: 100,
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
          x: 100,
          y: 200
        }
      })
      break
    case 'mechanism':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'mechanism'
          }
        },
        renderedPosition: {
          x: 100,
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
          x: 100,
          y: 200
        }
      })
      break
    case 'vulnerability':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'vulnerability'
          }
        },
        renderedPosition: {
          x: 100,
          y: 200
        }
      })
      break
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
    default:
      console.error('error in addImpComponent.js')
  }
}
