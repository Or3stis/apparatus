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

// reguire implementation modules
const impModelValidation = require('./imp/impModelValidation.js')
const impOverview = require('./imp/impOverview.js')
const addImpComponent = require('./imp/addImpComponent.js')
const addImpEdge = require('./imp/addImpEdge.js')

// require implementation-state modules
const impStateModelValidation = require('./imp-state/impStateModelValidation.js')
const impStateOverview = require('./imp-state/impStateOverview.js')
const addImpStateComponent = require('./imp-state/addImpStateComponent.js')
const addImpStateEdge = require('./imp-state/addImpStateEdge.js')

// phases add component module
const addComponents = (cy, event, nodeCounter, phase) => {
  if (phase === 'design') {
    addDgnComponent(cy, event, nodeCounter)
  } else if (phase === 'design-state') {
    addDgnStateComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation') {
    addImpComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation-state') {
    addImpStateComponent(cy, event, nodeCounter)
  }
}

// phases add edge module
const addEdge = (cy, srcNode, trgNode, phase) => {
  if (phase === 'design') {
    addDgnEdge(cy, srcNode, trgNode)
  } else if (phase === 'design-state') {
    addDgnStateEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation') {
    addImpEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation-state') {
    addImpStateEdge(cy, srcNode, trgNode)
  }
}

// phases model validation
const validateHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnModelValidation(cy)
  } else if (phase === 'design-state') {
    dgnStateModelValidation(cy)
  } else if (phase === 'implementation') {
    impModelValidation(cy)
  } else if (phase === 'implementation-state') {
    impStateModelValidation(cy)
  }
}

// phases model overview
const overviewHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnOverview(cy)
  } else if (phase === 'design-state') {
    dgnStateOverview(cy)
  } else if (phase === 'implementation') {
    impOverview(cy)
  } else if (phase === 'implementation-state') {
    impStateOverview(cy)
  }
}

module.exports = {
  addComponents,
  addEdge,
  validateHelper,
  overviewHelper
}
