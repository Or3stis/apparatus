/**
 * helper function to add simple edges
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} srcNode source node
 * @param {Object} trgNode target node
 * @param {string} label edge label
 */
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
