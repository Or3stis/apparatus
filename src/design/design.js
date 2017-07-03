'use strict'

// design module

// require design-state modules
const dgnModelValidation = require('./dgnModelValidation.js')
const dgnOverview = require('./dgnOverview.js')
const addDgnComponent = require('./addDgnComponent.js')
const addDgnEdge = require('./addDgnEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')
const threatVerification = require('../core/threatVerification.js')

// design nodes
const addNode = cy => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', e => {
    addDgnComponent(cy, e.target.value)
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
    addDgnEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
    cy.edges().addClass('label-edges')
    console.log(srcNode)
    totalNodes(cy)
  })
}
// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnModelValidation(cy)
  })
}
// verify threats
const threatVerify = cy => {
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
}
// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnOverview(cy)
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  threatVerify: threatVerify,
  validate: validate,
  overview: overview
}
