'use strict'

const dark = '#424A57'
const light = '#bdc3c7'
let shadowColor = ''

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (input, s, toggleTheme) {
  // detects color theme
  shadowColor = (toggleTheme === true) ? light : dark

  // grouping of the modules
  let groupArray = []
  const networkArray = ['device', 'network connection', 'micronet',
    'net', 'unidentified node']
  const securityArray = ['asset', 'threat', 'vulnerability', 'mechanism',
    'constraint', 'secure micronet', 'objective'
  ]
  const socialArray = ['actor', 'malicious actor']

  if (input.target.value === 'network') {
    groupArray = networkArray
  } else if (input.target.value === 'security') {
    groupArray = securityArray
  } else if (input.target.value === 'social') {
    groupArray = socialArray
  } else if (input.target.value === 'network-security') {
    groupArray = networkArray + securityArray
  } else if (input.target.value === 'network-social') {
    groupArray = networkArray + socialArray
  } else {
    groupArray = []
  }

  s.graph.nodes().map((n) => {
    if (groupArray.indexOf(n.info.type) !== -1) {
      n.color = n.originalColor
    } else {
      n.color = shadowColor
    }
  })
  s.refresh()
}
