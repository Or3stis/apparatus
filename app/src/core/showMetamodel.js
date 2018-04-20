// TODO cannot restore focus on a minimized window
const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow

// metomdels figures
const dgnMeta = 'metamodels/dgn-model.png'
const impMeta = 'metamodels/imp-model.png'

/**
 * shows the current phase's metamodel in a separate window
 *
 * @param {string} phase engineering phase
 */
module.exports = function showMetamodel (phase) {
  // create the path to the metamodels
  const metamodelPath = __dirname.split('/')
  metamodelPath.pop() // removes the core directory
  metamodelPath.pop() // removes the src directory
  const finalPath = `file://${metamodelPath.join('/')}`

  // creates the window for the metamodel
  const createWindow = url => {
    let win = new BrowserWindow({ width: 900, height: 700, show: false })
    win.loadURL(`${finalPath}/${url}`)

    win.on('ready-to-show', () => {
      win.show()
      win.focus()
    })

    win.on('closed', () => {
      win = null
    })
  }

  // if an active metamodel exists
  const metamodelIsActive = url => {
    let isWindowActive = false
    const activeWins = BrowserWindow.getAllWindows()
    Object.values(activeWins).map(activeWin => {
      if (activeWin.getURL() === `${finalPath}/${url}`) {
        isWindowActive = true
      }
    })
    if (isWindowActive === false) createWindow(url)
  }

  // checks for the phase to show the correct metamodel
  if (phase === 'design') {
    metamodelIsActive(dgnMeta)
  } else if (phase === 'implementation') {
    metamodelIsActive(impMeta)
  }
}
