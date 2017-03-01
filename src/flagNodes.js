'use strict'

const config = require('./config')

// checks the values of the nodes for flagged values
const flaggedList = config.flag

module.exports = function securityHints (cy) {
  let flaggedNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().each((n, node) => {
    Object.keys(node.data().info).map((value) => {
      flaggedList.map((i) => {
        if (node.data().info[value] === i) {
          flaggedNodes += `• ${node.data().label} ⚑ ${i}\n`
          // remove faded class from the search nodes
          node.removeClass('faded')
        }
      })
    })
  })
  document.getElementById('info-for-nodes-id').textContent = flaggedNodes
}
