'use strict'

// core modules, shared between all phases
const nodeSelection = require('./nodeSelection.js')
const layout = require('./layout.js')
const totalNodes = require('./totalNodes.js')
const patterns = require('./patterns.js')

const save = require('../helpers/save.js')
// const load = require('../helpers/load.js')

// require design modules
const dgn = require('../design/design.js')

// require design-state Models
const dgnState = require('../design-state/dgnState.js')

// reguire implementation modules
const imp = require('../implementation/implementation.js')

// require implementation-state modules
const impState = require('../implementation-state/impState.js')

// highlights only the selected node class
const selectionNode = cy => {
  const select = document.getElementById('selection-id')
  select.addEventListener('click', e => nodeSelection(cy, e.target.textContent))
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

// bind the delete Button
const deleteButton = (cy, selectedNode, selectedEdge) => {
  const buttonDelete = document.getElementById('delete')
  buttonDelete.addEventListener('click', () => {
    deleteEl(cy, selectedNode.out, selectedEdge.out)
  })
}

// applies the selected layout to the graph
// uses the layout.js module
const graphLayout = cy => {
  const buttonLayout = document.getElementById('layout-button')
  buttonLayout.addEventListener('click', e => layout(cy, e.target.textContent))
}

// phases model validation
const validate = (cy, phase) => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    if (phase === 'design') {
      dgn.validate(cy)
    } else if (phase === 'design-state') {
      dgnState.validate(cy)
    } else if (phase === 'implementation') {
      imp.validate(cy)
    } else if (phase === 'implementation-state') {
      impState.validate(cy)
    }
  })
}

// phases model overview
const overview = (cy, phase) => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    if (phase === 'design') {
      dgn.overview(cy)
    } else if (phase === 'design-state') {
      dgnState.overview(cy)
    } else if (phase === 'implementation') {
      imp.overview(cy)
    } else if (phase === 'implementation-state') {
      impState.overview(cy)
    }
  })
}

// find patterns using the findPattern.js module
const findPattern = cy => {
  const buttonPattern = document.getElementById('pattern-button')
  buttonPattern.addEventListener('click', () => patterns(cy))
}

// save the graph using the save.js module
const saveGraph = cy => {
  const buttonSave = document.getElementById('save-button')
  buttonSave.addEventListener('click', () => save(cy))
}
// loads a graph
// const loadGraph = (cy) => {
//   const buttonLoad = document.getElementById('load-button')
//   buttonLoad.addEventListener('click', () => {
//     load(cy)
//   })
// }

// enable label buttons
const labels = cy => {
  const hideLabelsButton = document.getElementById('hide-label')
  hideLabelsButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.edges().removeClass('label-edges')
  })
  const showLabelsEdgeButton = document.getElementById('show-label-edge')
  showLabelsEdgeButton.addEventListener('click', () => {
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

module.exports = {
  selectionNode: selectionNode,
  graphLayout: graphLayout,
  deleteButton: deleteButton,
  deleteEl: deleteEl,
  restoreNode: restoreNode,
  showNeighbor: showNeighbor,
  getNeighbors: getNeighbors,
  validate: validate,
  overview: overview,
  findPattern: findPattern,
  saveGraph: saveGraph,
  // loadGraph: loadGraph,
  labels: labels
}
