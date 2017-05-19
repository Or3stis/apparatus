'use strict'

const networkArray = ['thing', 'micronet', 'net', 'data']
const securityArray = ['asset', 'threat', 'constraint', 'malicious actor']
const socialArray = ['actor']

let result = ''

module.exports = function overview (cy) {
  const totalNodes = cy.elements().nodes().length
  result = `total nodes: ${totalNodes}\n`

  let networkNode = 0
  let securityNode = 0
  let socialNode = 0
  cy.nodes().map((node) => {
    const nodeConcept = node.data().info.concept
    if (networkArray.indexOf(nodeConcept) !== -1) {
      networkNode += 1
    } else if (securityArray.indexOf(nodeConcept) !== -1) {
      securityNode += 1
    } else if (socialArray.indexOf(nodeConcept !== -1)) {
      socialNode += 1
    }
  })
  result = `${result}network nodes: ${networkNode}\n`
  result = `${result}social nodes: ${socialNode}\n`
  result = `${result}security nodes: ${securityNode}\n`

  let thingNode = 0
  let micronetNode = 0
  let netNode = 0
  let dataNode = 0
  let assetNode = 0
  let threatNode = 0
  let constraintNode = 0
  let malActorNode = 0
  let actorNode = 0
  cy.nodes().map((node) => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'thing') {
      thingNode += 1
    } else if (nodeConcept === 'micronet') {
      micronetNode += 1
    } else if (nodeConcept === 'net') {
      netNode += 1
    } else if (nodeConcept === 'data') {
      dataNode += 1
    } else if (nodeConcept === 'asset') {
      assetNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'constraint') {
      constraintNode += 1
    } else if (nodeConcept === 'malicious actor') {
      malActorNode += 1
    } else if (nodeConcept === 'actor') {
      actorNode += 1
    }
  })
  result = `${result}thing nodes: ${thingNode}\n`
  result = `${result}micronet nodes: ${micronetNode}\n`
  result = `${result}net nodes: ${netNode}\n`
  result = `${result}data nodes: ${dataNode}\n`
  result = `${result}asset nodes: ${assetNode}\n`
  result = `${result}threat nodes: ${threatNode}\n`
  result = `${result}constraint nodes: ${constraintNode}\n`
  result = `${result}malicious actor nodes: ${malActorNode}\n`
  result = `${result}actor nodes: ${actorNode}\n`

  const htmlElement = document.getElementById('info-for-nodes-id')
  htmlElement.textContent = `${result}`
}
