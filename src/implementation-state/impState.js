'use strict'

// implementation-state main module

// require implementation-state modules
const impStateModelValidation = require('./impStateModelValidation.js')
const impStateOverview = require('./impStateOverview.js')
const addImpStateComponent = require('./addImpStateComponent.js')
const addImpStateEdge = require('./addImpStateEdge.js')

// require global modules
const printTotalNodes = require('../core/printTotalNodes.js')

// adds implementation-state nodes using addImpStateComponent.js
const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', event => {
    nodeCounter += 1 // used for the id of new node
    addImpStateComponent(cy, event, nodeCounter)
    cy.nodes().addClass('label-nodes')
    printTotalNodes(cy) // global module
  })
}

// add imp-state edges using the addImpStateEdge.js
const addEdge = (cy, srcNode, trgNode) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addImpStateEdge(cy, srcNode.out, trgNode.out)
    cy.edges().addClass('label-edges') // shows the labe of the new edge
  })
}

// validate model using the impStateModelValidation.js
const validate = cy => impStateModelValidation(cy)

// model overview using impStateOverview.js
const overview = cy => impStateOverview(cy)

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  validate: validate,
  overview: overview
}
