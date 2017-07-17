'use strict'
// find the total number of nodes

module.exports = function totalNodes (cy) {
  const numberNodes = cy.elements().nodes().length
  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `total nodes: ${numberNodes}`
}
