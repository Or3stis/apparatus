'use strict'

const printChat = require('../printChat.js')

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'sensor' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'model' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'configuration'
      }
    })
  } else if (srcNodeCpt === 'event' && trgNodeCpt === 'sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'event' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'sensor' && trgNodeCpt === 'event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'detects'
      }
    })
  } else {
    printChat('mistake 😔')
  }
}
