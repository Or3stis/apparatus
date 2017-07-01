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
  if (srcNodeCpt === 'net' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requests')
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'imposes')
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'net') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'asset') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'targets')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'thing') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'threat') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
  } else if (srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
  } else {
    printChat('mistake 😔')
  }
}
