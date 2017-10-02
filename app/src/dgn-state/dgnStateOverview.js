'use strict'
// prints the total number of nodes along with their concept type and module

const printChatText = require('../helpers/printChatText.js')

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let cesmNode = 0
  let modelNode = 0
  let eventNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'cesm') {
      cesmNode += 1
    } else if (nodeConcept === 'model') {
      modelNode += 1
    } else if (nodeConcept === 'event') {
      eventNode += 1
    }
  })
  result = `${result}\n• cesm nodes: ${cesmNode}\n`
  result = `${result}• model nodes: ${modelNode}\n`
  result = `${result}• event nodes: ${eventNode}\n`

  printChatText(result)
}
