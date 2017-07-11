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
const totalNodes = require('../core/totalNodes.js')
const threatVerification = require('../core/threatVerification.js')
const patterns = require('../core/patterns.js')
const moduleSelection = require('../core/moduleSelection.js')

// design nodes
const addNode = cy => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', e => {
    addImpComponent(cy, e.target.textContent)
    cy.nodes().addClass('label-nodes')
    totalNodes(cy) // global module
  })
}

// add design edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpEdge(cy, srcNode.out, trgNode.out, srcNodeCpt.out, trgNodeCpt.out)
    cy.edges().addClass('label-edges')
  })
}
// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    impModelValidation(cy)
  })
}
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
// find patterns
const findPattern = cy => {
  const buttonPattern = document.getElementById('pattern-button')
  buttonPattern.addEventListener('click', () => {
    patterns(cy) // global module
  })
}
// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impOverview(cy)
  })
}
// module selection
const moduleGroup = cy => {
  const group = document.getElementById('module-group')
  group.addEventListener('click', e => {
    moduleSelection(cy, e.target.textContent) // global module
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  validate: validate,
  overview: overview,
  threatVerify: threatVerify,
  vulnVerify: vulnVerify,
  findVulnerabilities: findVulnerabilities,
  findPattern: findPattern,
  moduleGroup: moduleGroup
}
