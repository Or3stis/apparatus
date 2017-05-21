'use strict'
const printChat = require('./printChat.js')

module.exports = function securityHints (cy, flaggedList) {
  let flaggedNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().map((node) => {
    const nodeData = node.data().info
    Object.keys(nodeData).map((value) => {
      flaggedList.map((i) => {
        if (nodeData[value] === i) {
          flaggedNodes += `• ${node.data().label} -> ${i}\n`
          // remove faded class from the search nodes
          node.removeClass('faded')
        }
      })
    })
  })
  printChat(flaggedNodes)
}
