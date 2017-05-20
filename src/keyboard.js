// keyboard shortcuts
'use strict'

// cmd + l, bring the console to focus
// alt + e, add edge
// backspace, delete node/edge

// const moduleValidation = require('./moduleValidation.js')
const searchAttribute = require('./searchAttribute.js')

// help menu
const helpMenu = `• help: for options\n• validate: to validate
module\n• alt + e: add an edge\n• backspace: delete node/edge\nalt + h:
• toggle UI\n• meta + l: focus on console\n• search for attributes\n`

const consoleId = document.getElementById('console-id')

module.exports = function keyboard (cy, toggleUI) {
  document.addEventListener('keydown', (event) => {
    // console.log(event.code)

    // hot key to add edge
    if (event.altKey === true && event.code === 'KeyH') {
      toggleUI()
    }
    // Backspace deletion of nodes and edges
    // TODO must add focus on console because is deletes selected objects at any time.
    // if (event.code === 'Backspace') {
    //   (selectedEdge === '') ? deleteNode() : deleteEdge()
    // }

    // hotkey to focus on the console
    if (event.metaKey === true && event.code === 'KeyL') {
      consoleId.focus()
    }
    // stuff for the console
    const input = document.getElementById('console-id').value
    const htmlElement = document.getElementById('info-nodes-id')
    // listens for you to press the ENTER key
    if (document.activeElement === consoleId && event.code === 'Enter') {
      document.getElementById('console-id').value = ''
      if (input === 'help' || input === 'options') {
        htmlElement.textContent = helpMenu
      } else if (input === 'validate') {
        // moduleValidation(s)
        htmlElement.textContent = 'not implemented'
      } else if (input === '') {
        htmlElement.textContent = 'not valid command'
      } else {
        searchAttribute(cy, input)
      }
      // else {
      //   document.getElementById('info-for-nodes-id').textContent = 'not valid command'
      // }
    }
  })
}
