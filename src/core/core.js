'use strict'

// core modules, shared between all phases
const nodeSelection = require('./nodeSelection.js')
const layout = require('./layout.js')
const save = require('./save.js')
// const load = require('./load.js')
const totalNodes = require('./totalNodes.js')

// highlights only the selected node class
const selectionNode = cy => {
  const select = document.getElementById('selection-id')
  select.addEventListener('click', e => {
    nodeSelection(cy, e.target.textContent)
  })
}

// show the neighbors of a tapped node
const getNeighbors = (cy, selectedNode) => {
  // selectedNode from cy.on tap node function
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')
}
// links the showNeighbor button
const showNeighbor = (cy, selectedNode) => {
  const buttonNeighbor = document.getElementById('neighbors-button')
  buttonNeighbor.addEventListener('click', () => {
    getNeighbors(cy, selectedNode.out)
  })
}
// holds the deleted nodes
let deletedNodes = []
// used as module
const deleteEl = (cy, selectedNode, selectedEdge) => {
  if (
    Object.keys(selectedNode).length === 0 &&
    Object.keys(selectedEdge).length !== 0
  ) {
    selectedEdge.remove()
  }
  if (
    Object.keys(selectedEdge).length === 0 &&
    Object.keys(selectedNode).length !== 0
  ) {
    deletedNodes.push(selectedNode)
    selectedNode.remove()
  }
  totalNodes(cy)
}
// bind the delete Button
const deleteButton = (cy, selectedNode, selectedEdge) => {
  const buttonDelete = document.getElementById('delete')
  buttonDelete.addEventListener('click', () => {
    deleteEl(cy, selectedNode.out, selectedEdge.out)
  })
}
// cose layout
const graphLayout = cy => {
  const buttonLayout = document.getElementById('layout-button')
  buttonLayout.addEventListener('click', e => {
    layout(cy, e.target.textContent)
  })
}
// enable label buttons
const labels = cy => {
  const hideLabelsButton = document.getElementById('hide-label')
  hideLabelsButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.edges().removeClass('label-edges')
  })
  const showLabelsButton = document.getElementById('show-label')
  showLabelsButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-nodes')
    cy.edges().addClass('label-edges')
  })
  const showLabelNodeButton = document.getElementById('show-label-node')
  showLabelNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-nodes')
  })
  const showIdNodeButton = document.getElementById('show-node-id')
  showIdNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-id')
  })
  const showDiscNodeButton = document.getElementById('show-node-disc')
  showDiscNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().addClass('label-dsc')
  })
}
// save graph
const saveGraph = (cy) => {
  const buttonSave = document.getElementById('save-button')
  buttonSave.addEventListener('click', () => {
    save(cy)
  })
}
// loads a graph
// const loadGraph = (cy) => {
//   const buttonLoad = document.getElementById('load-button')
//   buttonLoad.addEventListener('click', () => {
//     load(cy)
//   })
// }
const restoreNode = () => {
  if (deletedNodes.length !== 0) {
    deletedNodes.pop().restore()
  }
}

module.exports = {
  selectionNode: selectionNode,
  graphLayout: graphLayout,
  deleteButton: deleteButton,
  deleteEl: deleteEl,
  showNeighbor: showNeighbor,
  getNeighbors: getNeighbors,
  labels: labels,
  saveGraph: saveGraph,
  restoreNode: restoreNode
  // loadGraph: loadGraph
}
