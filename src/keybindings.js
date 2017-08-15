'use strict'

const config = require('../config/config.js')

const core = require('./core/core.js')
const searchAttribute = require('./core/searchAttribute.js')

const printChat = require('./helpers/printChat.js')
const printChatHTML = require('./helpers/printChatHTML.js')
const save = require('./helpers/save.js')

const addDgnEdge = require('./design/addDgnEdge.js')
const addDgnStateEdge = require('./design-state/addDgnStateEdge.js')
const addImpEdge = require('./implementation/addImpEdge.js')
const addImpStateEdge = require('./implementation-state/addImpStateEdge.js')

module.exports = function console (cy, selectedNode, selectedEdge, phase) {
  // help menu
  const helpMenuDarwin = `• focus on console: ⌘L
• add Edge: ⌘E
• delete element: ⌘⌫
• restore node: ⌘Z
• save as: ⇧⌘S
• clear sidebar: clear
• keyword search for attributes`

  const helpMenu = `• focus on console: ctrl+L
• add Edge: ctrl+E
• delete element: ctrl+backspace
• restore node: ctrl+Z
• save as: shift+ctrl+S
• clear sidebar: clear
• keyword search for attributes`

  // adds the url for the wiki
  const wikiURLButton = `click to view <button id='url-button' class='startButtons' style='background-color:#3b4251; width: 40px; height: 25px;'>wiki</button>`
  const url = 'https://github.com/Or3stis/apparatus/wiki'

  const consoleId = document.getElementById('console-id')
  const labelId = document.getElementById('input-label-id')
  // indicate focus on console
  consoleId.addEventListener('focus', e => {
    labelId.style.color = config.blue
  })
  consoleId.addEventListener('blur', () => {
    labelId.style.color = config.text
  })

  let srcNode = []
  let trgNode = []
  // loses the focus from the console when tapping
  cy.on('tap', 'node', selection => {
    consoleId.blur()

    // stores the selected nodes for the addEdge keybinding
    srcNode = trgNode // second selection
    trgNode = selectedNode.out.data()
  })
  cy.on('tap', 'edge', selection => {
    consoleId.blur()
  })
  cy.on('tap', selection => {
    consoleId.blur()
  })

  // console commands
  const commands = () => {
    const input = document.getElementById('console-id').value
    document.getElementById('console-id').value = ''
    switch (input) {
      case 'help':
        if (process.platform === 'darwin') {
          printChat(helpMenuDarwin)
        } else {
          printChat(helpMenu)
        }
        printChatHTML(wikiURLButton)
        document.getElementById('url-button').addEventListener('click', () => {
          require('electron').shell.openExternal(url)
        })
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
    let key = ''
    if (process.platform === 'darwin') {
      key = event.metaKey
    } else {
      key = event.ctrlKey
    }

    // focus on the consoleId
    if (key === true && event.code === 'KeyL') {
      consoleId.focus()
    }

    // add edge
    if (key === true && event.code === 'KeyE') {
      if (phase === 'design') {
        addDgnEdge(cy, srcNode, trgNode)
      } else if (phase === 'design-state') {
        addDgnStateEdge(cy, srcNode, trgNode)
      } else if (phase === 'implementation') {
        addImpEdge(cy, srcNode, trgNode)
      } else if (phase === 'implementation-state') {
        addImpStateEdge(cy, srcNode, trgNode)
      }
      cy.edges().addClass('label-edges')
    }

    // delete elements
    if (key === true && event.code === 'Backspace') {
      core.deleteEl(cy, selectedNode.out, selectedEdge.out)
    }

    if (key === true && event.code === 'KeyZ') {
      // restore elements with meta + z
      core.restoreNode()
    }

    if (event.shiftKey === true && key === true && event.code === 'KeyS') {
      save(cy)
    }

    // listens for the ENTER key when focus is on the console
    if (document.activeElement === consoleId && event.code === 'Enter') {
      commands()
    }
  })
}
