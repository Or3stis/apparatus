'use strict'

const printChat = require('./printChat.js')

module.exports = function addComponent (cy, srcNode, tgtNode) {
  cy.add({
    group: 'edges',
    data: {
      id: `e${srcNode}${tgtNode}`,
      source: `${srcNode}`,
      target: `${tgtNode}`
    }
  })
  printChat('edge added')
}
