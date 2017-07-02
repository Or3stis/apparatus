'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (cy, classification) {
  cy.elements().addClass('faded')

  let totalNodes = 0
  cy.nodes().map(node => {
    if (node.data().info.concept === classification) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const currentDiv = document.getElementById('legend-id')
  currentDiv.textContent = `${classification} nodes: ${totalNodes}`
}
