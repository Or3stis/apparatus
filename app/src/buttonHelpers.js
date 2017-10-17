// assigns specific functions to each

// require design modules
const dgnModelValidation = require('./dgn/dgnModelValidation.js')
const dgnOverview = require('./dgn/dgnOverview.js')
const addDgnComponent = require('./dgn/addDgnComponent.js')
const addDgnEdge = require('./dgn/addDgnEdge.js')

// reguire implementation modules
const impModelValidation = require('./imp/impModelValidation.js')
const impOverview = require('./imp/impOverview.js')
const addImpComponent = require('./imp/addImpComponent.js')
const addImpEdge = require('./imp/addImpEdge.js')

// require state diagram modules
const stateOverview = require('./state/stateOverview.js')
const addStateComponent = require('./state/addStateComponent.js')
const addStateEdge = require('./state/addStateEdge.js')

// phases add component module
const addComponents = (cy, event, nodeCounter, phase) => {
  if (phase === 'design') {
    addDgnComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation') {
    addImpComponent(cy, event, nodeCounter)
  } else if (phase === 'state') {
    addStateComponent(cy, event, nodeCounter)
  }
}

// phases add edge module
const addEdge = (cy, srcNode, trgNode, phase) => {
  if (phase === 'design') {
    addDgnEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation') {
    addImpEdge(cy, srcNode, trgNode)
  } else if (phase === 'state') {
    addStateEdge(cy, srcNode, trgNode)
  }
}

// phases model validation
const validateHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnModelValidation(cy)
  } else if (phase === 'implementation') {
    impModelValidation(cy)
  }
}

// phases model overview
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
