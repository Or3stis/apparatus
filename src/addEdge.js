'use strict'

module.exports = function addEdge (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCp,
  label
) {
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
