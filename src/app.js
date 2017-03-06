/* global cytoscape */

// here is where it begins
'use strict'

const nodeInfo = require('./src/nodeInfo.js')
const hoverNodeInfo = require('./src/hoverNodeInfo.js')
const searchAttribute = require('./src/searchAttribute.js')
const flagNodes = require('./src/flagNodes.js')
const moduleSelection = require('./src/moduleSelection.js')
const nodeSelection = require('./src/nodeSelection.js')
const validation = require('./src/validation.js')
const keyboard = require('./src/keyboard.js')
const addComponent = require('./src/addComponent.js')
const save = require('./src/save.js')
// const config = require('./src/config.js')

// require the graph file
// const system = require(`${__dirname}/graphs/system.js`)
const system = require(`${__dirname}/src/savedFile.json`)

// graphs style
const graphStyle = require(`${__dirname}/graphs/graphStyle.js`)

// setting up the graph container
const cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: system.elements,
  style: graphStyle.style
})

// graph layout
cy.layout({
  name: 'cose'
})

// when tapping on a node show the neighbors
cy.on('tap', 'node', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  // to show the neighbors
  const node = selection.cyTarget
  const neighborhood = node.neighborhood().add(node)
  cy.elements().addClass('faded')
  neighborhood.removeClass('faded')

  nodeInfo(node)
  node.addClass('selection')
})
cy.on('tap', 'edge', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  selection.cyTarget.addClass('selection')
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
// validate security
const buttonValidate = document.getElementById('validate-button')
buttonValidate.addEventListener('click', () => {
  validation(cy) // module
})
// flag nodes
const buttonFlag = document.getElementById('flag-button')
buttonFlag.addEventListener('click', () => {
  flagNodes(cy)
})
// save graph
// TODO need to load the graph from the json
// TODO need to fix the file paths
const buttonSave = document.getElementById('save-button')
buttonSave.addEventListener('click', () => {
  save(cy)
})
// test functions
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  searchAttribute(cy, 'laptop')
  // save(cy)
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
  // const titleBarStatus = document.getElementById('title-bar-id')
  // const footerStatus = document.getElementById('footer-id')
  if (sidebarStatus.style.display === 'block') {
    sidebarStatus.style.display = 'none'
    actionBarStatus.style.display = 'none'
    // titleBarStatus.style.display = 'none'
    // document.body.style.background = '#3b4251'
    // footerStatus.style.display = 'none'
  } else {
    sidebarStatus.style.display = 'block'
    actionBarStatus.style.display = 'block'
    // titleBarStatus.style.display = 'block'
    // document.body.style.background = '#2e3440'
    // footerStatus.style.display = 'block'
  }
}

// enable keyboard shortcuts
keyboard(cy, toggleUI)
