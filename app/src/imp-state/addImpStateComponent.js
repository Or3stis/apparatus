'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addImpComponent (cy, event, nodeCounter) {
  // get mouse position on click
  // display new node on the left of the menu
  let posX = event.x + 50
  let posY = event.y - 30

  // get the selected concept
  let component = event.target.textContent

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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
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
          x: posX,
          y: posY
        }
      })
      break
    default:
      console.error('error in addImpStateComponent.js')
  }
}
