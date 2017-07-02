'use strict'

const printChat = require('../printChat.js')
const addEdge = require('../addEdge.js')

module.exports = function addComponent (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCpt
) {
  switch (true) {
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'configuration')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'documents')
      break
    case srcNodeCpt === 'event sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'documents')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'notifies')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'listens')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'high-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'low-level event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
      break
    case srcNodeCpt === 'high-level event' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'low-level event' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    default:
      printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
  }
}
