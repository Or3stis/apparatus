'use strict'

const cytoscape = require('cytoscape')
const path = require('path')

// require global moduless
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

// require design modules
const dgnModelValidation = require('./src/design/dgnModelValidation.js')
const dgnOverview = require('./src/design/dgnOverview.js')
const addDgnComponent = require('./src/design/addDgnComponent.js')

// require design-state Models
const dgnStateModelValidation = require('./src/design-state/dgnStateModelValidation.js')
const dgnStateOverview = require('./src/design-state/dgnStateOverview.js')
const addDgnStateComponent = require('./src/design-state/addDgnStateComponent.js')

// reguire implementation modules
const impModelValidation = require('./src/implementation/impModelValidation.js')
const vulnVerification = require('./src/implementation/vulnVerification.js')
const findVulns = require('./src/implementation/findVulns.js')
const impOverview = require('./src/implementation/impOverview.js')
const addImpComponent = require('./src/implementation/addImpComponent.js')

// require implementation-state modules
const impStateModelValidation = require('./src/implementation-state/impStateModelValidation.js')
const impStateOverview = require('./src/implementation-state/impStateOverview.js')
const addImpStateComponent = require('./src/implementation-state/addImpStateComponent.js')

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
let sourceNode = ''
let targetNode = ''

// cy.on does stuff when intrecting with the graph

// do stuff when tapping on node
cy.on('tap', 'node', (selection) => {
  console.log(selection)
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selectedNode = selection.target[0]
  nodeInfo(selectedNode) // global module
  selectedNode.addClass('selection')
  sourceNode = targetNode // second selection
  targetNode = selectedNode.data().id
  totalNodes(cy) // global module
})
// do stuff when tapping on an edge
cy.on('tap', 'edge', (selection) => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedEdge = selection.target[0]
  totalNodes(cy) // global module
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
    document.getElementById('module-group').selectedIndex = ''
    document.getElementById('selection-id').selectedIndex = ''
    totalNodes(cy) // global module
  }
})
// right clicking
cy.on('cxttapend', 'node', (event) => {
  console.log('right clicking')
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
const dgnPath = path.join(__dirname, 'design.html')
const dgnStatePath = path.join(__dirname, 'design-state.html')
const impPath = path.join(__dirname, 'implementation.html')
const impStatePath = path.join(__dirname, 'implementation-state.html')

// here we load the buttons for each phase

// load design phase buttons
if (window.location.pathname === dgnPath) {
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
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
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
} else if (window.location.pathname === dgnStatePath) {
  // validate model
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnStateModelValidation(cy) // dgn module
  })
  // model overview
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnStateOverview(cy) // dgn module
  })
  // add design-state component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addDgnStateComponent(cy, e.target.value) // dgn-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
  // loads implementation phase buttons
} else if (window.location.pathname === impPath) {
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
  // flag nodes based on specific attributes
  const buttonFlag = document.getElementById('flag-button')
  buttonFlag.addEventListener('click', () => {
    flagNodes(cy) // global module
  })
  // verify threats
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
  // add implementation component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addImpComponent(cy, e.target.value) // imp module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
  // module selections
  const moduleGroup = document.getElementById('module-group')
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, cy) // module
    // reset selection selection
    // document.getElementById('module-group').selectedIndex = ''
  })
  // loads implementation-state buttons
} else if (window.location.pathname === impStatePath) {
  // validate model
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    impStateModelValidation(cy) // imp-state module
  })
  // model overview
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impStateOverview(cy) // imp-state module
  })
  // add implementation-state component
  const add = document.getElementById('add-component-id')
  add.addEventListener('change', (e) => {
    addImpStateComponent(cy, e.target.value) // imp-state module
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
}

// declaration of global buttons

// delele selected node
const buttonDeleteNode = document.getElementById('delete-node')
buttonDeleteNode.addEventListener('click', () => {
  selectedNode.remove()
  totalNodes(cy) // global module
})
const buttonAddEdge = document.getElementById('add-edge')
buttonAddEdge.addEventListener('click', () => {
  addEdge(cy, sourceNode, targetNode) // global module
  totalNodes(cy)
})
const buttonDeleteEdge = document.getElementById('delete-edge')
buttonDeleteEdge.addEventListener('click', () => {
  selectedEdge.remove()
  totalNodes(cy)
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
  const layout = cy.layout({
    name: 'cose',
    // Called on `layoutready`
    ready: function () {},
    // Called on `layoutstop`
    stop: function () {},
    // Whether to animate while running the layout
    animate: true,
    // The layout animates only after this many milliseconds
    // (prevents flashing on fast runs)
    animationThreshold: 250,
    // Number of iterations between consecutive screen positions update
    // (0 -> only updated on the end)
    refresh: 20,
    // Whether to fit the network view after when done
    fit: true,
    // Padding on fit
    padding: 30,
    // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    boundingBox: undefined,
    // Excludes the label when calculating node bounding boxes for the layout algorithm
    nodeDimensionsIncludeLabels: false,
    // Randomize the initial positions of the nodes (true) or use existing positions (false)
    randomize: false,
    // Extra spacing between components in non-compound graphs
    componentSpacing: 100,
    // Node repulsion (non overlapping) multiplier
    nodeRepulsion: function (node) {
      return 400000
    },
    // Node repulsion (overlapping) multiplier
    nodeOverlap: 10,
    // Ideal edge (non nested) length
    idealEdgeLength: function (edge) {
      return 10
    },
    // Divisor to compute edge forces
    edgeElasticity: function (edge) {
      return 100
    },
    // Nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 5,
    // Gravity force (constant)
    gravity: 80,
    // Maximum number of iterations to perform
    numIter: 1000,
    // Initial temperature (maximum node displacement)
    initialTemp: 200,
    // Cooling factor (how the temperature is reduced between consecutive iterations
    coolingFactor: 0.95,
    // Lower temperature threshold (below this point the layout will end)
    minTemp: 1.0,
    // Pass a reference to weaver to use threads for calculations
    weaver: false
  })
  layout.run()
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
