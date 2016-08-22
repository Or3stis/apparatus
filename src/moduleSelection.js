'use strict'

// values of the color themes
const dark = '#424A57'
const light = '#e0e0e0'
let shadowColor = ''

// grouping of the module components
let groupArray = []
const networkArray = ['device', 'network connection', 'micronet',
  'net', 'unidentified node']
const securityArray = ['asset', 'threat', 'vulnerability', 'mechanism',
  'constraint', 'secure micronet', 'objective', 'malicious actor'
]
const socialArray = ['actor']

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (input, s, toggleTheme) {
  // detects color theme
  shadowColor = (toggleTheme === true) ? light : dark

  switch (input.target.value) {
    case 'network':
      groupArray = networkArray
      break
    case 'security':
      groupArray = securityArray
      break
    case 'social':
      groupArray = socialArray
      break
    case 'network-security':
      groupArray = networkArray + securityArray
      break
    case 'network-social':
      groupArray = networkArray + socialArray
      break
    default:
      groupArray = []
      console.error('error in moduleSelection.js')
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
