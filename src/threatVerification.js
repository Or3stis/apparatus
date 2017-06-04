'use strict'

const printChat = require('./printChat.js')

let threatArray = []
let result = ''
let mitigatedThreats = ''

module.exports = function threatVerification (cy) {
  cy.nodes().map((node) => {
    if (node.data().info.concept === 'threat') {
      node.addClass('attention')
      threatArray.push(node)
    }
    if (node.data().info.concept === 'constraint') {
      node.addClass('protect')
    }
  })

  threatArray.map((threat) => {
    const neighbor = threat.neighborhood()
    neighbor.map((type) => {
      // need to change it the concept
      // the neighborhood also return the edges
      if (type.data().label === 'constraint') {
        result = `${result} • Threat ${threat.data().id} is mitigated by Constraint ${type.data().id}\n`
        mitigatedThreats += 1
      }
    })
  })
  result = `${result} • Threats total: ${threatArray.length}\n`
  result = `${result} • Mitigated total: ${mitigatedThreats.length}\n`
  printChat(result)
}
