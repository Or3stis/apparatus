'use strict'

// checks the values of the nodes for flagged values

const flaggedList = ['perception', 'application']

module.exports = function securityHints (s) {
  let flaggedNodes = ''
  s.graph.nodes().map((n) => {
    Object.keys(n.info).map((value) => {
      flaggedList.map((i) => {
        if (n.info[value] === i) {
          flaggedNodes += `• ${n.label} ⚑ ${i}<br/>`
        }
      })
    })
  })
  document.getElementById('info-for-nodes').innerHTML = flaggedNodes
}
