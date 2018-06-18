// adds design phase edge types based on the source and target nodes

const bubbleTxt = require('../helpers/bubbleTxt.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'service provider' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'service provider' && trgNodeCpt === 'cescm':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'service provider' && trgNodeCpt === 'light dc':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'service provider' && trgNodeCpt === 'storage':
      addEdge(cy, srcNodeId, trgNodeId, srcNodeCpt, trgNodeCpt, 'uses')
      break
    case srcNodeCpt === 'service provider' && trgNodeCpt === 'process':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'infrastructure provider' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'provides')
      break
    case srcNodeCpt === 'infrastructure provider' && trgNodeCpt === 'main dc':
      addEdge(cy, srcNodeId, trgNodeId, 'owns')
      break
    case srcNodeCpt === 'infrastructure provider' && trgNodeCpt === 'cescm':
      addEdge(cy, srcNodeId, trgNodeId, 'owns')
      break
    case srcNodeCpt === 'infrastructure provider' && trgNodeCpt === 'vim':
      addEdge(cy, srcNodeId, trgNodeId, 'owns')
      break
    case srcNodeCpt === 'infrastructure provider' && trgNodeCpt === 'light dc':
      addEdge(cy, srcNodeId, trgNodeId, 'owns')
      break
    case srcNodeCpt === 'cescm' && trgNodeCpt === 'vim':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'cescm' && trgNodeCpt === 'main dc':
      addEdge(cy, srcNodeId, trgNodeId, 'manages')
      break
    case srcNodeCpt === 'vim' && trgNodeCpt === 'main dc':
      addEdge(cy, srcNodeId, trgNodeId, 'manages')
      break
    case srcNodeCpt === 'vim' && trgNodeCpt === 'light dc':
      addEdge(cy, srcNodeId, trgNodeId, 'manages')
      break
    case srcNodeCpt === 'main dc' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'main dc' && trgNodeCpt === 'storage':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'main dc' && trgNodeCpt === 'process':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'light dc' && trgNodeCpt === 'main dc':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'light dc' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'light dc' && trgNodeCpt === 'storage':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'light dc' && trgNodeCpt === 'process':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'main dc':
      addEdge(cy, srcNodeId, trgNodeId, 'imposes')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'light dc':
      addEdge(cy, srcNodeId, trgNodeId, 'imposes')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'mitigates')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'vnf':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'storage':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'process':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'end user' && trgNodeCpt === 'storage':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'end user' && trgNodeCpt === 'process':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNodeId, trgNodeId, 'targets')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    default:
      bubbleTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
