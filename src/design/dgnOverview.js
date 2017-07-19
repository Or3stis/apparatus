'use strict'

const printChat = require('../core/printChat.js')
const dgnMetamodel = require('./dgnSchema.js')

module.exports = function overview (cy) {
  const networkArray = dgnMetamodel.network
  const securityArray = dgnMetamodel.security
  const socialArray = dgnMetamodel.social
  const sensingArray = dgnMetamodel.sensing

  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n\n`

  let networkNode = 0
  let securityNode = 0
  let socialNode = 0
  let sensingNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (networkArray.includes(nodeConcept) === true) {
      networkNode += 1
    } else if (securityArray.includes(nodeConcept) === true) {
      securityNode += 1
    } else if (socialArray.includes(nodeConcept) === true) {
      socialNode += 1
    } else if (sensingArray.includes(nodeConcept) === true) {
      sensingNode += 1
    }
  })
  result = `${result}• network nodes: ${networkNode}\n`
  result = `${result}• social nodes: ${socialNode}\n`
  result = `${result}• security nodes: ${securityNode}\n`
  result = `${result}• sensing nodes: ${sensingNode}\n\n`

  let thingNode = 0
  let micronetNode = 0
  let netNode = 0
  let informationNode = 0
  let assetNode = 0
  let threatNode = 0
  let constraintNode = 0
  let malActorNode = 0
  let actorNode = 0
  let sensorNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'thing') {
      thingNode += 1
    } else if (nodeConcept === 'micronet') {
      micronetNode += 1
    } else if (nodeConcept === 'net') {
      netNode += 1
    } else if (nodeConcept === 'information') {
      informationNode += 1
    } else if (nodeConcept === 'asset') {
      assetNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'constraint') {
      constraintNode += 1
    } else if (nodeConcept === 'malicious actor') {
      malActorNode += 1
    } else if (nodeConcept === 'actor') {
      actorNode += 1
    } else if (nodeConcept === 'sensor') {
      sensorNode += 1
    }
  })

  result = `${result}• thing nodes: ${thingNode}\n`
  result = `${result}• micronet nodes: ${micronetNode}\n`
  result = `${result}• net nodes: ${netNode}\n`
  result = `${result}• information nodes: ${informationNode}\n`
  result = `${result}• asset nodes: ${assetNode}\n`
  result = `${result}• threat nodes: ${threatNode}\n`
  result = `${result}• constraint nodes: ${constraintNode}\n`
  result = `${result}• malicious actor nodes: ${malActorNode}\n`
  result = `${result}• actor nodes: ${actorNode}\n`
  result = `${result}• sensor nodes: ${sensorNode}\n`

  printChat(result)
}
