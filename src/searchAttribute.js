'use strict'

module.exports = function flag (cy, term) {
  let searchNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().each((n, node) => {
    Object.keys(node.data().info).map((value) => {
      if (node.data().info[value] === term) {
        searchNodes += `• ${node.data().info.description}\n`
        // remove faded class from the search nodes
        node.removeClass('faded')
      }
    })
  })
  document.getElementById('info-for-nodes-id').textContent = searchNodes
}
