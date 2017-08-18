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

module.exports = function (
  cy,
  selectedNode,
  selectedEdge,
  srcNode,
  trgNode,
  phase
) {
  // help menu for macOs
  const helpMenuDarwin = `• focus on console: ⌘L
• add Edge: ⌘E
• delete element: ⌘⌫
• restore node: ⌘Z
• save as: ⇧⌘S
• clear sidebar: clear
• keyword search for attributes`

  // help menu for Linux and Windows
  const helpMenu = `• focus on console: ctrl+L
• add Edge: ctrl+E
• delete element: ctrl+backspace
• restore node: ctrl+Z
• save as: shift+ctrl+S
• clear sidebar: clear
• keyword search for attributes`

  // adds the url of the github wiki
  const wikiURLButton = `click to view <button id='url-button' class='startButtons' style='color: ${config.text}; background-color:${config.background}; width: 40px; height: 25px;'>wiki</button>`

  const consoleId = document.getElementById('console-id')
  const labelId = document.getElementById('input-label-id')
  // indicate focus on console
  consoleId.addEventListener('focus', e => {
    labelId.style.color = config.blue
  })
  consoleId.addEventListener('blur', () => {
    labelId.style.color = config.text
  })

  // loses the focus from the console when tapping
  cy.on('tap', selection => consoleId.blur())

  // console commands
  const commands = () => {
    const input = document.getElementById('console-id').value
    document.getElementById('console-id').value = ''

    switch (input) {
      case 'help':
        // checks the platform to display the corrent help menu
        process.platform === 'darwin'
          ? printChat(helpMenuDarwin)
          : printChat(helpMenu)

        printChatHTML(wikiURLButton)
        // opens the wiki page with the default browser
        document.getElementById('url-button').addEventListener('click', () => {
          require('electron').shell.openExternal(config.wikiUrl)
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
    // checks the platform to assing the meta key
    process.platform === 'darwin'
      ? (key = event.metaKey)
      : (key = event.ctrlKey)

    // focus on the consoleId
    if (key === true && event.code === 'KeyL') {
      consoleId.focus()
    }

    // add edge
    if (key === true && event.code === 'KeyE') {
      // checks for undefined selections
      if (Object.keys(srcNode.out).length !== 0) {
        if (phase === 'design') {
          addDgnEdge(cy, srcNode.out, trgNode.out)
        } else if (phase === 'design-state') {
          addDgnStateEdge(cy, srcNode.out, trgNode.out)
        } else if (phase === 'implementation') {
          addImpEdge(cy, srcNode.out, trgNode.out)
        } else if (phase === 'implementation-state') {
          addImpStateEdge(cy, srcNode.out, trgNode.out)
        }
        cy.edges().addClass('label-edges')
      }
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
