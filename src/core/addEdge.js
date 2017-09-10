// helper function to add simple edges

module.exports = function addEdge (cy, srcNode, trgNode, label) {
  cy.add({
    group: 'edges',
    data: {
      id: `e${srcNode}${trgNode}`,
      source: `${srcNode}`,
      target: `${trgNode}`,
      label: `${label}`
    }
  })
}
