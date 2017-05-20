'use strict'

module.exports = function addComponent (cy, sourceNode, targetNode) {
  cy.add({
    group: 'edges',
    data: {
      id: `${sourceNode}${targetNode}`,
      source: `${sourceNode}`,
      target: `${targetNode}`
    }
  })
  const htmlElement = document.getElementById('info-nodes-id')
  htmlElement.textContent = 'edge added'
}
