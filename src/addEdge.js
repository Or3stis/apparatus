'use strict'

const printChat = require('./printChat.js')

module.exports = function addComponent (cy, sourceNode, targetNode) {
  cy.add({
    group: 'edges',
    data: {
      id: `${sourceNode}${targetNode}`,
      source: `${sourceNode}`,
      target: `${targetNode}`
    }
  })
  printChat('edge added')
}
