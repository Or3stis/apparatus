// keyboard shortcuts
'use strict'

// cmd + l, bring the console to focus
// alt + e, add edge
// backspace, delete node/edge

// const moduleValidation = require('./moduleValidation.js')
const searchAttribute = require('./searchAttribute.js')
const printChat = require('./printChat.js')

module.exports = function keyboard (cy, toggleUI) {
  // help menu
  const helpMenu = `• help: for options\n• validate: to validate
  module\n• alt + e: add an edge\n• backspace: delete node/edge\nalt + h:
  • toggle UI\n• meta + l: focus on console\n• search for attributes\n`

  const consoleId = document.getElementById('console-id')

  document.addEventListener('keydown', (event) => {
    // console.log(event.code)
    // hotkey to focus on the console
    if (event.metaKey === true && event.code === 'KeyL') {
      consoleId.focus()
    }

    // hot key to add edge
    if (event.altKey === true && event.code === 'KeyH') {
      toggleUI()
    }
    // Backspace deletion of nodes and edges
    // TODO must add focus on console because is deletes selected objects at any time.
    // if (event.code === 'Backspace') {
    //   (selectedEdge === '') ? deleteNode() : deleteEdge()
    // }
    // stuff for the console
    const input = document.getElementById('console-id').value
    // listens for you to press the ENTER key
    if (document.activeElement === consoleId && event.code === 'Enter') {
      document.getElementById('console-id').value = ''
      if (input === 'help' || input === 'options') {
        printChat(helpMenu)
      } else if (input === 'validate') {
        // moduleValidation(s)
        printChat('not implemented')
      } else if (input === '') {
        printChat('not valid command')
      } else if (input === 'clear') {
        document.getElementById('info-nodes-id').textContent = ''
      } else {
        searchAttribute(cy, input)
      }
      // else {
      //   document.getElementById('info-for-nodes-id').textContent = 'not valid command'
      // }
    }
  })
}
