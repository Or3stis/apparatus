// show the neighbors of a tapped node

module.exports = function getNeighbors (cy, selectedNode) {
  // selectedNode from cy.on tap node function
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')
}
