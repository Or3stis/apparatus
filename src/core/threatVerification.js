'use strict'

const printChat = require('./printChat.js')

module.exports = function threatVerification (cy) {
  let threatArray = []
  let result = ''
  let mitigatedThreats = 0

  cy.elements().addClass('faded')
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

  threatArray.map(threat => {
    const neighbor = threat.neighborhood()
    neighbor.map(type => {
      if (type.data().hasOwnProperty('info')) {
        if (type.data().info.concept === 'constraint') {
          result = `${result} • Threat ${threat.data()
            .id} is mitigated by Constraint ${type.data().id}\n`
          mitigatedThreats += 1
        }
      }
    })
  })
  result = `${result} • Threats total: ${threatArray.length}\n`
  result = `${result} • Mitigated total: ${mitigatedThreats}\n`
  printChat(result)
}
