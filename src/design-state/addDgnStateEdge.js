'use strict'

const printChat = require('../helpers/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'configuration')
      break
    case srcNodeCpt === 'event' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'sensor' && trgNodeCpt === 'event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'detects')
      break
    default:
      printChat(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
