// binds functions to buttons in the UI
const settings = require('../settings/userSettings.js')

const nodeSelection = require('./core/nodeSelection.js')
const layout = require('./core/layout.js')
const moduleSelection = require('./core/moduleSelection.js')
const threatVerification = require('./core/threatVerification.js')
const deleteRestoreConcepts = require('./core/deleteRestoreConcepts.js')
const patterns = require('./core/patterns.js')
const printTotalNodes = require('./core/printTotalNodes.js')
const expose = require('./core/expose.js')
const labels = require('./core/labels.js')

const findVulnerabilities = require('./imp/findVulnerabilities.js')
const vulnerabilityVerification = require('./imp/vulnerabilityVerification.js')

const save = require('./helpers/save.js')
const watcher = require('./helpers/watcher.js')
const theme = require('./helpers/theme.js')

const buttonHelpers = require('./buttonHelpers.js')

const transformDgn2Imp = require('./transition/dgn2Imp.js')
const transformImp2Dgn = require('./transition/imp2Dgn.js')
/**
 * binds functions to buttons in the UI
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} selectedNode selected node
 * @param {Object} selectedEdge selected edge
 * @param {Object} srcNode source node
 * @param {Object} trgNode target node
 * @param {number} nodeCounter id counter of nodes
 * @param {string} phase engineering analysis phase
 * @param {Object} graphNodes initial state of the graph
 */
module.exports = function buttons (
  cy,
  selectedNode,
  selectedEdge,
  srcNode,
  trgNode,
  nodeCounter,
  phase,
  graphNodes
) {
  // adds nodes specific to each phase
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', event => {
    nodeCounter += 1 // used for the id of the node
    buttonHelpers.addComponents(cy, event, nodeCounter, phase)
    cy.nodes().addClass('label-nodes')
    printTotalNodes(cy)

    // watch for changes in the nodes of the graph
    watcher.nodes(graphNodes, cy)
  })

  // add edges specific to each edge
  const btnAddEdge = document.getElementById('add-edge')
  btnAddEdge.addEventListener('click', () => {
    buttonHelpers.addEdge(cy, srcNode.out, trgNode.out, phase)
    cy.edges().addClass('label-edges')
  })

  // highlights only the selected node class
  const select = document.getElementById('selection-id')
  select.addEventListener('click', e => nodeSelection(cy, e.target.textContent))

  // binds the delete Button
  const btnDelete = document.getElementById('delete')
  btnDelete.addEventListener('click', () => {
    deleteRestoreConcepts.deleteConcept(cy, selectedNode.out, selectedEdge.out)

    // watch for changes in the nodes of the graph
    watcher.nodes(graphNodes, cy)
  })

  // applies the selected layout to the graph, uses the layout.js module
  const btnLayout = document.getElementById('layout-btn')
  btnLayout.addEventListener('click', e => {
    layout(cy, e.target.textContent)
  })

  // binds the model overview button
  const btnExpose = document.getElementById('expose-btn')
  btnExpose.addEventListener('click', () => {
    expose(cy)
  })

  // find patterns using the findPattern.js module
  const btnPattern = document.getElementById('pattern-btn')
  btnPattern.addEventListener('click', () => patterns(cy))

  // save the graph using the save.js module
  const btnSave = document.getElementById('save-btn')
  btnSave.addEventListener('click', () => {
    save(cy)
  })
  // navigates the user to the home UI
  const btnHome = document.getElementById('home-btn')
  btnHome.addEventListener('click', () => {
    watcher.closeNotification(cy)
  })
  // change the labels on the elements of the graph
  const labelsBtn = document.getElementById('labels-btn')
  labelsBtn.addEventListener('click', e => {
    labels(cy, e.target.textContent)
  })
  // toggles the theme
  const bntToggle = document.getElementById('theme-btn')
  bntToggle.addEventListener('click', () => {
    if (settings.colorTheme === 'dark') {
      theme.setThemeGraph(cy, 'light')
      settings.colorTheme = 'light'
    } else {
      theme.setThemeGraph(cy, 'dark')
      settings.colorTheme = 'dark'
    }
  })

  const totalNodes = document.getElementById('legend-id')
  totalNodes.addEventListener('mouseover', event => {
    buttonHelpers.overviewHelper(cy, phase)
  })
  totalNodes.addEventListener('mouseout', event => {
    document.getElementById('container-node-id').style.display = 'none'
  })

  // buttons bound to each phase
  if (phase === 'design') {
    // verify threats
    const btnThreatVer = document.getElementById('threat-ver-btn')
    btnThreatVer.addEventListener('click', () => {
      threatVerification(cy)
    })

    // model transformation
    const btnTransform = document.getElementById('transform-btn')
    btnTransform.addEventListener('click', () => {
      transformDgn2Imp(cy, nodeCounter)
    })

    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent)
    })

    // phases model validation button
    const btnModelVal = document.getElementById('model-val-btn')
    btnModelVal.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })
  } else if (phase === 'implementation') {
    // verify threats
    const btnThreatVerify = document.getElementById('threat-ver-btn')
    btnThreatVerify.addEventListener('click', () => {
      threatVerification(cy)
    })

    // model transformation
    const btnTransform = document.getElementById('transform-btn')
    btnTransform.addEventListener('click', () => {
      transformImp2Dgn(cy)
    })

    // verify vulnerabilities
    const btnVulnerabilityVerification = document.getElementById('vuln-ver-btn')
    btnVulnerabilityVerification.addEventListener('click', () => {
      vulnerabilityVerification(cy)
    })

    // find vulnerabilities
    const btnFindVulnerabilities = document.getElementById('find-vuln-btn')
    btnFindVulnerabilities.addEventListener('click', () => {
      findVulnerabilities(cy)
    })

    // phases model validation button
    const btnModelVal = document.getElementById('model-val-btn')
    btnModelVal.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })

    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent)
    })
  }
}
