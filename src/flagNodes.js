'use strict'

module.exports = function securityHints (cy, flaggedList) {
  let flaggedNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().map((node) => {
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
