// displays security suggestion depending on information found in the model
const printMsgTxt = require('../helpers/printMsgTxt.js')

// contains the attribute/connection patterns and the suggestions
const list = {
  s0: {
    concept: 'device',
    layer: 'perception',
    suggestion: 'devices in the perception layer require physical security.'
  },
  s1: {
    concept: 'network connection',
    description: 'wireless',
    suggestion:
      'wireless connections are subject to information disclosure attacks. Use encrypted protocols.'
  },
  s2: {
    concept: 'device',
    update: 'false',
    suggestion:
      'treat devices that cannot be updated as compromised.'
  },
  s3: {
    concept: 'application',
    update: 'false',
    suggestion:
      'treat applications that cannot be updated as compromised.'
  }
}

module.exports = function suggestion (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  let s0nodes = []
  let s1nodes = []
  let s2nodes = []
  let s3nodes = []
  cy.nodes().map(node => {
    let nodeData = node.data().asto
    let nodeID = node.data().id

    // s0 suggestion
    if (
      nodeData.concept === list.s0.concept &&
      nodeData.layer === list.s0.layer
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      s0nodes.push(nodeID)
    }
    // s1 suggestion
    if (
      nodeData.concept === list.s1.concept &&
      nodeData.description === list.s1.description
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      s1nodes.push(nodeID)
    }
    // s2 suggestion
    if (
      nodeData.concept === list.s2.concept &&
      nodeData.update === list.s2.update
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      s2nodes.push(nodeID)
    }
    // s3 suggestion
    if (
      nodeData.concept === list.s3.concept &&
      nodeData.update === list.s3.update
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      s3nodes.push(nodeID)
    }
  })
  // s0 suggestion
  if (s0nodes.length !== 0) printMsgTxt(`${s0nodes}: ${list.s0.suggestion}`)
  // s1 suggestion
  if (s1nodes.length !== 0) printMsgTxt(`${s1nodes}: ${list.s1.suggestion}`)
  // s2 suggestion
  if (s2nodes.length !== 0) printMsgTxt(`${s2nodes}: ${list.s2.suggestion}`)
  // s3 suggestion
  if (s3nodes.length !== 0) printMsgTxt(`${s3nodes}: ${list.s3.suggestion}`)
}
