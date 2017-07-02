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
    case srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composed')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
      break
    case srcNodeCpt === 'net' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requests')
      break
    case srcNodeCpt === 'net' && trgNodeCpt === 'threat':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
      break
    case srcNodeCpt === 'unidentified node' && trgNodeCpt === 'net':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
      break
    case srcNodeCpt === 'network connection' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
      break
    case srcNodeCpt === 'network connection' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'application':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'runs')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'application':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'unidentified node':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'application':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'unidentified node':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'report sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'report sensor')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'contorl sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'event sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'notifies')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'listens')
      break
    case srcNodeCpt === 'control sensor' && trgNodeCpt === 'mechanism':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'triggers')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'imposes')
      break
    case srcNodeCpt === 'mechanism' && trgNodeCpt === 'constraint':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'satisfies')
      break
    case srcNodeCpt === 'mechanism' && trgNodeCpt === 'vulnerability':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'protects')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'vulnerability':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'exploits')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'targets')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'network connection':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'application':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'device':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'application':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'information':
      addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
      break
    default:
      printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
  }
}
