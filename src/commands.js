'use strict'

const searchAttribute = require('./core/searchAttribute.js')
const printChat = require('./core/printChat.js')

module.exports = function console (cy) {
  // help menu
  const helpMenu =
    '• help: for options\n• backspace: delete node/edge\n• meta + z: to undo last action\n• alt + h: toggle UI\n• meta + l: focus on console\n• search for attributes\n'

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

  const consoleId = document.getElementById('console-id')
  // console commands
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

  document.addEventListener('keydown', event => {
    // focus on the consoleId
    if (event.metaKey === true && event.code === 'KeyL') {
      consoleId.focus()
    }
    // listens for the ENTER key
    if (document.activeElement === consoleId && event.code === 'Enter') {
      commands()
    }
  })
}
