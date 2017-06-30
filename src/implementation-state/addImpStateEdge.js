'use strict'

const printChat = require('../printChat.js')

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'model' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'configuration'
      }
    })
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'high-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'documents'
      }
    })
  } else if (srcNodeCpt === 'event sensor' && trgNodeCpt === 'low-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'documents'
      }
    })
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'high-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'detects'
      }
    })
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'low-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'detects'
      }
    })
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'notifies'
      }
    })
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'listens'
      }
    })
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'high-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'detects'
      }
    })
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'low-level event') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'detects'
      }
    })
  } else if (srcNodeCpt === 'high-level event' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'low-level event' && trgNodeCpt === 'model') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else {
    printChat('mistake 😔')
  }
}
