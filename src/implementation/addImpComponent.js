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
          },
          position: {
            x: 200,
            y: 400
          }
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
          },
          position: {
            x: 200,
            y: 400
          }
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
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            state: '',
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
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            location: '',
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
          id: `n${nodeCounter}`,
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
    case 'unidentified node':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'unidentified node'
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
          id: `n${nodeCounter}`,
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
          id: `n${nodeCounter}`,
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
          id: `n${nodeCounter}`,
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
          id: `n${nodeCounter}`,
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
    case 'mechanism':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'mechanism'
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
          id: `n${nodeCounter}`,
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
    case 'vulnerability':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          info: {
            description: '',
            concept: 'vulnerability'
          },
          position: {
            x: 200,
            y: 400
          }
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
    default:
      console.error('error in addComponent.js')
  }
}
