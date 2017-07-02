'use strict'

const printChat = require('../printChat.js')
const impMetamodel = require('./impSchema.js')

module.exports = function overview (cy) {
  const networkArray = impMetamodel.network
  const securityArray = impMetamodel.security
  const socialArray = impMetamodel.social
  const sensingArray = impMetamodel.sensing

  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `total nodes: ${totalNodes}\n`

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
  result = `${result}network nodes: ${networkNode}\n`
  result = `${result}social nodes: ${socialNode}\n`
  result = `${result}security nodes: ${securityNode}\n`
  result = `${result}sensing nodes: ${sensingNode}\n`

  let deviceNode = 0
  let connectionNode = 0
  let micronetNode = 0
  let applicationNode = 0
  let netNode = 0
  let unidentifiedNode = 0
  let informationNode = 0
  let assetNode = 0
  let threatNode = 0
  let vulnNode = 0
  let mechNode = 0
  let constraintNode = 0
  let malActorNode = 0
  let actorNode = 0
  let eventSensorNode = 0
  let reportSensorNode = 0
  let controlSensorNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'device') {
      deviceNode += 1
    } else if (nodeConcept === 'application') {
      applicationNode += 1
    } else if (nodeConcept === 'information') {
      informationNode += 1
    } else if (nodeConcept === 'network connection') {
      connectionNode += 1
    } else if (nodeConcept === 'micronet') {
      micronetNode += 1
    } else if (nodeConcept === 'net') {
      netNode += 1
    } else if (nodeConcept === 'unidentified node') {
      unidentifiedNode += 1
    } else if (nodeConcept === 'asset') {
      assetNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'vulnerability') {
      vulnNode += 1
    } else if (nodeConcept === 'mechanism') {
      mechNode += 1
    } else if (nodeConcept === 'constraint') {
      constraintNode += 1
    } else if (nodeConcept === 'malicious actor') {
      malActorNode += 1
    } else if (nodeConcept === 'actor') {
      actorNode += 1
    } else if (nodeConcept === 'event sensor') {
      eventSensorNode += 1
    } else if (nodeConcept === 'report sensor') {
      reportSensorNode += 1
    } else if (nodeConcept === 'control sensor') {
      controlSensorNode += 1
    }
  })

  result = `${result}device nodes: ${deviceNode}\n`
  result = `${result}application nodes: ${applicationNode}\n`
  result = `${result}network connection nodes: ${connectionNode}\n`
  result = `${result}micronet nodes: ${micronetNode}\n`
  result = `${result}net nodes: ${netNode}\n`
  result = `${result}data nodes: ${informationNode}\n`
  result = `${result}unidentified nodes: ${unidentifiedNode}\n`
  result = `${result}asset nodes: ${assetNode}\n`
  result = `${result}threat nodes: ${threatNode}\n`
  result = `${result}vulnerability nodes: ${vulnNode}\n`
  result = `${result}mechanism nodes: ${mechNode}\n`
  result = `${result}constraint nodes: ${constraintNode}\n`
  result = `${result}malicious actor nodes: ${malActorNode}\n`
  result = `${result}actor nodes: ${actorNode}\n`
  result = `${result}event sensor nodes: ${eventSensorNode}\n`
  result = `${result}report sensor nodes: ${reportSensorNode}\n`
  result = `${result}control sensor nodes: ${controlSensorNode}\n`

  printChat(result)
}
