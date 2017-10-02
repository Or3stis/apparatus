'use strict'
// prints the total number of nodes along with their concept type and module

const printChatText = require('../helpers/printChatText.js')
// const dgnMetamodel = require('./dgnSchema.js')

module.exports = function overview (cy) {
  // const networkArray = dgnMetamodel.network
  // const securityArray = dgnMetamodel.security
  // const socialArray = dgnMetamodel.social
  // const sensingArray = dgnMetamodel.sensing
  //
  let result = ''
  //
  // const totalNodes = cy.elements().nodes().length
  // result = `• total nodes: ${totalNodes}\n\n`
  //
  // let networkNode = 0
  // let securityNode = 0
  // let socialNode = 0
  // let sensingNode = 0
  //
  // cy.nodes().map(node => {
  //   const nodeConcept = node.data().info.concept
  //   if (networkArray.includes(nodeConcept) === true) {
  //     networkNode += 1
  //   } else if (securityArray.includes(nodeConcept) === true) {
  //     securityNode += 1
  //   } else if (socialArray.includes(nodeConcept) === true) {
  //     socialNode += 1
  //   } else if (sensingArray.includes(nodeConcept) === true) {
  //     sensingNode += 1
  //   }
  // })
  // result = `${result}• network nodes: ${networkNode}\n`
  // result = `${result}• social nodes: ${socialNode}\n`
  // result = `${result}• security nodes: ${securityNode}\n`
  // result = `${result}• sensing nodes: ${sensingNode}\n\n`

  let serviceProvNode = 0
  let infrastructureProvNode = 0
  let cesmNode = 0
  let vimNode = 0
  let mainDcNode = 0
  let lightDcNode = 0
  let vnfNode = 0
  let storageNode = 0
  let processNode = 0
  let constraintNode = 0
  let assetNode = 0
  let endUserNode = 0
  let threatNode = 0
  let malActorNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'service provider') {
      serviceProvNode += 1
    } else if (nodeConcept === 'infrastrure provider') {
      infrastructureProvNode += 1
    } else if (nodeConcept === 'cesm') {
      cesmNode += 1
    } else if (nodeConcept === 'vim') {
      vimNode += 1
    } else if (nodeConcept === 'main dc') {
      mainDcNode += 1
    } else if (nodeConcept === 'light dc') {
      lightDcNode += 1
    } else if (nodeConcept === 'vnf') {
      vnfNode += 1
    } else if (nodeConcept === 'storage') {
      storageNode += 1
    } else if (nodeConcept === 'process') {
      processNode += 1
    } else if (nodeConcept === 'constraint') {
      constraintNode += 1
    } else if (nodeConcept === 'asset') {
      assetNode += 1
    } else if (nodeConcept === 'end user') {
      endUserNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'malicious actor') {
      malActorNode += 1
    }
  })

  result = `${result}• service provider nodes: ${serviceProvNode}\n`
  result = `${result}• infrastrure provider nodes: ${infrastructureProvNode}\n`
  result = `${result}• cesm nodes: ${cesmNode}\n`
  result = `${result}• vim nodes: ${vimNode}\n`
  result = `${result}• main dc nodes: ${mainDcNode}\n`
  result = `${result}• light dc nodes: ${lightDcNode}\n`
  result = `${result}• vnf nodes: ${vnfNode}\n`
  result = `${result}• storage nodes: ${storageNode}\n`
  result = `${result}• process nodes: ${processNode}\n`
  result = `${result}• constraint nodes: ${constraintNode}\n`
  result = `${result}• asset nodes: ${assetNode}\n`
  result = `${result}• end user nodes: ${endUserNode}\n`
  result = `${result}• threat nodes: ${threatNode}\n`
  result = `${result}• malicious actor nodes: ${malActorNode}\n`

  printChatText(result)
}
