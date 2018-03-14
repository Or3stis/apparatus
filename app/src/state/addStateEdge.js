const bubbleTxt = require('../helpers/bubbleTxt.js')
const addEdge = require('../core/addEdge.js')

/**
 * adds state diagram edge types based on the source and target nodes
 *
 * @param {Object } cy cytoscape instance
 * @param {Object } srcNode source node
 * @param {Object} trgNode target node
 */
module.exports = function addStateEdge (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.asto.concept
  let trgNodeCpt = trgNode.asto.concept

  switch (true) {
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'description')
      break
    default:
      bubbleTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
