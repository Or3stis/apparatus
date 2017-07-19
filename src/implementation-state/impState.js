'use strict'

// implementation-state main module

// require implementation-state modules
const impStateModelValidation = require('./impStateModelValidation.js')
const impStateOverview = require('./impStateOverview.js')
const addImpStateComponent = require('./addImpStateComponent.js')
const addImpStateEdge = require('./addImpStateEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')

const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', e => {
    nodeCounter += 1
    addImpStateComponent(cy, e.target.textContent, nodeCounter)
    cy.nodes().addClass('label-nodes')
    totalNodes(cy) // global module
  })
}
// add imp-state edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpStateEdge(
      cy,
      srcNode.out,
      trgNode.out,
      srcNodeCpt.out,
      trgNodeCpt.out
    )
    cy.edges().addClass('label-edges')
  })
}
// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    impStateModelValidation(cy) // imp-state module
  })
}
// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    impStateOverview(cy) // imp-state module
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  validate: validate,
  overview: overview
}
