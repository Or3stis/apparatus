// here is where it begins
'use strict'

const cytoscape = require('cytoscape')

const nodeInfo = require('./src/nodeInfo.js')
const hoverNodeInfo = require('./src/hoverNodeInfo.js')
// const searchAttribute = require('./src/searchAttribute.js')
const flagNodes = require('./src/flagNodes.js')
const moduleSelection = require('./src/moduleSelection.js')
const nodeSelection = require('./src/nodeSelection.js')
const threatVerification = require('./src/threatVerification.js')
const keyboard = require('./src/keyboard.js')
const addComponent = require('./src/addComponent.js')
const addEdge = require('./src/addEdge.js')
const totalNodes = require('./src/totalNodes.js')
const save = require('./src/save.js')

// reguire implementation functions
const impModuleValidation = require('./src/implementation/impModuleValidation.js')
const vulnVerification = require('./src/implementation/vulnVerification.js')
const findVulns = require('./src/implementation/findVulns.js')
const impOverview = require('./src/implementation/impOverview.js')

// require design functions
const dgnModuleValidation = require('./src/design/dgnModuleValidation.js')
const dgnOverview = require('./src/design/dgnOverview.js')

const config = require('./style/config.js')

// save the path
const path = `${__dirname}`
// require the graph file
const system = require(`${path}/graphs/system.js`)

// graphs style
const graphStyle = require(`${path}/style/graphStyle.js`)

// setting up the graph container
const cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: system.graph,
  style: graphStyle.style
})

// graph layout
cy.layout({
  name: 'cose'
})

let selectedNode = []
let selectedEdge = []
let sourceNode = ''
let targetNode = ''

// when tapping on a node show the neighbors
cy.on('tap', 'node', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  // to show the neighbors
  selectedNode = selection.target[0]
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')

  nodeInfo(selectedNode)
  selectedNode.addClass('selection')
  sourceNode = targetNode // second selection
  targetNode = selectedNode.data().id
  totalNodes(cy)

  // save file
  // save(cy, path)
})
cy.on('tap', 'edge', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedEdge = selection.target[0]
  totalNodes(cy)

  // save file
  // save(cy, path)
})
// when tapping the stage
cy.on('tap', (selection) => {
  if (selection.target === cy) {
    // removes previous selections
    cy.elements().removeClass('faded')
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    document.getElementById('module-group').selectedIndex = ''
    document.getElementById('selection-id').selectedIndex = ''
    totalNodes(cy)
    // save file
    // save(cy, path)
  }
})
// hover over a node
cy.on('mouseover', 'node', (event) => {
  hoverNodeInfo(event.target[0])
})
// hover out of a node
cy.on('mouseout', 'node', (event) => {
  document.getElementById('container-node-id').style.display = 'none'
})

// buttons
// vefiry threats
const buttonThreatVefiry = document.getElementById('threat-verify-button')
buttonThreatVefiry.addEventListener('click', () => {
  threatVerification(cy) // module
})
if (window.location.pathname === `${path}/implementation.html`) {
  // verify vulnerabilities
  const buttonVulnVefiry = document.getElementById('vulnerability-verify-button')
  buttonVulnVefiry.addEventListener('click', () => {
    vulnVerification(cy) // module
  })
  // find vulnerabilities
  const buttonFindVuln = document.getElementById('find-vuln-button')
  buttonFindVuln.addEventListener('click', () => {
    findVulns(cy) // module
  })
}
const buttonModuleValidate = document.getElementById('module-validate-button')
buttonModuleValidate.addEventListener('click', () => {
  if (window.location.pathname === `${path}/implementation.html`) {
    impModuleValidation(cy) // imp module
  } else {
    dgnModuleValidation(cy) // dgn module
  }
})
// flag nodes
const buttonFlag = document.getElementById('flag-button')
buttonFlag.addEventListener('click', () => {
  flagNodes(cy, config.flag) // module
})
const buttonOverview = document.getElementById('overview-button')
buttonOverview.addEventListener('click', () => {
  if (window.location.pathname === `${path}/implementation.html`) {
    impOverview(cy) // imp module
  } else {
    dgnOverview(cy) // dgn module
  }
})
// save graph
const buttonSave = document.getElementById('save-button')
buttonSave.addEventListener('click', () => {
  save(cy, path) // module
})
const buttonDeleteNode = document.getElementById('delete-node')
buttonDeleteNode.addEventListener('click', () => {
  selectedNode.remove()
  totalNodes(cy)
})
const buttonAddEdge = document.getElementById('add-edge')
buttonAddEdge.addEventListener('click', () => {
  addEdge(cy, sourceNode, targetNode) // module
  totalNodes(cy)
})
const buttonDeleteEdge = document.getElementById('delete-edge')
buttonDeleteEdge.addEventListener('click', () => {
  selectedEdge.remove()
  totalNodes(cy)
})
// test function
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  // console.log(cy.filter('node[label = "Device"]'))
  // cy.elements().addClass('faded')
  // cy.filter('node[label = "Device"]').removeClass('faded')
  impOverview(cy)
})

// selections
const moduleGroup = document.getElementById('module-group')
moduleGroup.addEventListener('change', (input) => {
  moduleSelection(input, cy) // module
  // reset selection selection
  // document.getElementById('module-group').selectedIndex = ''
})
// for the filter selection
const select = document.getElementById('selection-id')
select.addEventListener('change', (e) => {
  nodeSelection(cy, e.target.value) // module
  // reset moduleGroup selection
  // document.getElementById('selection-id').selectedIndex = ''
})
// adding component
const add = document.getElementById('add-component-id')
add.addEventListener('change', (e) => {
  addComponent(cy, e.target.value) // module
  // reset moduleGroup selection
  document.getElementById('add-component-id').selectedIndex = ''
  totalNodes(cy)
})

// toggles side divs
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

totalNodes(cy)
// enable keyboard shortcuts
keyboard(cy, toggleUI)
