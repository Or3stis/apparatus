// core modules, shared between all phases

const nodeSelection = require('./core/nodeSelection.js')
const layout = require('./core/layout.js')
const moduleSelection = require('./core/moduleSelection.js')
const threatVerification = require('./core/threatVerification.js')
const deleteRestoreConcepts = require('./core/deleteRestoreConcepts.js')
const patterns = require('./core/patterns.js')
const printTotalNodes = require('./core/printTotalNodes.js')

const dgnState2ImpState = require('./tranformation/dgnState2ImpState.js')

const findVulns = require('./imp/findVulns.js')
const vulnVerification = require('./imp/vulnVerification.js')

const save = require('./helpers/save.js')
const watcher = require('./helpers/watcher.js')

const phaseHelpers = require('./buttonHelpers.js')

// const dgnState2ImpState = require('./tranformation/dgnState2ImpState.js')
// const printChatText = require('./helpers/printChatText.js')
// const load = require('../helpers/load.js')

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
  // adds nodes
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', event => {
    nodeCounter += 1 // used for the id of the node
    phaseHelpers.addComponents(cy, event, nodeCounter, phase)
    cy.nodes().addClass('label-nodes')
    printTotalNodes(cy)

    // watch for changes in the nodes of the graph
    watcher.nodes(graphNodes, cy)
  })

  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    phaseHelpers.addEdge(cy, srcNode.out, trgNode.out, phase)
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

  // applies the selected layout to the graph
  // uses the layout.js module
  const buttonLayout = document.getElementById('layout-button')
  buttonLayout.addEventListener('click', e => {
    layout(cy, e.target.textContent)
  })

  // phases model button
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    phaseHelpers.validateHelper(cy, phase)
  })

  // phases model button
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    phaseHelpers.overviewHelper(cy, phase)
  })

  // find patterns using the findPattern.js module
  const buttonPattern = document.getElementById('pattern-button')
  buttonPattern.addEventListener('click', () => patterns(cy))

  // save the graph using the save.js module
  const buttonSave = document.getElementById('save-button')
  buttonSave.addEventListener('click', () => save(cy))

  // loads a graph
  // const loadGraph = (cy) => {
  //   const buttonLoad = document.getElementById('load-button')
  //   buttonLoad.addEventListener('click', () => {
  //     load(cy)
  //   })

  // test function
  // const buttonTest = document.getElementById('test-button')
  // buttonTest.addEventListener('click', () => {
  //   // test code goes here
  //   printChatText('button for code testing')
  // })

  // enable label buttons
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

  // phase only buttons
  if (phase === 'design') {
    // verify threats
    const buttonThreatVefiry = document.getElementById('threat-verify-button')
    buttonThreatVefiry.addEventListener('click', () => {
      threatVerification(cy) // global module
    })

    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // global module
    })
  } else if (phase === 'design-state') {
    // transform design-state model to implementation-state
    const buttonTransform = document.getElementById('transform-button')
    buttonTransform.addEventListener('click', () => {
      dgnState2ImpState(cy)
    })
  } else if (phase === 'implementation') {
    // verify threats
    const buttonThreatVefiry = document.getElementById('threat-verify-button')
    buttonThreatVefiry.addEventListener('click', () => {
      threatVerification(cy) // global module
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

    // module selection
    const group = document.getElementById('module-group')
    group.addEventListener('click', e => {
      moduleSelection(cy, e.target.textContent) // global module
    })
  }
}
