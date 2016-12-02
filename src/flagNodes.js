'use strict'

const config = require('./config')

// checks the values of the nodes for flagged values
const flaggedList = config.flag

// initial color values
let shadowColor = ''

module.exports = function securityHints (s, toggleTheme) {
  // checks the color theme
  shadowColor = (toggleTheme === true) ? config.lightLine : config.darkLine

  let flaggedNodes = ''

  s.graph.nodes().map((n) => {
    // paints every node as the shadow color
    n.color = shadowColor
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
    e.color = shadowColor
  })
  document.getElementById('info-for-nodes').innerHTML = flaggedNodes
  s.refresh()
}
