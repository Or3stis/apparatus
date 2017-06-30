'use strict'

const printChat = require('../printChat.js')

const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCp, label) => {
  cy.add({
    group: 'edges',
    data: {
      id: `e${srcNode}${trgNode}`,
      source: `${srcNode}`,
      target: `${trgNode}`,
      label: `${label}`
    }
  })
}

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'sensor' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'model' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'configuration')
  } else if (srcNodeCpt === 'event' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'sensor' && trgNodeCpt === 'event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
  } else {
    printChat('mistake 😔')
  }
}
