'use strict'

const cytoscape = require('cytoscape')
const path = require('path')

// require global moduless
// const nodeInfo = require('./src/nodeInfo.js')
const hoverNodeInfo = require('./src/hoverNodeInfo.js')
const patterns = require('./src/patterns.js')
const moduleSelection = require('./src/moduleSelection.js')
const nodeSelection = require('./src/nodeSelection.js')
const threatVerification = require('./src/threatVerification.js')
const keybindings = require('./src/keybindings.js')
const totalNodes = require('./src/totalNodes.js')
const save = require('./src/save.js')
const load = require('./src/load.js')
const editNode = require('./src/editNode.js')
const coseLayout = require('./src/coseLayout.js')

// require design modules
const dgnModelValidation = require('./src/design/dgnModelValidation.js')
const dgnOverview = require('./src/design/dgnOverview.js')
const addDgnComponent = require('./src/design/addDgnComponent.js')
const addDgnEdge = require('./src/design/addDgnEdge.js')

// require design-state Models
const dgnStateModelValidation = require('./src/design-state/dgnStateModelValidation.js')
const dgnStateOverview = require('./src/design-state/dgnStateOverview.js')
const addDgnStateComponent = require('./src/design-state/addDgnStateComponent.js')
const addDgnStateEdge = require('./src/design-state/addDgnStateEdge.js')

// reguire implementation modules
const impModelValidation = require('./src/implementation/impModelValidation.js')
const vulnVerification = require('./src/implementation/vulnVerification.js')
const findVulns = require('./src/implementation/findVulns.js')
const impOverview = require('./src/implementation/impOverview.js')
const addImpComponent = require('./src/implementation/addImpComponent.js')
const addImpEdge = require('./src/implementation/addImpEdge.js')

// // require implementation-state modules
const impState = require('./src/implementation-state/impState.js')

// configuration for the graphs style
const graphStyle = require(`./style/graphStyle.js`)
// require the initial graph file
let graphModel = require(`./graphs/implementation/smartHome.js`)

// setting up the graph container
let cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  // this loads the elements object of the loaded graph
  elements: graphModel.elements,
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
cy.on('tap', 'node', (selection) => {
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
cy.on('tap', 'edge', (selection) => {
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
cy.on('tap', (selection) => {
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
cy.on('cxttapend', 'node', (selection) => {
  selectedNode = selection.target[0]
  editNode.formNode(selectedNode) // global module
})
// do stuff when hovering over a node
cy.on('mouseover', 'node', (event) => {
  hoverNodeInfo(event.target[0]) // global module
})
// do stuff when hovering out of a node
cy.on('mouseout', 'node', (event) => {
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
const pathLocation = (window.location.pathname).split('/').pop()

// here we load the buttons for each phase

// load design phase buttons
if (pathLocation === dgnPath) {
  // add design edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // design module
    totalNodes(cy)
  })
  // validate the model
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnModelValidation(cy) // dgn module
  })
  // model overiew
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnOverview(cy) // dgn module
  })
  // verify threat
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
  // add design phase component
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', (e) => {
    addDgnComponent(cy, e.target.value) // dgn module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
  // module selection
  const moduleGroup = document.getElementById('module-group')
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, cy) // global module
    // reset selection selection
    // document.getElementById('module-group').selectedIndex = ''
  })
  // load design-state buttons
} else if (pathLocation === dgnStatePath) {
  // add generic edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnStateEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // dgn-state module
    totalNodes(cy)
  })
  // validate model
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnStateModelValidation(cy) // dgn-state module
  })
  // model overview
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnStateOverview(cy) // dgn-state module
  })
  // add design-state component
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', (e) => {
    addDgnStateComponent(cy, e.target.value) // dgn-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // dgn-state module
  })
  // loads implementation phase buttons
} else if (pathLocation === impPath) {
  // add generic edges
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) // imp module
    totalNodes(cy)
  })
  // validate model
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    impModelValidation(cy) // imp module
  })
  // model overview
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impOverview(cy) // imp module
  })
  // verify vulnerabilities
  const buttonVulnVefiry = document.getElementById('vuln-verify-button')
  buttonVulnVefiry.addEventListener('click', () => {
    vulnVerification(cy) // imp module
  })
  // find vulnerabilities
  const buttonFindVuln = document.getElementById('find-vuln-button')
  buttonFindVuln.addEventListener('click', () => {
    findVulns(cy) // imp module
  })
  // locate patterns based on specific attributes
  const buttonPattern = document.getElementById('pattern-button')
  buttonPattern.addEventListener('click', () => {
    patterns(cy) // global module
  })
  // verify threats
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
  // add implementation component
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', (e) => {
    addImpComponent(cy, e.target.value) // imp module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
  // module selections
  const moduleGroup = document.getElementById('module-group')
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, cy) // global module
    // reset selection selection
    // document.getElementById('module-group').selectedIndex = ''
  })
  // loads implementation-state buttons
} else if (pathLocation === impStatePath) {
  impState.addNode(cy)
  impState.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  impState.overview(cy)
  impState.validate(cy)
}

// declaration of global buttons

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
// cose layout, source: http://js.cytoscape.org/#layouts/cose
const buttonLayout = document.getElementById('layout-button')
buttonLayout.addEventListener('click', () => {
  coseLayout(cy)
})
// save graph
const buttonSave = document.getElementById('save-button')
buttonSave.addEventListener('click', () => {
  save(cy, path) // global module
})
// load graph
const buttonLoad = document.getElementById('load-button')
buttonLoad.addEventListener('click', () => {
  load(cy, graphModel, cytoscape, graphStyle) // global module
})
const hideLabelsButton = document.getElementById('hide-label')
hideLabelsButton.addEventListener('click', () => {
  cy.nodes().removeClass('label-nodes')
  cy.edges().removeClass('label-edges')
})
const showLabelsButton = document.getElementById('show-label')
showLabelsButton.addEventListener('click', () => {
  cy.nodes().addClass('label-nodes')
  cy.edges().addClass('label-edges')
})
const showLabelNodeButton = document.getElementById('show-label-node')
showLabelNodeButton.addEventListener('click', () => {
  cy.nodes().addClass('label-nodes')
})
const showLabelEdgeButton = document.getElementById('show-label-edge')
showLabelEdgeButton.addEventListener('click', () => {
  cy.edges().addClass('label-edges')
})
// test function
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  // test code goes here
})

// highlights only the selected node class
const select = document.getElementById('selection-id')
select.addEventListener('change', (e) => {
  nodeSelection(cy, e.target.value) // global module
  // reset moduleGroup selection
  // document.getElementById('selection-id').selectedIndex = ''
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
