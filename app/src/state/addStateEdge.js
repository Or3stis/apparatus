// adds state diagram edge types based on the source and target nodes

const printChatText = require('../helpers/printChatText.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.info.concept
  let trgNodeCpt = trgNode.info.concept

  switch (true) {
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'description')
      break
    default:
      printChatText(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
