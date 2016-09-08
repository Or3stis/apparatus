/* global targetNode, selectedEdge, sourceNode */
// keyboard shortcuts

// cmd + l, bring the console to focus
// cmd + e, add edge
const moduleValidation = require('./moduleValidation.js')

// help menu
const helpMenu = 'only validate works'

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
        document.getElementById('info-for-nodes').innerHTML = helpMenu
      } else if (input === 'validate') {
        moduleValidation(s)
      } else {
        document.getElementById('info-for-nodes').innerHTML = 'not valid'
      }
    }
  })
}
