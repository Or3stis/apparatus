// deletes and restores elements in the graphLayout

const printTotalNodes = require('./printTotalNodes.js')

// holds the deleted nodes
let deletedNodes = []
// used as module

/**
 * delets concepts
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} selectedNode selected node
 * @param {Object} selectedEdge selected edge
 */
const deleteConcept = (cy, selectedNode, selectedEdge) => {
  // removes edges
  if (
    Object.keys(selectedNode).length === 0 &&
    Object.keys(selectedEdge).length !== 0
  ) {
    selectedEdge.remove()
  }
  // removes nodes and adds them to deletedNodes array
  if (
    Object.keys(selectedEdge).length === 0 &&
    Object.keys(selectedNode).length !== 0
  ) {
    deletedNodes.push(selectedNode)
    selectedNode.remove()
  }
  printTotalNodes(cy)
}

/**
 * restores deleted nodes from the deleteNodes array
 *
 * @param {Object} cy cytoscape instance
 */
const restoreNode = cy => {
  if (deletedNodes.length !== 0) {
    deletedNodes.pop().restore()
    printTotalNodes(cy)
  }
}

module.exports = {
  deleteConcept,
  restoreNode
}
