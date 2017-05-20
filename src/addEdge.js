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
  document.getElementById('info-nodes-id').textContent = 'edge added'
}
