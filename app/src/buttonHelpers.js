// helper module to assign specific functions to buttons depending on the phase

// require design modules
const dgnModelValidation = require('./dgn/dgnModelValidation.js')
const dgnOverview = require('./dgn/dgnOverview.js')
const addDgnComponent = require('./dgn/addDgnComponent.js')
const addDgnEdge = require('./dgn/addDgnEdge.js')

// require implementation modules
const impModelValidation = require('./imp/impModelValidation.js')
const impOverview = require('./imp/impOverview.js')
const addImpComponent = require('./imp/addImpComponent.js')
const addImpEdge = require('./imp/addImpEdge.js')

// require state diagram modules
const stateOverview = require('./state/stateOverview.js')
const addStateComponent = require('./state/addStateComponent.js')
const addStateEdge = require('./state/addStateEdge.js')

/**
 * helper function to add specific nodes for each phase
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} event captured event
 * @param {number} nodeCounter id counter of nodes
 * @param {string} phase engineering analysis phase
 */
const addComponents = (cy, event, nodeCounter, phase) => {
  if (phase === 'design') {
    addDgnComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation') {
    addImpComponent(cy, event, nodeCounter)
  } else if (phase === 'state') {
    addStateComponent(cy, event, nodeCounter)
  }
}

/**
 * helper to export function to add specific edges for each phase
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} srcNode source node
 * @param {Object} trgNode target node
 * @param {string} phase engineering analysis phase
 */
const addEdge = (cy, srcNode, trgNode, phase) => {
  if (phase === 'design') {
    addDgnEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation') {
    addImpEdge(cy, srcNode, trgNode)
  } else if (phase === 'state') {
    addStateEdge(cy, srcNode, trgNode)
  }
}

/**
 * helper to export function to validate the model of each phase
 *
 * @param {Object} cy cytoscape instance
 * @param {string} phase engineering analysis phase
 */
const validateHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnModelValidation(cy)
  } else if (phase === 'implementation') {
    impModelValidation(cy)
  }
}

/**
 * helper to export function for the overview of the model of each phase
 *
 * @param {Object} cy cytoscape instance
 * @param {string} phase engineering analysis phase
 */
const overviewHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnOverview(cy)
  } else if (phase === 'implementation') {
    impOverview(cy)
  } else if (phase === 'state') {
    stateOverview(cy)
  }
}

module.exports = {
  addComponents,
  addEdge,
  validateHelper,
  overviewHelper
}
