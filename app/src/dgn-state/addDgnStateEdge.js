'use strict'
// adds design-state phase edge types based on the source and target nodes

const bubbleTxt = require('../helpers/bubbleTxt.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'cescm' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'configuration')
      break
    case srcNodeCpt === 'event' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'affects')
      break
    case srcNodeCpt === 'cescm' && trgNodeCpt === 'event':
      addEdge(cy, srcNodeId, trgNodeId, 'detects')
      break
    default:
      bubbleTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
