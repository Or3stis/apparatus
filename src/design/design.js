'use strict'

// design module

// require design-state modules
const dgnModelValidation = require('./dgnModelValidation.js')
const dgnOverview = require('./dgnOverview.js')
const addDgnComponent = require('./addDgnComponent.js')
const addDgnEdge = require('./addDgnEdge.js')

// require global modules
const totalNodes = require('../totalNodes.js')
const moduleSelection = require('../moduleSelection.js')

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
    totalNodes(cy) // global module
  })
}

// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnModelValidation(cy)
  })
}

// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnOverview(cy)
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
  moduleGroup: moduleGroup
}
