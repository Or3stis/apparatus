// shows the current phase's metamodel in a separate window

const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow

// metomdels figures
const dgnMeta = 'metamodels/dgn-model.png'
const impMeta = 'metamodels/imp-model.png'

module.exports = function showMetamodel (phase) {
  // create the path to the metamodels
  const metamodePath = __dirname.split('/')
  metamodePath.pop() // removes the core directory
  metamodePath.pop() // removes the src directory

  // creates the window
  const createWindow = url => {
    let win = new BrowserWindow({ width: 900, height: 700, show: false })
    win.loadURL(`file://${metamodePath.join('/')}/${url}`)
    win.on('ready-to-show', () => {
      win.show()
    })
  }
  // checks for the phase
  if (phase === 'design') {
    createWindow(dgnMeta)
  } else if (phase === 'implementation') {
    createWindow(impMeta)
  }
}
