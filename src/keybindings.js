'use strict'

const searchAttribute = require('./core/searchAttribute.js')
const printChat = require('./core/printChat.js')
const totalNodes = require('./core/totalNodes.js')
// const addEdge = require('./addEdge.js')

module.exports = function keyboard (cy, selectedNode, selectedEdge, toggleUI) {
  // help menu
  const helpMenu =
    '• help: for options\n• backspace: delete node/edge\n• meta + z: to undo last action\n• alt + h: toggle UI\n• meta + l: focus on console\n• search for attributes\n'

  const consoleId = document.getElementById('console-id')

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

  // keyboard listeners
  document.addEventListener('keydown', event => {
    // focus on console
    if (event.metaKey === true && event.code === 'KeyL') {
      consoleId.focus()
    }
    // toggle side panels
    if (event.altKey === true && event.code === 'KeyH') {
      toggleUI()
    }
    // Backspace deletion of nodes and edges
    if (document.activeElement !== consoleId && event.code === 'Backspace') {
      if (
        Object.keys(selectedNode.out).length === 0 &&
        Object.keys(selectedEdge.out).length !== 0
      ) {
        selectedEdge.out.remove()
      }
      if (
        Object.keys(selectedEdge.out).length === 0 &&
        Object.keys(selectedNode.out).length !== 0
      ) {
        selectedNode.out.remove()
      }
      totalNodes(cy) // global module
    }
    // add edge
    // if (event.altKey === true && event.code === 'KeyE') {
    //   addEdge(cy, sourceNode, targetNode)
    // }
    // restore elements with meta + z
    // BUG only restores the last node
    if (event.metaKey === true && event.code === 'KeyZ') {
      selectedNode.out.restore()
    }
    // console commands
    const input = document.getElementById('console-id').value
    // listens for the ENTER key
    if (document.activeElement === consoleId && event.code === 'Enter') {
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
  })
}
