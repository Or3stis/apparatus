'use strict'

const printChat = require('../printChat.js')

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'net' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'requests'
      }
    })
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'thing') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'connects'
      }
    })
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'has'
      }
    })
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'imposes'
      }
    })
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'thing') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'poses'
      }
    })
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'thing') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'informatin') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'thing') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'requires'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'thing') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'knows'
      }
    })
  } else if (srcNodeCpt === 'thing' && trgNodeCpt === 'net') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'asset') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'targets'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'threat') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'poses'
      }
    })
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'threat') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'mitigates'
      }
    })
  } else {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'mistake 😔'
      }
    })
  }
  printChat('edge added')
}
