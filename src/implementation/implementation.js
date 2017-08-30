'use strict'

// implementation module

// require implementation modules
const impModelValidation = require('./impModelValidation.js')
const impOverview = require('./impOverview.js')
const addImpComponent = require('./addImpComponent.js')
const addImpEdge = require('./addImpEdge.js')
const vulnVerification = require('./vulnVerification.js')
const findVulns = require('./findVulns.js')

// require global modules
const printTotalNodes = require('../core/printTotalNodes.js')
const threatVerification = require('../core/threatVerification.js')
const moduleSelection = require('../core/moduleSelection.js')

const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', event => {
    nodeCounter += 1
    addImpComponent(cy, event, nodeCounter)
    cy.nodes().addClass('label-nodes')
    printTotalNodes(cy) // global module
  })
}

// add design edges
const addEdge = (cy, srcNode, trgNode) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpEdge(cy, srcNode.out, trgNode.out)
    cy.edges().addClass('label-edges')
  })
}

// validate model
const validate = cy => impModelValidation(cy)

// verify threats
const threatVerify = cy => {
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
}
// verify vulnerabilities
const vulnVerify = cy => {
  const buttonVulnVefiry = document.getElementById('vuln-verify-button')
  buttonVulnVefiry.addEventListener('click', () => {
    vulnVerification(cy)
  })
}
// find vulnerabilities
const findVulnerabilities = cy => {
  const buttonFindVuln = document.getElementById('find-vuln-button')
  buttonFindVuln.addEventListener('click', () => {
    findVulns(cy)
  })
}

// model overview
const overview = cy => impOverview(cy)

// module selection
const moduleGroup = cy => {
  const group = document.getElementById('module-group')
  group.addEventListener('click', e => {
    moduleSelection(cy, e.target.textContent) // global module
  })
}

module.exports = {
  addNode,
  addEdge,
  validate,
  overview,
  threatVerify,
  vulnVerify,
  findVulnerabilities,
  moduleGroup
}
