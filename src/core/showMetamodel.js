// shows the current phase metamodel in a separate window
const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow

// metomdels figures
const dgnMeta = 'metamodels/dgn-model.png'
const dgnStateMeta = 'metamodels/dgn-state-model.png'
const impMeta = 'metamodels/imp-model.png'
const impStateMeta = 'metamodels/imp-state-model.png'

module.exports = function showMetamodel (phase) {
  // create the path to the metamodels
  const figurePath = __dirname.split('/')
  figurePath.pop() // removes the core directory
  figurePath.pop() // removes the src directory

  let url = ''
  // checks for the phase
  if (phase === 'design') {
    url = dgnMeta
  } else if (phase === 'design-state') {
    url = dgnStateMeta
  } else if (phase === 'implementation') {
    url = impMeta
  } else if (phase === 'implementation-state') {
    url = impStateMeta
  }
  // creates the window
  let win = new BrowserWindow({ width: 900, height: 700 })
  win.loadURL(`file://${figurePath.join('/')}/${url}`)
}
