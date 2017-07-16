'use strict'

const printChat = require('../core/printChat.js')

module.exports = function overview (cy) {
  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n\n`

  let eventSensorNode = 0
  let reportSensorNode = 0
  let controlSensorNode = 0
  let modelNode = 0
  let eventNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'event sensor') {
      eventSensorNode += 1
    } else if (nodeConcept === 'report sensor') {
      reportSensorNode += 1
    } else if (nodeConcept === 'control sensor') {
      controlSensorNode += 1
    } else if (nodeConcept === 'model') {
      modelNode += 1
    } else if (nodeConcept === 'event') {
      eventNode += 1
    }
  })
  result = `${result}• event sensor nodes: ${eventSensorNode}\n`
  result = `${result}• report sensor nodes: ${reportSensorNode}\n`
  result = `${result}• control sensor nodes: ${controlSensorNode}\n`
  result = `${result}• model nodes: ${modelNode}\n`
  result = `${result}• event nodes: ${eventNode}\n`

  printChat(result)
}
