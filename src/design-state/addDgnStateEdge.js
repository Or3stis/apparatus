'use strict'

const printChat = require('../core/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCpt
) {
  switch (true) {
    case srcNodeCpt === 'sensor' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'configuration')
      break
    case srcNodeCpt === 'event' && trgNodeCpt === 'model':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'sensor' && trgNodeCpt === 'event':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
      break
    default:
      printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
  }
}
