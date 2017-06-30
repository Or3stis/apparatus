'use strict'

const printChat = require('../printChat.js')

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'connects'
      }
    })
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'composed'
      }
    })
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'has'
      }
    })
  } else if (srcNodeCpt === 'net' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'requests'
      }
    })
  } else if (srcNodeCpt === 'net' && trgNodeCpt === 'threat') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'poses'
      }
    })
  } else if (srcNodeCpt === 'unidentified node' && trgNodeCpt === 'net') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'belongs'
      }
    })
  } else if (srcNodeCpt === 'network connection' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'connects'
      }
    })
  } else if (srcNodeCpt === 'network connection' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'connects'
      }
    })
  } else if (srcNodeCpt === 'network connection' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'has'
      }
    })
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'requires'
      }
    })
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'application') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'requires'
      }
    })
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'runs'
      }
    })
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'has'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'application') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'unidentified node') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'device') {
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
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'application') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'unidentified node') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'uses'
      }
    })
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'knows'
      }
    })
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'poses'
      }
    })
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'report sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'contorl sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'event sensor') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
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
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'mechanism') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'triggers'
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
  } else if (srcNodeCpt === 'mechanism' && trgNodeCpt === 'constraint') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'satisfies'
      }
    })
  } else if (srcNodeCpt === 'mechanism' && trgNodeCpt === 'vulnerability') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'protects'
      }
    })
  } else if (srcNodeCpt === 'mechanism' && trgNodeCpt === 'vulnerability') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'protects'
      }
    })
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'vulnerability') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'exploits'
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
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'micronet') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'network connection') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'application') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'affects'
      }
    })
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'device') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'application') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'information') {
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: 'is'
      }
    })
  } else {
    printChat('mistake 😔')
  }
}
