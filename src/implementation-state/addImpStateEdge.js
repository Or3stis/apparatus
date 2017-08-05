'use strict'

const printChat = require('../helpers/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'configuration')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'documents')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'documents')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'notifies')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'listens')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'high-level event' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'low-level event' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'affects')
      break
    default:
      printChat(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
