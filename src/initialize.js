// initializes the application
// and links it with the GUI

'use strict'

// require keybindings
const keybindings = require('../src/keybindings.js')

// require core modules
// const nodeInfo = require('./src/core/nodeInfo.js')
const coreButtons = require('../src/core/coreButtons.js')
const printTotalNodes = require('../src/core/printTotalNodes.js')
const hoverNodeInfo = require('../src/core/hoverNodeInfo.js')
const editMenu = require('../src/core/editMenu.js')

// require helper functions
const printChat = require('../src/helpers/printChat.js')
const rmElement = require('../src/helpers/rmElement.js')

// require design modules
const dgn = require('../src/design/design.js')

// require design-state Models
const dgnState = require('../src/design-state/dgnState.js')

// reguire implementation modules
const imp = require('../src/implementation/implementation.js')

// require implementation-state modules
const impState = require('../src/implementation-state/impState.js')

module.exports = function initialize (cy, phase) {
  // initial label render
  cy.nodes().addClass('label-nodes')
  cy.edges().addClass('label-edges')

  // global variables, used in cy.on
  let selectedNode = {}
  let oldSelectedNode = {}
  let selectedEdge = {}
  let srcNode = {}
  let trgNode = {}
  // initialize export variables to prevent undefined errors
  selectedNode.out = {}
  oldSelectedNode.out = {}
  selectedEdge.out = {}
  srcNode.out = {}
  trgNode.out = {}

  // counter variable to create unique sequential node ids in addComponents.js
  const initialCount = cy.nodes().length

  // cy.on does stuff when intrecting with the graph
  // actions when tapping on node
  cy.on('tap', 'node', selection => {
    // removes previous selections
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    cy.nodes().removeClass('old-selection')

    oldSelectedNode.out = selectedNode.out
    selectedNode.out = selection.target[0]
    selectedNode.out.addClass('selection')

    // adds the old-selection class to the previous selection
    if (Object.keys(oldSelectedNode.out).length !== 0) {
      oldSelectedNode.out.addClass('old-selection')
    }

    srcNode.out = trgNode.out // second selection
    trgNode.out = selectedNode.out.data()

    selectedEdge.out = {} // clear token

    rmElement('info-nodes-id', 'form-id') // remove the edit node element
    rmElement('window-id', 'nodeMenu-id') // remove node menu element
    rmElement('window-id', 'stageMenu-id') // remove stage menu element
  })
  // actions when tapping on an edge
  cy.on('tap', 'edge', selection => {
    // removes previous selections
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    cy.nodes().removeClass('old-selection')
    selection.target.addClass('selection')

    selectedNode.out = {} // clear token
    oldSelectedNode.out = {} // clear token

    selectedEdge.out = selection.target[0]

    rmElement('info-nodes-id', 'form-id') // remove the edit node element
    rmElement('window-id', 'nodeMenu-id') // remove node menu element
    rmElement('window-id', 'stageMenu-id') // remove stage menu element
  })
  // actions when tapping the stage
  cy.on('tap', selection => {
    // checks if only the stage was clicked
    if (selection.target === cy) {
      // removes previous selections
      cy.elements().removeClass('faded')
      cy.elements().removeClass('selection')
      cy.elements().removeClass('attention')
      cy.elements().removeClass('protect')
      cy.nodes().removeClass('old-selection')

      // clear tokens
      selectedNode.out = {}
      oldSelectedNode.out = {}
      selectedEdge.out = {}

      rmElement('info-nodes-id', 'form-id') // remove the edit node element
      rmElement('window-id', 'nodeMenu-id') // remove node menu element
      rmElement('window-id', 'stageMenu-id') // remove stage menu element
    }
  })
  // right clicking
  cy.on('cxttapend', 'node', selection => {
    selectedNode.out = selection.target[0]
    editMenu.nodeMenu(cy, selection, selectedNode.out)

    // clear tokens
    selectedNode.out = {}
    oldSelectedNode.out = {}
    selectedEdge.out = {}

    rmElement('window-id', 'stageMenu-id') // remove stage menu element
  })
  // right clicking on stage
  cy.on('cxttapend', selection => {
    // checks if only the stage was clicked
    if (selection.target === cy) {
      // removes the stage menu if it exists
      rmElement('window-id', 'stageMenu-id')
      editMenu.stageMenu(cy, selection)
    }
  })
  // actions when hovering over a node
  cy.on('mouseover', 'node', event => {
    hoverNodeInfo(event.target[0]) // global module
  })
  // actions when hovering out of a node
  cy.on('mouseout', 'node', event => {
    // hides the hover container
    document.getElementById('container-node-id').style.display = 'none'
  })

  // load the buttons for each phase

  // load design phase buttons
  if (phase === 'design') {
    dgn.addNode(cy, initialCount)
    dgn.threatVerify(cy)
    dgn.moduleGroup(cy)
    dgn.addEdge(cy, srcNode, trgNode)
    coreButtons.findPattern(cy)
    // load design-state buttons
  } else if (phase === 'design-state') {
    dgnState.addNode(cy, initialCount)
    dgnState.addEdge(cy, srcNode, trgNode)
    // loads implementation phase buttons
  } else if (phase === 'implementation') {
    imp.addNode(cy, initialCount)
    imp.threatVerify(cy)
    imp.vulnVerify(cy)
    imp.findVulnerabilities(cy)
    imp.moduleGroup(cy)
    imp.addEdge(cy, srcNode, trgNode)
    coreButtons.findPattern(cy)
    // loads implementation-state buttons
  } else if (phase === 'implementation-state') {
    impState.addNode(cy, initialCount)
    impState.addEdge(cy, srcNode, trgNode)
  }

  // declaration of global buttons

  coreButtons.selectionNode(cy) // highlights only the selected node class

  coreButtons.graphLayout(cy) // applies the selected layout

  coreButtons.labels(cy) // enable label buttons

  coreButtons.saveGraph(cy) // save graph

  // phase model validation
  coreButtons.validate(cy, phase)

  coreButtons.overview(cy, phase) // phases model overview

  coreButtons.showNeighbor(cy, selectedNode) // show the neighbors of a tapped node

  coreButtons.deleteButton(cy, selectedNode, selectedEdge) // delete elements

  // test function
  const buttonTest = document.getElementById('test-button')
  buttonTest.addEventListener('click', () => {
    // test code goes here
    printChat('button for code testing')
  })

  printTotalNodes(cy) // initial node count

  // enable keybindings
  keybindings(cy, selectedNode, selectedEdge, srcNode, trgNode, phase)
}
