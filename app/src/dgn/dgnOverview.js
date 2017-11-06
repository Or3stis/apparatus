// prints the total number of nodes along with their concept type and module

const dgnMetamodel = require('./dgnSchema.js')

module.exports = function overview (cy) {
  const networkArray = dgnMetamodel.network
  const securityArray = dgnMetamodel.security
  const socialArray = dgnMetamodel.social

  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n\n`

  let networkNode = 0
  let securityNode = 0
  let socialNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (networkArray.includes(nodeConcept) === true) {
      networkNode += 1
    } else if (securityArray.includes(nodeConcept) === true) {
      securityNode += 1
    } else if (socialArray.includes(nodeConcept) === true) {
      socialNode += 1
    }
  })
  result = `${result}• network nodes: ${networkNode}\n`
  result = `${result}• social nodes: ${socialNode}\n`
  result = `${result}• security nodes: ${securityNode}\n\n`

  let deviceNode = 0
  let applicationNode = 0
  let micronetNode = 0
  let unidentifiedNode = 0
  let netNode = 0
  let informationNode = 0
  let assetNode = 0
  let threatNode = 0
  let constraintNode = 0
  let malActorNode = 0
  let actorNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (nodeConcept === 'device') {
      deviceNode += 1
    } else if (nodeConcept === 'application') {
      applicationNode += 1
    } else if (nodeConcept === 'micronet') {
      micronetNode += 1
    } else if (nodeConcept === 'net') {
      netNode += 1
    } else if (nodeConcept === 'unidentified node') {
      unidentifiedNode += 1
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
    }
  })

  result = `${result}• device nodes: ${deviceNode}\n`
  result = `${result}• application nodes: ${applicationNode}\n`
  result = `${result}• micronet nodes: ${micronetNode}\n`
  result = `${result}• net nodes: ${netNode}\n`
  result = `${result}• unidentified nodes: ${unidentifiedNode}\n`
  result = `${result}• information nodes: ${informationNode}\n`
  result = `${result}• asset nodes: ${assetNode}\n`
  result = `${result}• threat nodes: ${threatNode}\n`
  result = `${result}• constraint nodes: ${constraintNode}\n`
  result = `${result}• malicious actor nodes: ${malActorNode}\n`
  result = `${result}• actor nodes: ${actorNode}\n`

  // show result in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = result
}
