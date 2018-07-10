/**
 * calculates the total number of nodes
 *
 * @param {Object} cy cytoscape
 */
module.exports = function printTotalNodes (cy) {
  const numberNodes = cy.elements().nodes().length
  const htmlElement = document.getElementById('legend-id')

  htmlElement.textContent = `nodes: ${numberNodes}`
}
