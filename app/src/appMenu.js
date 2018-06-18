const electron = require('electron')
const app = electron.app

// url for the ASTo wiki
const docsURL = 'https://or3stis.github.io/apparatus/docs'
// url for issue reporting
const issueURL = 'https://github.com/CapriTechLimited/5G-SAT/issues'

const template = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      // { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      // {type: 'separator'},
      // {role: 'resetzoom'},
      // {role: 'zoomin'},
      // {role: 'zoomout'},
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [{ role: 'minimize' }, { role: 'close' }]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Apparatus documentation',
        click () {
          require('electron').shell.openExternal(docsURL)
          // console.log('tess')
        }
      },
      { type: 'separator' },
      {
        label: 'Report Issue',
        click () {
          require('electron').shell.openExternal(issueURL)
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services', submenu: [] },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })

  // Edit menu
  template[1].submenu.push(
    { type: 'separator' },
    {
      label: 'Speech',
      submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }]
    }
  )

  // Window menu
  template[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    // {role: 'zoom'},
    { type: 'separator' },
    { role: 'front' }
  ]
}

const menu = electron.Menu.buildFromTemplate(template)

module.exports = function appMenu () {
  // get the environmental variable
  const mode = process.env.NODE_ENV
  // only check for development mode
  if (mode !== 'development') {
    // enable the reload option in Views menu
    menu.items[2].submenu.items[0].visible = false
    menu.items[2].submenu.items[0].enabled = false
    // enable the force-reload option in Views menu
    menu.items[2].submenu.items[1].visible = false
    menu.items[2].submenu.items[1].enabled = false
  }
  electron.Menu.setApplicationMenu(menu)
}
