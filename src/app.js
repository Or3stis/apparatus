/* global cytoscape */

// here is where it begins
'use strict'

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
const save = require('./src/save.js')

const impModuleValidation = require('./src/implementation/impModuleValidation.js')
const vulnVerification = require('./src/vulnVerification.js')
const dgnModuleValidation = require('./src/design/dgnModuleValidation.js')
const findVulns = require('./src/findVulns.js')

const config = require('./style/config.js')

// save the path
const path = `${__dirname}`
// require the graph file
const system = require(`${path}/graphs/system0.js`)

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
  // to show the neighbors
  selectedNode = selection.cyTarget[0]
  const neighborhood = selectedNode.neighborhood().add(selectedNode)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')

  nodeInfo(selectedNode)
  selectedNode.addClass('selection')
  // console.log(selectedNode.data().id)
  sourceNode = targetNode // second selection
  targetNode = selectedNode.data().id
})
cy.on('tap', 'edge', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  selection.cyTarget.addClass('selection')
  selectedEdge = selection.cyTarget[0]
})
// when tapping the stage
cy.on('tap', (selection) => {
  if (selection.cyTarget === cy) {
    // removes previous selections
    cy.elements().removeClass('faded')
    cy.elements().removeClass('selection')
    document.getElementById('module-group').selectedIndex = ''
    document.getElementById('selection-id').selectedIndex = ''
  }
})
// hover over a node
cy.on('mouseover', 'node', (event) => {
  hoverNodeInfo(event.cyTarget[0])
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
const buttonVulnVefiry = document.getElementById('vulnerability-verify-button')
buttonVulnVefiry.addEventListener('click', () => {
  vulnVerification(cy) // module
})
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
// save graph
const buttonSave = document.getElementById('save-button')
buttonSave.addEventListener('click', () => {
  save(cy, path) // module
})
const buttonDeleteNode = document.getElementById('delete-node')
buttonDeleteNode.addEventListener('click', () => {
  selectedNode.remove()
})
const buttonAddEdge = document.getElementById('add-edge')
buttonAddEdge.addEventListener('click', () => {
  addEdge(cy, sourceNode, targetNode) // module
})
const buttonDeleteEdge = document.getElementById('delete-edge')
buttonDeleteEdge.addEventListener('click', () => {
  selectedEdge.remove()
})
const buttonFindVuln = document.getElementById('find-vuln-button')
buttonFindVuln.addEventListener('click', () => {
  findVulns(cy) // module
})
// test function
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  // findVulns(cy) // module
  // selectedNode.restore()
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

document.getElementById('legend-id').textContent = cy.elements().nodes().length

// enable keyboard shortcuts
keyboard(cy, toggleUI)
