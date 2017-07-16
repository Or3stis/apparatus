'use strict'

const printChat = require('../core/printChat.js')

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let sensorNode = 0
  let modelNode = 0
  let eventNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'sensor') {
      sensorNode += 1
    } else if (nodeConcept === 'model') {
      modelNode += 1
    } else if (nodeConcept === 'event') {
      eventNode += 1
    }
  })
  result = `${result}\n• sensor nodes: ${sensorNode}\n`
  result = `${result}• model nodes: ${modelNode}\n`
  result = `${result}• event nodes: ${eventNode}\n`

  printChat(result)
}
