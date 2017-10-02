// assigns specific functions to each

// require design modules
const dgnModelValidation = require('./dgn/dgnModelValidation.js')
const dgnOverview = require('./dgn/dgnOverview.js')
const addDgnComponent = require('./dgn/addDgnComponent.js')
const addDgnEdge = require('./dgn/addDgnEdge.js')

// require design-state modules
const dgnStateModelValidation = require('./dgn-state/dgnStateModelValidation.js')
const dgnStateOverview = require('./dgn-state/dgnStateOverview.js')
const addDgnStateComponent = require('./dgn-state/addDgnStateComponent.js')
const addDgnStateEdge = require('./dgn-state/addDgnStateEdge.js')

// phases add component module
const addComponents = (cy, event, nodeCounter, phase) => {
  if (phase === 'design') {
    addDgnComponent(cy, event, nodeCounter)
  } else if (phase === 'design-state') {
    addDgnStateComponent(cy, event, nodeCounter)
  }
}

// phases add edge module
const addEdge = (cy, srcNode, trgNode, phase) => {
  if (phase === 'design') {
    addDgnEdge(cy, srcNode, trgNode)
  } else if (phase === 'design-state') {
    addDgnStateEdge(cy, srcNode, trgNode)
  }
}

// phases model validation
const validateHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnModelValidation(cy)
  } else if (phase === 'design-state') {
    dgnStateModelValidation(cy)
  }
}

// phases model overview
const overviewHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnOverview(cy)
  } else if (phase === 'design-state') {
    dgnStateOverview(cy)
  }
}

module.exports = {
  addComponents,
  addEdge,
  validateHelper,
  overviewHelper
}
