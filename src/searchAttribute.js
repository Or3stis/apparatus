'use strict'

module.exports = function flag (cy, term) {
  let searchNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().map((node) => {
    const nodeData = node.data().info
    Object.keys(nodeData).map((value) => {
      if (nodeData[value] === term) {
        searchNodes += `• ${nodeData.description}\n`
        // remove faded class from the search nodes
        node.removeClass('faded')
      }
    })
  })
  const htmlElement = document.getElementById('info-for-nodes-id')
  htmlElement.textContent = searchNodes
}
