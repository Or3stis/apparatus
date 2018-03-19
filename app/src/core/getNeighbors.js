/**
 * show the neighbors of a tapped node
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} selectedNode selection node
 */
module.exports = function getNeighbors (cy, selectedNode) {
  // selectedNode from cy.on tap node function
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')
}
