'use strict'

// calculate the total number of nodes
module.exports = function printTotalNodes (cy) {
  const numberNodes = cy.elements().nodes().length
  const htmlElement = document.getElementById('legend-id')

  htmlElement.textContent = `total nodes: ${numberNodes}`
}
