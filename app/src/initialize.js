// initializes the application and links it with the GUI
const ipc = require('electron').ipcRenderer

// require core modules
const printTotalNodes = require('./core/printTotalNodes.js')
const hoverNodeInfo = require('./core/hoverNodeInfo.js')
const editMenu = require('./core/editMenu.js')
const editEdge = require('./core/editEdge.js')

// require helper functions
const rmElement = require('./helpers/rmElement.js')
const bubbleTxt = require('./helpers/bubbleTxt.js')

// require buttons and keybindings
const buttons = require('./buttons/buttons.js')
const keybindings = require('./keybindings.js')

/**
 * initializes the application
 *
 * @param {Object} cy cytoscape instance
 * @param {string} phase engineering analysis phase
 */
module.exports = function initialize (cy, phase) {
  // initial label render
  cy.nodes().addClass('label-nodes')
  cy.edges().addClass('label-edges')

  // global variables, used in cy.on
  // initialize export variables to prevent undefined errors
  let selectedNode = {
    out: {}
  }
  let oldSelectedNode = {
    out: {}
  }
  let selectedEdge = {
    out: {}
  }
  let srcNode = {
    out: {}
  }
  let trgNode = {
    out: {}
  }

  // stores the initial state of the nodes in the graph
  const graphNodes = cy.nodes()
  // counter variable to create unique sequential node ids in addComponents.js
  let nodeCounterID = ''
  cy.nodes().map(node => {
    nodeCounterID = node.data().id
  })
  // turn the counter into an number and remove the 'n'
  const nodeCounter = Number(nodeCounterID.replace('n', ''))

  // cy.on performs actions on interactions with the graph
  // actions when tapping on node
  cy.on('tap', 'node', selection => {
    // removes previous selections classes
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
    trgNode.out = selectedNode.out.data() // first selection

    selectedEdge.out = {} // clear token

    printTotalNodes(cy) // show number of nodes

    rmElement('message-area-id', 'form-id') // remove the edit node element
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

    // clear tokens
    selectedNode.out = {}
    oldSelectedNode.out = {}

    selectedEdge.out = selection.target[0]

    printTotalNodes(cy) // show number of nodes

    rmElement('message-area-id', 'form-id') // remove the edit node element
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

      printTotalNodes(cy) // show number of nodes

      rmElement('message-area-id', 'form-id') // remove the edit node element
      rmElement('window-id', 'nodeMenu-id') // remove node menu element
      rmElement('window-id', 'stageMenu-id') // remove stage menu element
    }
  })
  // right clicking on node
  cy.on('cxttap', 'node', selection => {
    selectedNode.out = selection.target[0]
    editMenu.nodeMenu(cy, selection, selectedNode.out)

    // clear tokens
    selectedNode.out = {}
    oldSelectedNode.out = {}
    selectedEdge.out = {}

    rmElement('window-id', 'stageMenu-id') // remove stage menu element
  })
  // right click on edge to edit
  // only available in state diagrams
  if (phase === 'state') {
    cy.on('cxttap', 'edge', selection => {
      editEdge(selection.target[0])
    })
  }
  // right clicking on stage
  cy.on('cxttap', selection => {
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

  // declaration of global buttons
  buttons(
    cy,
    selectedNode,
    selectedEdge,
    srcNode,
    trgNode,
    nodeCounter,
    phase,
    graphNodes
  )
  // enable keybindings
  keybindings(
    cy,
    selectedNode,
    selectedEdge,
    srcNode,
    trgNode,
    phase,
    graphNodes
  )

  // initial node count
  printTotalNodes(cy)

  // listening for changes in the app settings
  ipc.on('change-settings', (event, message) => {
    if (message === 'restore' || message === 'save') {
      bubbleTxt('app refresh is required for the changes to take effect')
    }
  })
}
