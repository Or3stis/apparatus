'use strict'

const config = require('./config')

// search the attributes of the node inside the graph
// and highlight the corresponding nodes

// initial color values
let shadowColor = ''

module.exports = function securityHints (s, term, toggleTheme) {
  // checks the color theme
  shadowColor = (toggleTheme === true) ? config.lightLine : config.darkLine

  let searchNodes = ''
  s.graph.nodes().map((n) => {
    // paints every node as the shadow color
    n.color = shadowColor
    Object.keys(n.info).map((value) => {
      if (n.info[value] === term) {
        searchNodes += `• ${n.label}<br/>`
        // repaints the flagged nodes in their original color
        n.color = n.originalColor
      }
    })
  })
  // paints the edges the shadow color
  s.graph.edges().map(e => e.color = shadowColor)
  document.getElementById('info-for-nodes').innerHTML = searchNodes
  s.refresh()
}
