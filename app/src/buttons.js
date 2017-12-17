// core modules, shared between all phases

const nodeSelection = require('./core/nodeSelection.js')
const layout = require('./core/layout.js')
const moduleSelection = require('./core/moduleSelection.js')
const threatVerification = require('./core/threatVerification.js')
const deleteRestoreConcepts = require('./core/deleteRestoreConcepts.js')
const patterns = require('./core/patterns.js')
const printTotalNodes = require('./core/printTotalNodes.js')
const expose = require('./core/expose.js')

const findVulns = require('./imp/findVulns.js')
const vulnVerification = require('./imp/vulnVerification.js')

const save = require('./helpers/save.js')
const watcher = require('./helpers/watcher.js')

const buttonHelpers = require('./buttonHelpers.js')

const transformDgn2Imp = require('./transformation/dgn2Imp.js')
const transformImp2Dgn = require('./transformation/imp2Dgn.js')

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

  // bind the delete Button
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
  const btnSave = document.getElementById('save-button')
  btnSave.addEventListener('click', () => {
    save(cy)
  })
  // navigates the user to the index.js
  const btnHome = document.getElementById('home-button-id')
  btnHome.addEventListener('click', () => {
    watcher.closeNotification(cy)
  })

  const totalNodes = document.getElementById('legend-id')
  totalNodes.addEventListener('mouseover', event => {
    buttonHelpers.overviewHelper(cy, phase)
  })
  totalNodes.addEventListener('mouseout', event => {
    document.getElementById('container-node-id').style.display = 'none'
  })

  // loads a graph
  // const loadGraph = (cy) => {
  //   const buttonLoad = document.getElementById('load-button')
  //   buttonLoad.addEventListener('click', () => {
  //     load(cy)
  //   })

  // bind label buttons
  const hideLabelsBtn = document.getElementById('hide-label')
  hideLabelsBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.edges().removeClass('label-edges')
  })
  const showLabelsEdgeBtn = document.getElementById('show-label-edge')
  showLabelsEdgeBtn.addEventListener('click', () => {
    cy.edges().addClass('label-edges')
  })
  const showLabelNodeBtn = document.getElementById('show-label-node')
  showLabelNodeBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-nodes')
  })
  const showIdNodeBtn = document.getElementById('show-node-id')
  showIdNodeBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-id')
  })
  const showDiscNodeBtn = document.getElementById('show-node-disc')
  showDiscNodeBtn.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().addClass('label-dsc')
  })

  // buttons specific to each phase
  if (phase === 'design') {
    // verify threats
    const btnThreatVer = document.getElementById('threat-ver-btn')
    btnThreatVer.addEventListener('click', () => {
      threatVerification(cy) // core module
    })
    // model transformation
    const btnTransform = document.getElementById('transform-button')
    btnTransform.addEventListener('click', () => {
      transformDgn2Imp(cy, nodeCounter)
    })
    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // global module
    })
    // phases model validation button
    const btnModelVal = document.getElementById('model-val-btn')
    btnModelVal.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })
  } else if (phase === 'implementation') {
    // verify threats
    const btnThreatVer = document.getElementById('threat-ver-btn')
    btnThreatVer.addEventListener('click', () => {
      threatVerification(cy) // core module
    })
    // model transformation
    const btnTransform = document.getElementById('transform-button')
    btnTransform.addEventListener('click', () => {
      transformImp2Dgn(cy)
    })
    // verify vulnerabilities
    const btnVulnVer = document.getElementById('vuln-verify-button')
    btnVulnVer.addEventListener('click', () => {
      vulnVerification(cy)
    })
    // find vulnerabilities
    const btnFindVuln = document.getElementById('find-vuln-button')
    btnFindVuln.addEventListener('click', () => {
      findVulns(cy)
    })
    // phases model validation button
    const btnModelVal = document.getElementById('model-val-btn')
    btnModelVal.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })
    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // core module
    })
  }
}
