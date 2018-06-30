// keybindings and command prompt options
const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

// require core modules
const searchAttribute = require('./core/searchAttribute.js')
const showMetamodel = require('./core/showMetamodel.js')
const deleteRestoreConcepts = require('./core/deleteRestoreConcepts.js')
const generateReport = require('./core/generateReport.js')

// require settings urls
const urls = require('../settings/urls.js')

// require helper modules
const bubbleHTML = require('./helpers/bubbleHTML.js')
const save = require('./helpers/save.js')
const theme = require('./helpers/theme.js')
const watcher = require('./helpers/watcher.js')
const settingsWindow = require('./helpers/settingsMenu/createSettingsWindow.js')

// require implementation modules
const insights = require('./imp/insights.js')

// require helpers for the buttons
const buttonHelpers = require('./buttonHelpers.js')

/**
 * instantiation of keybinding
 *
 * @param {Object} cy cytoscape instance
 * @param {Object} selectedNode selected node
 * @param {Object} selectedEdge selected edge
 * @param {Object} srcNode source node
 * @param {Object} trgNode target node
 * @param {string} phase engineering analysis phase
 * @param {Object} graphNodes initial state of the graph
 */
module.exports = function (
  cy,
  selectedNode,
  selectedEdge,
  srcNode,
  trgNode,
  phase,
  graphNodes
) {
  // help menu for macOs
  const helpMenuMacOS = `• focus on console: <b>⌘L</b>
• add Edge: <b>⌘E</b>
• delete element: <b>⌘⌫</b>
• restore node: <b>⌘Z</b>
• save as: <b>⇧⌘S</b>
• view phase metamodel <b>:metamodel</b>
• change color theme <b>:toggle</b>
• clear sidebar <b>:clear</b>
• model validation <b>:validate</b>
• security insights <b>:insights</b>
• generate security report <b>:report</b>
• configure settings <b>:settings</b>
• search for attributes <b><keyword></b>`

  // help menu for Linux and Windows
  const helpMenu = `• focus on console: <b>ctrl+L</b>
• add Edge: <b>ctrl+E</b>
• delete element: <b>ctrl+backspace</b>
• restore node: <b>ctrl+Z</b>
• save as: <b>shift+ctrl+S</b>
• view phase metamodel <b>:metamodel</b>
• change color theme <b>:toggle</b>
• clear sidebar <b>:clear</b>
• model validation <b>:validate</b>
• security insights <b>:insights</b>
• generate security report <b>:report</b>
• configure settings <b>:settings</b>
• search for attributes <b><keyword></b>`

  // adds the url of ASTo docs
  const docsURLBtn = `click to view <button id='url-button' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>docs</button>`

  const cmdID = document.getElementById('cmd-id')
  const labelId = document.getElementById('input-label-id')
  // indicate focus on the console by making the > blue
  cmdID.addEventListener('focus', e => {
    labelId.style.color = settings.blue
  })
  // indicate loss of focus on the console by making the > default color
  cmdID.addEventListener('blur', () => {
    labelId.style.color = settings.text
  })

  // removes the focus from the console when tapping on the graph container
  cy.on('tap', selection => cmdID.blur())

  /** instantiation of console commands */
  const commands = () => {
    const input = document.getElementById('cmd-id').value
    document.getElementById('cmd-id').value = ''

    // declare input of console commands
    switch (input) {
      case 'help':
        // checks the platform to display the help menu
        process.platform === 'darwin'
          ? bubbleHTML(helpMenuMacOS)
          : bubbleHTML(helpMenu)

        bubbleHTML(docsURLBtn)
        // opens the wiki page with the default browser
        document.getElementById('url-button').addEventListener('click', () => {
          require('electron').shell.openExternal(urls.docsURL)
        })
        break
      case ':insights':
        if (phase === 'implementation') {
          insights(cy)
        }
        break
      case ':validate':
        buttonHelpers.validateHelper(cy, phase)
        break
      case ':metamodel':
        showMetamodel(phase)
        break
      case ':toggle':
        if (settings.colorTheme === 'dark') {
          theme.setThemeGraph(cy, 'light')
          settings.colorTheme = 'light'
        } else {
          theme.setThemeGraph(cy, 'dark')
          settings.colorTheme = 'dark'
        }
        break
      case ':clear':
        document.getElementById('message-area-id').textContent = ''
        break
      case ':report':
        generateReport(cy)
        break
      case ':settings':
        settingsWindow()
        break
      case '':
        break
      default:
        searchAttribute(cy, input)
    }
  }

  // declare keydown listeners
  document.addEventListener('keydown', event => {
    let metaKey = ''
    // checks the platform to assign the correct meta key
    process.platform === 'darwin'
      ? (metaKey = event.metaKey)
      : (metaKey = event.ctrlKey)

    // focus on the app console
    if (metaKey === true && event.code === 'KeyL') {
      cmdID.focus()
    }
    // add an edge specific to each phase
    if (metaKey === true && event.code === 'KeyE') {
      // checks for undefined selections
      if (Object.keys(srcNode.out).length !== 0) {
        buttonHelpers.addEdge(cy, srcNode.out, trgNode.out, phase)
        cy.edges().addClass('label-edges')
      }
    }
    // delete nodes or edges with meta + Backspace
    if (metaKey === true && event.code === 'Backspace') {
      deleteRestoreConcepts.deleteConcept(
        cy,
        selectedNode.out,
        selectedEdge.out
      )

      watcher.nodes(graphNodes, cy)
    }
    // restore nodes with meta + z
    if (metaKey === true && event.code === 'KeyZ') {
      deleteRestoreConcepts.restoreNode(cy)

      watcher.nodes(graphNodes, cy)
    }
    // open settings on meta + ,
    if (metaKey === true && event.keyCode === 188) {
      settingsWindow()
    }
    // save graph on shift + meta + s
    if (event.shiftKey === true && metaKey === true && event.code === 'KeyS') {
      save(cy)
    }
    // listens for the ENTER key when focus is on the console
    if (document.activeElement === cmdID && event.code === 'Enter') {
      commands()
    }
    // developer mode message when a user wants to reload the app, meta + r
    if (process.env.NODE_ENV !== 'development') {
      if (metaKey === true && event.code === 'KeyR') {
        bubbleHTML(
          '<strong>Window reload</strong> is disabled in default mode.'
        )
        bubbleHTML('Start the app in <strong>developer mode</strong>.')
        bubbleHTML('<strong>npm run dev</strong>')
      }
    }
  })
}
