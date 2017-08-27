const totalNodes = require('./totalNodes.js')

// require design modules
const dgn = require('../design/design.js')

// require design-state Models
const dgnState = require('../design-state/dgnState.js')

// reguire implementation modules
const imp = require('../implementation/implementation.js')

// require implementation-state modules
const impState = require('../implementation-state/impState.js')

// show the neighbors of a tapped node
const getNeighbors = (cy, selectedNode) => {
  // selectedNode from cy.on tap node function
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')
}

// holds the deleted nodes
let deletedNodes = []
// used as module
const deleteEl = (cy, selectedNode, selectedEdge) => {
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
  totalNodes(cy)
}

// restores deleted nodes from the deleteNodes array
const restoreNode = () => {
  if (deletedNodes.length !== 0) deletedNodes.pop().restore()
}

// phases model validation
const validateFunc = (cy, phase) => {
  if (phase === 'design') {
    dgn.validate(cy)
  } else if (phase === 'design-state') {
    dgnState.validate(cy)
  } else if (phase === 'implementation') {
    imp.validate(cy)
  } else if (phase === 'implementation-state') {
    impState.validate(cy)
  }
}

// phases model overview
const overviewFunc = (cy, phase) => {
  if (phase === 'design') {
    dgn.overview(cy)
  } else if (phase === 'design-state') {
    dgnState.overview(cy)
  } else if (phase === 'implementation') {
    imp.overview(cy)
  } else if (phase === 'implementation-state') {
    impState.overview(cy)
  }
}

module.exports = {
  getNeighbors: getNeighbors,
  deleteEl: deleteEl,
  restoreNode: restoreNode,
  validateFunc: validateFunc,
  overviewFunc: overviewFunc
}
