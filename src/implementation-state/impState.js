'use strict'

// implementation-state main module

// require implementation-state modules
const impStateModelValidation = require('./impStateModelValidation.js')
const impStateOverview = require('./impStateOverview.js')
const addImpStateComponent = require('./addImpStateComponent.js')
const addImpStateEdge = require('./addImpStateEdge.js')

// require global modules
const totalNodes = require('../totalNodes.js')

// add imp-state nodes
const addNode = cy => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', e => {
    addImpStateComponent(cy, e.target.value) // imp-state module
    cy.nodes().addClass('label-nodes')
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
}

// add imp-state edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpStateEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
    cy.edges().addClass('label-edges')
    totalNodes(cy) // global module
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
