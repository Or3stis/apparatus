// initializes the application
// and links it with the GUI

'use strict'

// require keybindings
const keybindings = require('../src/keybindings.js')

// require core modules
// const nodeInfo = require('./src/core/nodeInfo.js')
const core = require('../src/core/core.js')
const hoverNodeInfo = require('../src/core/hoverNodeInfo.js')
const totalNodes = require('../src/core/totalNodes.js')
const menu = require('../src/core/menu.js')

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

    totalNodes(cy) // global module

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

    totalNodes(cy) // global module

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

      totalNodes(cy) // global module

      rmElement('info-nodes-id', 'form-id') // remove the edit node element
      rmElement('window-id', 'nodeMenu-id') // remove node menu element
      rmElement('window-id', 'stageMenu-id') // remove stage menu element
    }
  })
  // right clicking
  cy.on('cxttapend', 'node', selection => {
    selectedNode.out = selection.target[0]
    menu.nodeMenu(cy, selection, selectedNode.out)

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
      menu.stageMenu(cy, selection)
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
    dgn.overview(cy)
    dgn.validate(cy)
    dgn.moduleGroup(cy)
    dgn.addEdge(cy, srcNode, trgNode)
    core.findPattern(cy)
    // load design-state buttons
  } else if (phase === 'design-state') {
    dgnState.addNode(cy, initialCount)
    dgnState.overview(cy)
    dgnState.validate(cy)
    dgnState.addEdge(cy, srcNode, trgNode)
    // loads implementation phase buttons
  } else if (phase === 'implementation') {
    imp.addNode(cy, initialCount)
    imp.overview(cy)
    imp.validate(cy)
    imp.threatVerify(cy)
    imp.vulnVerify(cy)
    imp.findVulnerabilities(cy)
    imp.moduleGroup(cy)
    imp.addEdge(cy, srcNode, trgNode)
    core.findPattern(cy)
    // loads implementation-state buttons
  } else if (phase === 'implementation-state') {
    impState.addNode(cy, initialCount)
    impState.overview(cy)
    impState.validate(cy)
    impState.addEdge(cy, srcNode, trgNode)
  }

  // declaration of global buttons

  core.selectionNode(cy) // highlights only the selected node class

  core.graphLayout(cy) // applies the selected layout

  core.labels(cy) // enable label buttons

  core.saveGraph(cy) // save graph
  // load graph - TODO doesn't work properly
  // core.loadGraph(cy)

  core.showNeighbor(cy, selectedNode) // show the neighbors of a tapped node

  core.deleteButton(cy, selectedNode, selectedEdge) // delete elements

  totalNodes(cy) // initial node count

  // enable keybindings
  keybindings(cy, selectedNode, selectedEdge, phase)

  // test function
  const buttonTest = document.getElementById('test-button')
  buttonTest.addEventListener('click', () => {
    // test code goes here
    printChat('test function\nused for debugging')
  })
}

// toggles side panels
// const toggleUI = () => {
//   const sidebarStatus = document.getElementById('sidebar-id')
//   const actionBarStatus = document.getElementById('action-bar-id')
//   if (sidebarStatus.style.display === 'block') {
//     sidebarStatus.style.display = 'none'
//     actionBarStatus.style.display = 'none'
//   } else {
//     sidebarStatus.style.display = 'block'
//     actionBarStatus.style.display = 'block'
//   }
// }
