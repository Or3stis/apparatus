const config = require('./config')

'use strict'

// values of the color themes
let shadowColor = ''

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s, toggleTheme) {
  // detects color theme
  shadowColor = (toggleTheme === true) ? config.lightLine : config.darkLine

  let nodes = ''

  s.graph.nodes().map((n) => {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} • ${n.label} <br/>`
    } else {
      n.color = shadowColor
    }
  })
  s.graph.edges().map((e) => {
    e.color = shadowColor
  })
  document.getElementById('info-for-nodes').innerHTML = nodes
  s.refresh()
}
