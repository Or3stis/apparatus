// allows modification of the settings by the user
const remote = require('electron').remote
const ipc = require('electron').ipcRenderer
const fs = require('fs')

const theme = require('../theme.js')

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/settings.js`)

/* consistent color theme with the main window */
const applyColorTheme = () => {
  if (settings.colorTheme === 'dark') {
    theme.setTheme('dark')
  } else if (settings.colorTheme === 'light') {
    theme.setTheme('light')
  }
}

applyColorTheme()

// dark theme color values
const darkText = document.getElementById('dark-text')
darkText.value = settings.darkText
const darkBackground = document.getElementById('dark-background')
darkBackground.value = settings.darkBgrd
const darkDarkBackground = document.getElementById('dark-dark-background')
darkDarkBackground.value = settings.darkDarkBgrd
const darkBlack = document.getElementById('dark-black')
darkBlack.value = settings.darkBlack
const darkGray = document.getElementById('dark-gray')
darkGray.value = settings.darkGray
const darkBlue = document.getElementById('dark-blue')
darkBlue.value = settings.darkBlue
const darkRed = document.getElementById('dark-red')
darkRed.value = settings.darkRed
const darkOrange = document.getElementById('dark-orange')
darkOrange.value = settings.darkOrange
const darkGreen = document.getElementById('dark-green')
darkGreen.value = settings.darkGreen
const darkYellow = document.getElementById('dark-yellow')
darkYellow.value = settings.darkYellow
const darkMagenta = document.getElementById('dark-magenta')
darkMagenta.value = settings.darkMagenta
const darkCyan = document.getElementById('dark-cyan')
darkCyan.value = settings.darkCyan

// light theme color values
const lightText = document.getElementById('light-text')
lightText.value = settings.lightText
const lightBackground = document.getElementById('light-background')
lightBackground.value = settings.lightBgrd
const lightDarkBackground = document.getElementById('light-dark-background')
lightDarkBackground.value = settings.lightDarkBgrd
const lightBlack = document.getElementById('light-black')
lightBlack.value = settings.lightBlack
const lightGray = document.getElementById('light-gray')
lightGray.value = settings.lightGray
const lightBlue = document.getElementById('light-blue')
lightBlue.value = settings.lightBlue
const lightRed = document.getElementById('light-red')
lightRed.value = settings.lightRed
const lightOrange = document.getElementById('light-orange')
lightOrange.value = settings.lightOrange
const lightGreen = document.getElementById('light-green')
lightGreen.value = settings.lightGreen
const lightYellow = document.getElementById('light-yellow')
lightYellow.value = settings.lightYellow
const lightMagenta = document.getElementById('light-magenta')
lightMagenta.value = settings.lightMagenta
const lightCyan = document.getElementById('light-cyan')
lightCyan.value = settings.lightCyan

// default color
const defaultColor = document.getElementById('default-color')
defaultColor.value = settings.colorTheme

const numberBubbles = document.getElementById('number-bubbles')
numberBubbles.value = settings.maxNumberOfBubbles

const cveUrl = document.getElementById('cve-url')
cveUrl.value = settings.cveSearchUrl

// capture the save event
const saveBtn = document.getElementById('settings-save')

saveBtn.addEventListener('click', () => {
  const newSettings = `// settings of ASTo

const settings = {
  darkText: '${darkText.value}',
  darkBgrd: '${darkBackground.value}',
  darkDarkBgrd: '${darkDarkBackground.value}',
  darkBlack: '${darkBlack.value}',
  darkGray: '${darkGray.value}',
  darkBlue: '${darkBlue.value}',
  darkRed: '${darkRed.value}',
  darkOrange: '${darkOrange.value}',
  darkGreen: '${darkGreen.value}',
  darkYellow: '${darkYellow.value}',
  darkMagenta: '${darkMagenta.value}',
  darkCyan: '${darkCyan.value}',
  // light color theme
  lightText: '${lightText.value}',
  lightBgrd: '${lightBackground.value}',
  lightDarkBgrd: '${lightDarkBackground.value}',
  lightBlack: '${lightBlack.value}',
  lightGray: '${lightGray.value}',
  lightBlue: '${lightBlue.value}',
  lightRed: '${lightRed.value}',
  lightOrange: '${lightOrange.value}',
  lightGreen: '${lightGreen.value}',
  lightYellow: '${lightYellow.value}',
  lightMagenta: '${lightMagenta.value}',
  lightCyan: '${lightCyan.value}',
  // graph color values
  setColors: color => {
    // dark color theme
    if (color === 'dark') {
      settings.text = settings.darkText
      settings.background = settings.darkBgrd
      settings.darkBackground = settings.darkDarkBgrd
      settings.black = settings.darkBlack
      settings.gray = settings.darkGray
      settings.blue = settings.darkBlue
      settings.red = settings.darkRed
      settings.orange = settings.darkOrange
      settings.green = settings.darkGreen
      settings.yellow = settings.darkYellow
      settings.magenta = settings.darkMagenta
      settings.cyan = settings.darkCyan
      // light color theme
    } else if (color === 'light') {
      settings.text = settings.lightText
      settings.background = settings.lightBgrd
      settings.darkBackground = settings.lightDarkBgrd
      settings.black = settings.lightBlack
      settings.gray = settings.lightGray
      settings.blue = settings.lightBlue
      settings.red = settings.lightRed
      settings.orange = settings.lightOrange
      settings.green = settings.lightGreen
      settings.yellow = settings.lightYellow
      settings.magenta = settings.lightMagenta
      settings.cyan = settings.lightCyan
    }
  },
  // default color theme
  colorTheme: '${defaultColor.value}',
  // number of maximum bubbles in the message area
  maxNumberOfBubbles: ${numberBubbles.value},
  // url for the ASTo wiki
  docsURL: 'https://or3stis.github.io/apparatus/docs',
  // url for searching vulnerabilities
  cveSearchUrl: '${cveUrl.value}'
}

module.exports = settings
`

  fs.writeFile(`${userDataPath}/userSettings.js`, newSettings, err => {
    if (err) throw err
  })

  // close the window
  const win = remote.getCurrentWindow()
  ipc.send('window-settings', 'save')
  win.close()
})

// capture the cancel event
const cancelBtn = document.getElementById('settings-cancel')

cancelBtn.addEventListener('click', () => {
  const win = remote.getCurrentWindow()
  ipc.send('window-settings', 'cancel')
  win.close()
})

// capture the settings restore event
const restoreBtn = document.getElementById('settings-restore')

restoreBtn.addEventListener('click', () => {
  const defaultSettings = require('../../../settings/defaultSettings.js')
  const defaultSettingsNormalize = JSON.stringify(defaultSettings.settings)
    .replace(/(?:\\[rn])+/g, '\r\n')
    .replace(/"/g, '')

  fs.writeFile(`${userDataPath}/settings.js`, defaultSettingsNormalize, err => {
    if (err) throw err
  })

  // close window
  const win = remote.getCurrentWindow()
  ipc.send('window-settings', 'restore')
  win.close()
})
