'use strict'

const searchAttribute = require('./core/searchAttribute.js')
const printChat = require('./core/printChat.js')
const core = require('./core/core.js')
const save = require('./core/save.js')

module.exports = function console (cy, selectedNode, selectedEdge) {
  // help menu
  const helpMenu = `• help: for options
• meta + l: focus on console
• meta + backspace: deletes element
• meta + z: restore node
• shift + meta + s: save as model
• search for attributes`

  // loses the focus from the console when tapping
  cy.on('tap', 'node', selection => {
    consoleId.blur()
  })
  cy.on('tap', 'edge', selection => {
    consoleId.blur()
  })
  cy.on('tap', selection => {
    consoleId.blur()
  })

  // console commands
  const consoleId = document.getElementById('console-id')
  const commands = () => {
    const input = document.getElementById('console-id').value
    document.getElementById('console-id').value = ''
    switch (input) {
      case 'help' || 'options':
        printChat(helpMenu)
        break
      case '':
        break
      case 'clear':
        document.getElementById('info-nodes-id').textContent = ''
        break
      default:
        searchAttribute(cy, input)
    }
  }

  // keydown listeners
  document.addEventListener('keydown', event => {
    // focus on the consoleId
    if (event.metaKey === true && event.code === 'KeyL') {
      consoleId.focus()
    }
    if (event.metaKey === true && event.code === 'Backspace') {
      core.deleteEl(cy, selectedNode, selectedEdge)
    }
    if (event.metaKey === true && event.code === 'KeyZ') {
      // restore elements with meta + z
      core.restoreNode()
    }
    if (
      event.shiftKey === true &&
      event.metaKey === true &&
      event.code === 'KeyS'
    ) {
      save(cy)
    }
    // listens for the ENTER key when focus is on the console
    if (document.activeElement === consoleId && event.code === 'Enter') {
      commands()
    }
  })
}
