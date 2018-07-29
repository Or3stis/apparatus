/**
 * helper function to add simple edges
 *
 * @param {object} cy cytoscape instance
 * @param {string} srcNode source node
 * @param {string} trgNode target node
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
