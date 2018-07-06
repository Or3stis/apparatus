/**
 * highlights all the nodes of a specific module
 *
 * @param {Object} cy cytoscape instance
 * @param {any} selection user selection
 */
module.exports = function moduleSelection (cy, selection) {
  // grouping of the module components
  let groupArray = []
  const networkArray = [
    'device',
    'connection',
    'micronet',
    'net',
    'information',
    'application'
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

  switch (selection) {
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
    case '':
      groupArray = []
      break
    default:
      console.error('error in moduleSelection.js')
  }

  cy.elements().addClass('faded')

  let totalNodes = 0
  // removes the faded class from the selected module
  // and adds its nodes to the node count
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    if (groupArray.includes(nodeConcept) === true) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `${selection} nodes: ${totalNodes}`
}
