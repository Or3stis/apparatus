'use strict'
// prints the total number of nodes along with their concept type and module

const bubbleTxt = require('../helpers/bubbleTxt.js')

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let cescmNode = 0
  let modelNode = 0
  let eventNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'cescm') {
      cescmNode += 1
    } else if (nodeConcept === 'model') {
      modelNode += 1
    } else if (nodeConcept === 'event') {
      eventNode += 1
    }
  })
  result = `${result}\n• cescm nodes: ${cescmNode}\n`
  result = `${result}• model nodes: ${modelNode}\n`
  result = `${result}• event nodes: ${eventNode}\n`

  bubbleTxt(result)
}
