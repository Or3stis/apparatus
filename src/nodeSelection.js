'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (cy, classification) {
  let nodes = ''

  cy.elements().addClass('faded')

  cy.nodes().each((n, node) => {
    if (node.data().info.type === classification) {
      node.removeClass('faded')
      nodes += 1
    }
  })

  // document.getElementById('info-for-nodes-id').textContent = nodes

  const classNode = nodes.length

  const currentDiv = document.getElementById('legend-id')
  currentDiv.textContent = `${classification} nodes: ${classNode}`
}
