'use strict'

const config = require('././config')
const buttonSelection = require('./buttonSelection')

// values of the color themes

// checks the values of the nodes for flagged values
const flaggedList = ['perception', 'application', 'wireless']

module.exports = function securityHints (s, toggleTheme) {
  // detects color theme
  (toggleTheme === true) ? config.lightLine : config.darkLine

  let flaggedNodes = ''

  s.graph.nodes().map((n) => {
    Object.keys(n.info).map((value) => {
      flaggedList.map((i) => {
        if (n.info[value] === i) {
          flaggedNodes += `• ${n.label} ⚑ ${i}<br/>`
          buttonSelection(n.info.type, s, toggleTheme)
        }
      })
    })
  })
  document.getElementById('info-for-nodes').innerHTML = flaggedNodes
}
