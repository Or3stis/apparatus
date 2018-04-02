// checks if threats are mitigated with constraints

const printChatText = require('../helpers/printChatText.js')

module.exports = function threatVerification (cy) {
  let threatArray = []
  let result = ''
  let mitigatedThreats = 0

  cy.elements().addClass('faded')

  // highlights threat and constraint nodes
  cy.nodes().map(node => {
    if (node.data().info.concept === 'threat') {
      node.removeClass('faded')
      node.addClass('attention')
      threatArray.push(node)
    }
    if (node.data().info.concept === 'constraint') {
      node.removeClass('faded')
      node.addClass('protect')
    }
  })

  // checks if threat node is connected to a constraint node
  threatArray.map(threat => {
    const neighbor = threat.neighborhood()
    neighbor.map(type => {
      if (type.data().hasOwnProperty('info') === true) {
        if (type.data().info.concept === 'constraint') {
          result = `${result} • Threat ${
            threat.data().id
          } mitigated by Constraint ${type.data().id}\n`
          mitigatedThreats += 1
        }
      }
    })
  })
  result = `${result}\n • Threats total: ${threatArray.length}\n`
  result = `${result} • Mitigated total: ${mitigatedThreats}\n`
  printChatText(result)

  if (threatArray.length <= mitigatedThreats) {
    printChatText('all threats mitigated 🎉')
  }
}
