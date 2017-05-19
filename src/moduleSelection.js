'use strict'

// grouping of the module components
let groupArray = []
const networkArray = ['device', 'network connection', 'micronet',
  'net', 'unidentified node', 'data', 'thing']
const securityArray = ['asset', 'threat', 'vulnerability', 'mechanism',
  'constraint', 'malicious actor'
]
const socialArray = ['actor']

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (input, cy) {
  const condition = input.target.value
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
    case 'network-security':
      groupArray = networkArray.concat(securityArray)
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
  cy.nodes().map((node) => {
    const nodeConcept = node.data().info.concept
    if (groupArray.indexOf(nodeConcept) !== -1) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })


  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `${condition} nodes: ${totalNodes}`
}
