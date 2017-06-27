'use strict'

const searchAttribute = require('./searchAttribute.js')
const printChat = require('./printChat.js')
const totalNodes = require('./totalNodes.js')
const addEdge = require('./addEdge.js')

module.exports = function keyboard (cy, toggleUI) {
  // help menu
  const helpMenu = '• help: for options\n• alt + e: add an edge\n• backspace: delete node/edge\n• meta + z: to undo last action\n• alt + h: toggle UI\n• meta + l: focus on console\n• search for attributes\n'

  const consoleId = document.getElementById('console-id')

  let selectedNode = ''
  let sourceNode = ''
  let targetNode = ''

  cy.on('tap', 'node', (selection) => {
    selectedNode = selection.target[0]
    selectedEdge = ''
    sourceNode = targetNode // second selection
    targetNode = selectedNode.data().id
    // loses the focus from the console when tapping a node
    consoleId.blur()
  })
  let selectedEdge = ''
  cy.on('tap', 'edge', (selection) => {
    selectedEdge = selection.target[0]
    selectedNode = ''
    // loses the focus from the console when tapping an edge
    consoleId.blur()
  })
  // empties the selection values when clicking the graph
  cy.on('tap', (selection) => {
    // loses the focus from the console when tapping the stage
    consoleId.blur()
    if (selection.target === cy) {
      selectedEdge = ''
      selectedNode = ''
    }
  })

  // keyboard listeners
  document.addEventListener('keydown', (event) => {
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
      if (selectedNode === '' && selectedEdge !== '') {
        selectedEdge.remove()
      }
      if (selectedEdge === '' && selectedNode !== '') {
        selectedNode.remove()
      }
      totalNodes(cy) // global module
    }
    // add edge
    if (event.altKey === true && event.code === 'KeyE') {
      addEdge(cy, sourceNode, targetNode)
    }
    // restore elements with meta + z
    // BUG only restores the last node
    if (event.metaKey === true && event.code === 'KeyZ') {
      selectedNode.restore()
    }

    // console commands
    const input = document.getElementById('console-id').value
    // listens for the ENTER key
    if (document.activeElement === consoleId && event.code === 'Enter') {
      document.getElementById('console-id').value = ''
      switch (input) {
        case ('help' || 'options'):
          printChat(helpMenu)
          break
        case (''):
          break
        case ('clear'):
          document.getElementById('info-nodes-id').textContent = ''
          break
        default:
          searchAttribute(cy, input)
      }
    }
  })
}
