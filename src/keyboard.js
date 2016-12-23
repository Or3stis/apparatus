/* global targetNode, selectedEdge, sourceNode */
// keyboard shortcuts

// cmd + l, bring the console to focus
// alt + e, add edge
// backspace, delete node/edge

const moduleValidation = require('./moduleValidation.js')
const searchAttribute = require('./searchAttribute.js')

// help menu
const helpMenu = `• help: for options\n• validate: to validate
module\n•alt + e: add an edge\n• backspace: delete node/edge\nalt + h:
• toggle UI\n• meta + l: focus on console\n• search for attributes\n`

module.exports = function keyboard (s, addEdge, toggleUI, deleteNode, deleteEdge) {
  document.addEventListener('keydown', (event) => {
    // console.log(event.code)

    let lastEdge = s.graph.edges().length
    // hot key to add edge
    if (event.altKey === true && event.code === 'KeyE') {
      addEdge(s, sourceNode, targetNode, lastEdge) // module
      lastEdge = s.graph.edges().length
    } else if (event.altKey === true && event.code === 'KeyH') {
      toggleUI()
    }
    // Backspace deletion of nodes and edges
    if (event.code === 'Backspace') {
      (selectedEdge === '') ? deleteNode() : deleteEdge()
    }

    // hotkey to focus on the console
    if (event.metaKey === true && event.code === 'KeyL') {
      document.getElementById('console-id').focus()
    }
    // stuff for the console
    const input = document.getElementById('console-id').value
    // listens for you to press the ENTER key
    if (event.code === 'Enter') {
      // console.log(input)
      document.getElementById('console-id').value = ''
      if (input === 'help' || input === 'options') {
        document.getElementById('info-for-nodes-id').textContent = helpMenu
      } else if (input === 'validate') {
        moduleValidation(s)
      } else if (input === '') {
        document.getElementById('info-for-nodes-id').textContent = 'not valid command'
      } else {
        searchAttribute(s, input)
      }
      // else {
      //   document.getElementById('info-for-nodes-id').textContent = 'not valid command'
      // }
    }
  })
}
