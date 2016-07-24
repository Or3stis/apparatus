'use strict'

// // values of the color themes
const dark = '#424A57'
const light = '#e0e0e0'
let shadowColor = ''

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function buttonSelection (classification, s, toggleTheme) {
  // detects color theme
  shadowColor = (toggleTheme === true) ? light : dark

  let nodes = ''

  s.graph.nodes().map((n) => {
    if (n.info.type === classification) {
      n.color = n.originalColor
      nodes = `${nodes} > ${n.label} <br/>`
    } else {
      n.color = shadowColor
    }
  })
  s.graph.edges().map(e => e.color = shadowColor)
  document.getElementById('infoForNodes').innerHTML = nodes
  s.refresh()
}
