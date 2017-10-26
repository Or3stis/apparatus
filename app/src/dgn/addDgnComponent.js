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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          info: {
            description: '',
            intent: '',
            concept: 'malicious actor'
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
          info: {
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
          info: {
            description: '',
            type: '',
            concept: 'threat'
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
