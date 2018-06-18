'use strict'

// add components in the graph

// TODO not DRY
module.exports = function addDgnComponent (cy, event, nodeCounter) {
  // get mouse position on click
  // display new node on the left of the menu
  let posX = event.x + 50
  let posY = event.y - 30

  // get the selected concept
  let component = event.target.textContent

  switch (component) {
    case 'service provider':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'service provider'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'infrastructure provider':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            purpose: '',
            concept: 'infrastructure provider'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'cescm':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'cescm'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'vim':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'vim'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'main dc':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'main dc'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'light dc':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            intent: '',
            concept: 'light dc'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'vnf':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'vnf'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'storage':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            property: '',
            concept: 'storage'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'process':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            type: '',
            concept: 'process'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'constraint':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'constraint'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'asset':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'asset'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'end user':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'end user'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'threat':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'threat'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    case 'malicious actor':
      cy.add({
        group: 'nodes',
        data: {
          id: `n${nodeCounter}`,
          label: `${component}`,
          asto: {
            description: '',
            concept: 'malicious actor'
          }
        },
        renderedPosition: {
          x: posX,
          y: posY
        }
      })
      break
    default:
      console.error('error in addDgnComponent.js')
  }
}
