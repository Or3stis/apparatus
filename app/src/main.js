const electron = require('electron')
const ipc = require('electron').ipcMain
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// const settings = require('../settings/userSettings.js')
const appMenu = require('./appMenu.js')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// mainWindow.webContents.on('crashed', function () { })

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: '#282c34',
    width: 1200,
    height: 745,
    minWidth: 800,
    minHeight: 660,
    titleBarStyle: 'hidden',
    show: false
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // capture events from the open windows
  ipc.on('window-settings', (event, message) => {
    mainWindow.send('change-settings', message)
  })
  // create the application's menu
  appMenu()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})
