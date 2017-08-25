'use strict'

// design module

// require design modules
const dgnModelValidation = require('./dgnModelValidation.js')
const dgnOverview = require('./dgnOverview.js')
const addDgnComponent = require('./addDgnComponent.js')
const addDgnEdge = require('./addDgnEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')
const threatVerification = require('../core/threatVerification.js')
const moduleSelection = require('../core/moduleSelection.js')

// add design nodes using the addDgnComponent.js
const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', event => {
    nodeCounter += 1 // used for the id of the node
    addDgnComponent(cy, event, nodeCounter)
    cy.nodes().addClass('label-nodes')
    totalNodes(cy) // global module
  })
}

// add design edges using the addDgnEdge.js
const addEdge = (cy, srcNode, trgNode) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnEdge(cy, srcNode.out, trgNode.out)
    cy.edges().addClass('label-edges')
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
  dgnOverview(cy)
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
  threatVerify: threatVerify,
  validate: validate,
  overview: overview,
  moduleGroup: moduleGroup
}
