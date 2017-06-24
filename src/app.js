'use strict'

const cytoscape = require('cytoscape')

const nodeInfo = require('./src/nodeInfo.js')
const hoverNodeInfo = require('./src/hoverNodeInfo.js')
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

// require design-state functions
const impStateModuleValidation = require('./src/implementation-state/impStateModuleValidation.js')
const impStateOverview = require('./src/implementation-state/impStateOverview.js')
const addImpStateComponent = require('./src/implementation-state/addImpStateComponent.js')

// save the path
const path = `${__dirname}`
// configuration files
const config = require('./style/config.js')
// graphs style
const graphStyle = require(`${path}/style/graphStyle.js`)
// require the graph file
let system = require(`${path}/graphs/implementation/smartHome.js`)

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

let selectedNode = ''
let selectedEdge = ''
let sourceNode = ''
let targetNode = ''

cy.on('tap', 'node', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selectedNode = selection.target[0]
  // const neighborhood = selectedNode.neighborhood().add(selectedNode)
  // cy.elements().addClass('faded')
  // neighborhood.removeClass('faded')
  nodeInfo(selectedNode)
  selectedNode.addClass('selection')
  sourceNode = targetNode // second selection
  targetNode = selectedNode.data().id
  totalNodes(cy)
})
cy.on('tap', 'edge', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedEdge = selection.target[0]
  totalNodes(cy)
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

// load desing phase buttons
if (window.location.pathname === `${path}/design.html`) {
  const buttonModuleValidate = document.getElementById('module-validate-button')
  buttonModuleValidate.addEventListener('click', () => {
    dgnModuleValidation(cy) // dgn module
  })
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnOverview(cy) // dgn module
  })
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // module
  })
  // add component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addDgnComponent(cy, e.target.value) // dgn module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy)
  })
  // selections
  const moduleGroup = document.getElementById('module-group')
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, cy) // module
    // reset selection selection
    // document.getElementById('module-group').selectedIndex = ''
  })
} else if (window.location.pathname === `${path}/design-state.html`) {
  const buttonModuleValidate = document.getElementById('module-validate-button')
  buttonModuleValidate.addEventListener('click', () => {
    dgnStateModuleValidation(cy) // dgn module
  })
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnStateOverview(cy) // dgn module
  })
  // add component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addDgnStateComponent(cy, e.target.value) // dgn-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy)
  })
} else if (window.location.pathname === `${path}/implementation.html`) {
  const buttonModuleValidate = document.getElementById('module-validate-button')
  buttonModuleValidate.addEventListener('click', () => {
    impModuleValidation(cy) // imp module
  })
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impOverview(cy) // dgn module
  })
  const buttonVulnVefiry = document.getElementById('vuln-verify-button')
  buttonVulnVefiry.addEventListener('click', () => {
    vulnVerification(cy) // module
  })
  // find vulnerabilities
  const buttonFindVuln = document.getElementById('find-vuln-button')
  buttonFindVuln.addEventListener('click', () => {
    findVulns(cy) // module
  })
  // flag nodes
  const buttonFlag = document.getElementById('flag-button')
  buttonFlag.addEventListener('click', () => {
    flagNodes(cy, config.flag) // module
  })
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // module
  })
  // add component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addImpComponent(cy, e.target.value) // imp module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy)
  })
  // selections
  const moduleGroup = document.getElementById('module-group')
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, cy) // module
    // reset selection selection
    // document.getElementById('module-group').selectedIndex = ''
  })
} else if (window.location.pathname === `${path}/implementation-state.html`) {
  const buttonModuleValidate = document.getElementById('module-validate-button')
  buttonModuleValidate.addEventListener('click', () => {
    impStateModuleValidation(cy) // imp-state module
  })
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impStateOverview(cy) // dgn module
  })
  // add component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addImpStateComponent(cy, e.target.value) // imp-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy)
  })
}
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
})

// for the filter selection
const select = document.getElementById('selection-id')
select.addEventListener('change', (e) => {
  nodeSelection(cy, e.target.value) // module
  // reset moduleGroup selection
  // document.getElementById('selection-id').selectedIndex = ''
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
