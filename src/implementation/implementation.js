'use strict'

// implementation module

// require design-state modules
const impModelValidation = require('./impModelValidation.js')
const impOverview = require('./impOverview.js')
const addImpComponent = require('./addImpComponent.js')
const addImpEdge = require('./addImpEdge.js')
const vulnVerification = require('./vulnVerification.js')
const findVulns = require('./findVulns.js')

// require global modules
const totalNodes = require('../totalNodes.js')
const threatVerification = require('../threatVerification.js')
const patterns = require('../patterns.js')
const moduleSelection = require('../moduleSelection.js')

// design nodes
const addNode = cy => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', e => {
    addImpComponent(cy, e.target.value)
    cy.nodes().addClass('label-nodes')
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
}

// add design edges
// TODO doesn't work
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
    cy.edges().addClass('label-edges')
    console.log(srcNode)
    totalNodes(cy) // global module
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
  group.addEventListener('change', input => {
    moduleSelection(input, cy) // global module
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
