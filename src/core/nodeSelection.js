'use strict'

// when button class is clicked the corresponing nodes are highlighted
module.exports = function nodeSelection (cy, classification) {
  cy.elements().addClass('faded')

  let totalNodes = 0
  // removes the faded class from the selected nodes
  // and adds them to node count
  cy.nodes().map(node => {
    if (node.data().info.concept === classification) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const currentDiv = document.getElementById('legend-id')
  currentDiv.textContent = `${classification} nodes: ${totalNodes}`
}
