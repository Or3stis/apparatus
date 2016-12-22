'use strict'

const config = require('./config')

// checks the values of the nodes for flagged values
const flaggedList = config.flag

module.exports = function securityHints (s) {
  let flaggedNodes = ''

  s.graph.nodes().map((n) => {
    n.color = config.darkLine
    Object.keys(n.info).map((value) => {
      flaggedList.map((i) => {
        if (n.info[value] === i) {
          flaggedNodes += `• ${n.label} ⚑ ${i}<br/>`
          // repaints the flagged nodes in their original color
          n.color = n.originalColor
        }
      })
    })
  })
  // paints the edges the shadow color
  s.graph.edges().map((e) => {
    e.color = config.darkLine
  })
  document.getElementById('info-for-nodes').innerHTML = flaggedNodes
  s.refresh()
}
