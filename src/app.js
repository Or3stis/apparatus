'use strict'

const cytoscape = require('cytoscape')
const path = require('path')

// require global moduless
const keybindings = require('./src/keybindings.js')

// require core modules
const core = require('./src/core/core.js')
const hoverNodeInfo = require('./src/core/hoverNodeInfo.js')
const editNode = require('./src/core/editNode.js')
const totalNodes = require('./src/core/totalNodes.js')
// const nodeInfo = require('./src/core/nodeInfo.js')

// require design modules
const addDgnEdge = require('./src/design/addDgnEdge.js')
const dgn = require('./src/design/design.js')

// require design-state Models
const addDgnStateEdge = require('./src/design-state/addDgnStateEdge.js')
const dgnState = require('./src/design-state/dgnState.js')

// reguire implementation modules
const addImpEdge = require('./src/implementation/addImpEdge.js')
const imp = require('./src/implementation/implementation.js')

// require implementation-state modules
const addImpStateEdge = require('./src/implementation-state/addImpStateEdge.js')
const impState = require('./src/implementation-state/impState.js')

// configuration for the graphs style
const graphStyle = require(`./style/graphStyle.js`)

// require the initial graph file
const graphModel = require(`./graphs/implementation/smartHome.js`)

// setting up the graph container
const cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: graphModel.elements, // loads the elements object of the graph
  style: graphStyle.style
})

// graph layout
cy.layout({
  name: 'cose'
})

let selectedNode = ''
let selectedEdge = ''
let srcNode = ''
let trgNode = ''
let srcNodeCpt = ''
let trgNodeCpt = ''

// initial label render
cy.nodes().addClass('label-nodes')
cy.edges().addClass('label-edges')

// cy.on does stuff when intrecting with the graph

// do stuff when tapping on node
cy.on('tap', 'node', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selectedNode = selection.target[0]
  // nodeInfo(selectedNode) // global module
  selectedNode.addClass('selection')
  srcNode = trgNode // second selection
  trgNode = selectedNode.data().id
  srcNodeCpt = trgNodeCpt // second selection
  trgNodeCpt = selectedNode.data().info.concept
  selectedEdge = '' // clear token
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping on an edge
cy.on('tap', 'edge', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedNode = '' // clear token
  selectedEdge = selection.target[0]
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping the stage
cy.on('tap', selection => {
  // checks if only the stage was clicked
  if (selection.target === cy) {
    // removes previous selections
    cy.elements().removeClass('faded')
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    // clear tokens
    document.getElementById('module-group').selectedIndex = ''
    document.getElementById('selection-id').selectedIndex = ''
    selectedNode = ''
    selectedEdge = ''
    totalNodes(cy) // global module
    editNode.removeElement() // remove the edit node element
  }
})
// right clicking
cy.on('cxttapend', 'node', selection => {
  selectedNode = selection.target[0]
  editNode.formNode(selectedNode) // global module
})
// do stuff when hovering over a node
cy.on('mouseover', 'node', event => {
  hoverNodeInfo(event.target[0]) // global module
})
// do stuff when hovering out of a node
cy.on('mouseout', 'node', event => {
  // hides the hover container
  document.getElementById('container-node-id').style.display = 'none'
})

// create the paths of each phase
const dgnPath = 'design.html'
const dgnStatePath = 'design-state.html'
const impPath = 'implementation.html'
const impStatePath = 'implementation-state.html'

// store the last word of the window path to make it cross plaform
// blame chromium and its Posix paths on windows for this ugliness
const pathLocation = window.location.pathname.split('/').pop()

// here we load the buttons for each phase

// load design phase buttons
if (pathLocation === dgnPath) {
  dgn.addNode(cy)
  // dgn.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  dgn.threatVerify(cy)
  dgn.overview(cy)
  dgn.validate(cy)
  dgn.moduleGroup(cy)
  // add design edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // design module
    cy.edges().addClass('label-edges')
    totalNodes(cy)
  })
  // load design-state buttons
} else if (pathLocation === dgnStatePath) {
  dgnState.addNode(cy)
  // dgnState.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  dgnState.overview(cy)
  dgnState.validate(cy)
  // add generic edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnStateEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // dgn-state module
    cy.edges().addClass('label-edges')
    totalNodes(cy)
  })
  // loads implementation phase buttons
} else if (pathLocation === impPath) {
  imp.addNode(cy)
  // imp.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  imp.overview(cy)
  imp.validate(cy)
  imp.threatVerify(cy)
  imp.vulnVerify(cy)
  imp.findVulnerabilities(cy)
  imp.findPattern(cy)
  imp.moduleGroup(cy)

  // add imp edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // imp module
    cy.edges().addClass('label-edges')
    totalNodes(cy)
  })
  // loads implementation-state buttons
} else if (pathLocation === impStatePath) {
  impState.addNode(cy)
  // impState.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  impState.overview(cy)
  impState.validate(cy)

  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpStateEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // dgn-state module
    cy.edges().addClass('label-edges')
    totalNodes(cy)
  })
}

// declaration of global buttons

// highlights only the selected node class
core.selectionNode(cy)
// cose layout
core.layout(cy)
// enable label buttons
core.labels(cy)
// save graph
core.saveGraph(cy, path)
// load graph - TODO doesn't work properly
core.loadGraph(cy, graphStyle)

// delele selected node
const buttonDelete = document.getElementById('delete')
buttonDelete.addEventListener('click', () => {
  if (selectedNode === '' && selectedEdge !== '') {
    selectedEdge.remove()
  }
  if (selectedEdge === '' && selectedNode !== '') {
    selectedNode.remove()
  }
  totalNodes(cy) // global module
})
// show the neighbors of a tapped node
const buttonNeighbor = document.getElementById('neighbors-button')
buttonNeighbor.addEventListener('click', () => {
  // selectedNode from cy.on tap node function
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')
})
// test function
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  // test code goes here
  dgnState.test(srcNodeCpt, trgNodeCpt)
})

// toggles side panels
const toggleUI = () => {
  const sidebarStatus = document.getElementById('sidebar-id')
  const actionBarStatus = document.getElementById('action-bar-id')
  if (sidebarStatus.style.display === 'block') {
    sidebarStatus.style.display = 'none'
    actionBarStatus.style.display = 'none'
  } else {
    sidebarStatus.style.display = 'block'
    actionBarStatus.style.display = 'block'
  }
}

totalNodes(cy) // global module

// enable keybindings
keybindings(cy, toggleUI) // global module
