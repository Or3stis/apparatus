'use strict'

// design-state main module

// require design-state modules
const dgnStateModelValidation = require('./dgnStateModelValidation.js')
const dgnStateOverview = require('./dgnStateOverview.js')
const addDgnStateComponent = require('./addDgnStateComponent.js')
const addDgnStateEdge = require('./addDgnStateEdge.js')

// require global modules
const totalNodes = require('../totalNodes.js')

// add dgn-state nodes
const addNode = cy => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('change', e => {
    addDgnStateComponent(cy, e.target.value)
    cy.nodes().addClass('label-nodes')
    // reset moduleGroup selection
    document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
}

// add dgn-state edges
// TODO doesn't work
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnStateEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
    cy.edges().addClass('label-edges')
    console.log(srcNode)
    totalNodes(cy) // global module
  })
}

// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnStateModelValidation(cy)
  })
}

// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnStateOverview(cy)
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  validate: validate,
  overview: overview
}
