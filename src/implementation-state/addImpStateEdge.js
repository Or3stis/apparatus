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
  if (srcNodeCpt === 'model' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'configuration')
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'high-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'documents')
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'low-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'documents')
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'high-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'low-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'notifies')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'listens')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'high-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'low-level event') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'detects')
  } else if (srcNodeCpt === 'high-level event' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'low-level event' && trgNodeCpt === 'model') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else {
    printChat('mistake 😔')
  }
}
