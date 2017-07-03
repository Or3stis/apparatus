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
    case srcNodeCpt === 'net' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requests')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'imposes')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'use')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
      break
    case srcNodeCpt === 'thing' && trgNodeCpt === 'net':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'targets')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'thing':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
      break
    case srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
      break
    default:
      printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
  }
}
