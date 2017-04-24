// find the total number of nodes

module.exports = function totalNodes (cy) {
  const numberNodes = cy.elements().nodes().length
  const currentDiv = document.getElementById('legend-id')
  currentDiv.textContent = `total nodes: ${numberNodes}`
}
