const { BrowserWindow } = require('electron').remote

/** creates the settings window */
module.exports = function settingsWindow () {
  const settingsURL = `file://${__dirname}/settings.html`

  const createWindow = url => {
    let win = new BrowserWindow({
      backgroundColor: '#282c34',
      width: 570,
      height: 700,
      show: false
    })
    win.loadURL(url)

    win.on('ready-to-show', () => {
      win.show()
      win.focus()
    })

    win.on('closed', () => {
      win = null
    })
  }

  /**
   * check if the settings window is open before creating a new one
   *
   * @param {string} url
   */
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
