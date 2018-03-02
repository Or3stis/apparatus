// settings window

const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow
// const settings = require('../../settings/settings.js')

module.exports = function settingsWindow () {
  const settingsURL = `file://${__dirname}/settings.html`
  // create window
  const createWindow = url => {
    let win = new BrowserWindow({ width: 570, height: 600, show: false })
    win.loadURL(url)
    win.on('ready-to-show', win.show)

    win.on('closed', () => {
      win = null
    })
  }

  // if an window is open
  const windowIsOpen = url => {
    let isWindowActive = false
    const activeWins = BrowserWindow.getAllWindows()
    Object.values(activeWins).map(activeWin => {
      if (activeWin.getURL() === url) {
        isWindowActive = true
      }
    })
    if (isWindowActive === false) createWindow(url)
  }
  windowIsOpen(settingsURL)
}
