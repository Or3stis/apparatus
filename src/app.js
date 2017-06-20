// here is where it begins
'use strict'

const cytoscape = require('cytoscape')

// for the prompt
// const {dialog} = require('electron').remote

const nodeInfo = require('./src/nodeInfo.js')
const hoverNodeInfo = require('./src/hoverNodeInfo.js')
// const searchAttribute = require('./src/searchAttribute.js')
const flagNodes = require('./src/flagNodes.js')
const moduleSelection = require('./src/moduleSelection.js')
const nodeSelection = require('./src/nodeSelection.js')
const threatVerification = require('./src/threatVerification.js')
const keybindings = require('./src/keybindings.js')
const addEdge = require('./src/addEdge.js')
const totalNodes = require('./src/totalNodes.js')
const save = require('./src/save.js')
const load = require('./src/load.js')

// reguire implementation functions
const impModuleValidation = require('./src/implementation/impModuleValidation.js')
const vulnVerification = require('./src/implementation/vulnVerification.js')
const findVulns = require('./src/implementation/findVulns.js')
const impOverview = require('./src/implementation/impOverview.js')
const addImpComponent = require('./src/implementation/addImpComponent.js')

// require design functions
const dgnModuleValidation = require('./src/design/dgnModuleValidation.js')
const dgnOverview = require('./src/design/dgnOverview.js')
const addDgnComponent = require('./src/design/addDgnComponent.js')

// require design-state functions
const dgnStateModuleValidation = require('./src/design-state/dgnStateModuleValidation.js')
const dgnStateOverview = require('./src/design-state/dgnStateOverview.js')
const addDgnStateComponent = require('./src/design-state/addDgnStateComponent.js')

const config = require('./style/config.js')

// save the path
const path = `${__dirname}`
// require the graph file
let system = require(`${path}/graphs/implementation/smartHome.js`)

// graphs style
const graphStyle = require(`${path}/style/graphStyle.js`)

// setting up the graph container
let cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: system.elements,
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
  // // to show the neighbors
  selectedNode = selection.target[0]
  // const neighborhood = selectedNode.neighborhood().add(selectedNode)
  // cy.elements().addClass('faded')
  // neighborhood.removeClass('faded')

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
  } else if (window.location.pathname === `${path}/design.html`) {
    dgnModuleValidation(cy) // dgn module
  } else if (window.location.pathname === `${path}/design-state.html`) {
    dgnStateModuleValidation(cy) // dgn-state module
  }
})
const buttonOverview = document.getElementById('overview-button')
buttonOverview.addEventListener('click', () => {
  if (window.location.pathname === `${path}/implementation.html`) {
    impOverview(cy) // imp module
  } else if (window.location.pathname === `${path}/design.html`) {
    dgnOverview(cy) // dgn module
  } else if (window.location.pathname === `${path}/design-state.html`) {
    dgnStateOverview(cy) // dgn-state module
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
// load graph
const buttonLoad = document.getElementById('load-button')
buttonLoad.addEventListener('click', () => {
  load(cy, system, cytoscape, graphStyle) // module
})
// delele selected node
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
const buttonThreatVefiry = document.getElementById('threat-verify-button')
buttonThreatVefiry.addEventListener('click', () => {
  threatVerification(cy) // module
})
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
  if (window.location.pathname === `${path}/implementation.html`) {
    addImpComponent(cy, e.target.value) // imp module
  } else if (window.location.pathname === `${path}/design.html`) {
    addDgnComponent(cy, e.target.value) // dgn module
  } else if (window.location.pathname === `${path}/design-state.html`) {
    addDgnStateComponent(cy, e.target.value) // dgn-state module
  }
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
keybindings(cy, toggleUI)
