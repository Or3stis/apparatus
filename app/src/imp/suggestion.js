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
  }
}

module.exports = function suggestion (cy) {
  // fade out all the nodes
  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    let nodeData = node.data().asto

    // s0 suggestion
    if (nodeData.concept === list.s0.concept && nodeData.layer === list.s0.layer) {
      node.removeClass('faded')
      node.addClass('attention')
      printMsgTxt(`${node.data().id}: ${list.s0.suggestion}`)
    }
    // s1 suggestion
    if (
      nodeData.concept === list.s1.concept &&
      nodeData.description === list.s1.description
    ) {
      node.removeClass('faded')
      node.addClass('attention')
      printMsgTxt(`${node.data().id}: ${list.s1.suggestion}`)
    }
  })
}
