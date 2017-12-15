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
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    buttonHelpers.addEdge(cy, srcNode.out, trgNode.out, phase)
    cy.edges().addClass('label-edges')
  })

  // highlights only the selected node class
  const select = document.getElementById('selection-id')
  select.addEventListener('click', e => nodeSelection(cy, e.target.textContent))

  // bind the delete Button
  const buttonDelete = document.getElementById('delete')
  buttonDelete.addEventListener('click', () => {
    deleteRestoreConcepts.deleteConcept(cy, selectedNode.out, selectedEdge.out)

    // watch for changes in the nodes of the graph
    watcher.nodes(graphNodes, cy)
  })

  // applies the selected layout to the graph, uses the layout.js module
  const buttonLayout = document.getElementById('layout-btn')
  buttonLayout.addEventListener('click', e => {
    layout(cy, e.target.textContent)
  })

  // binds the model overview button
  const exposeButton = document.getElementById('expose-button')
  exposeButton.addEventListener('click', () => {
    expose(cy)
  })

  // find patterns using the findPattern.js module
  const buttonPattern = document.getElementById('pattern-button')
  buttonPattern.addEventListener('click', () => patterns(cy))

  // save the graph using the save.js module
  const buttonSave = document.getElementById('save-button')
  buttonSave.addEventListener('click', () => {
    save(cy)
  })
  // navigates the user to the index.js
  const buttonHome = document.getElementById('home-button-id')
  buttonHome.addEventListener('click', () => {
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
  const hideLabelsButton = document.getElementById('hide-label')
  hideLabelsButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.edges().removeClass('label-edges')
  })
  const showLabelsEdgeButton = document.getElementById('show-label-edge')
  showLabelsEdgeButton.addEventListener('click', () => {
    cy.edges().addClass('label-edges')
  })
  const showLabelNodeButton = document.getElementById('show-label-node')
  showLabelNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-id')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-nodes')
  })
  const showIdNodeButton = document.getElementById('show-node-id')
  showIdNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-dsc')
    cy.nodes().addClass('label-id')
  })
  const showDiscNodeButton = document.getElementById('show-node-disc')
  showDiscNodeButton.addEventListener('click', () => {
    cy.nodes().removeClass('label-nodes')
    cy.nodes().removeClass('label-id')
    cy.nodes().addClass('label-dsc')
  })

  // buttons specific to each phase
  if (phase === 'design') {
    // verify threats
    const buttonThreatVefiry = document.getElementById('threat-verify-button')
    buttonThreatVefiry.addEventListener('click', () => {
      threatVerification(cy) // core module
    })
    // model transformation
    const buttonTransform = document.getElementById('transform-button')
    buttonTransform.addEventListener('click', () => {
      transformDgn2Imp(cy, nodeCounter)
    })
    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // global module
    })
    // phases model validation button
    const buttonModelValidate = document.getElementById('model-validate-button')
    buttonModelValidate.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })
  } else if (phase === 'implementation') {
    // verify threats
    const buttonThreatVefiry = document.getElementById('threat-verify-button')
    buttonThreatVefiry.addEventListener('click', () => {
      threatVerification(cy) // core module
    })
    // model transformation
    const buttonTransform = document.getElementById('transform-button')
    buttonTransform.addEventListener('click', () => {
      transformImp2Dgn(cy)
    })
    // verify vulnerabilities
    const buttonVulnVefiry = document.getElementById('vuln-verify-button')
    buttonVulnVefiry.addEventListener('click', () => {
      vulnVerification(cy)
    })
    // find vulnerabilities
    const buttonFindVuln = document.getElementById('find-vuln-button')
    buttonFindVuln.addEventListener('click', () => {
      findVulns(cy)
    })
    // phases model validation button
    const buttonModelValidate = document.getElementById('model-validate-button')
    buttonModelValidate.addEventListener('click', () => {
      buttonHelpers.validateHelper(cy, phase)
    })
    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // core module
    })
  }
}
