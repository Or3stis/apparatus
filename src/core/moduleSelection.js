'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (cy, input) {
  // grouping of the module components
  let groupArray = []
  const networkArray = [
    'device',
    'network connection',
    'micronet',
    'net',
    'unidentified node',
    'information',
    'thing'
  ]
  const securityArray = [
    'asset',
    'threat',
    'vulnerability',
    'mechanism',
    'constraint',
    'malicious actor'
  ]
  const socialArray = ['actor']
  const sensingArray = [
    'sensor',
    'event sensor',
    'report sensor',
    'control sensor'
  ]

  const condition = input
  switch (condition) {
    case 'network':
      groupArray = networkArray
      break
    case 'security':
      groupArray = securityArray
      break
    case 'social':
      groupArray = socialArray
      break
    case 'sensing':
      groupArray = sensingArray
      break
    case 'network-security':
      groupArray = networkArray.concat(securityArray)
      break
    case 'network-sensing':
      groupArray = networkArray.concat(sensingArray)
      break
    case 'security-sensing':
      groupArray = securityArray.concat(sensingArray)
      break
    case 'network-social':
      groupArray = networkArray.concat(socialArray)
      break
    default:
      groupArray = []
      console.error('error in moduleSelection.js')
  }

  cy.elements().addClass('faded')

  let totalNodes = 0
  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (groupArray.includes(nodeConcept) === true) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `${condition} nodes: ${totalNodes}`
}
