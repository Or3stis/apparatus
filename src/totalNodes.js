// find the total number of nodes

module.exports = function totalNodes (cy) {
  const numberNodes = cy.elements().nodes().length
  document.getElementById('legend-id').textContent = `total nodes: ${numberNodes}`
}
