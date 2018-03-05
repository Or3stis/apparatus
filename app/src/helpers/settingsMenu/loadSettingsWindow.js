// allows modification of the settings by the user
const remote = require('electron').remote
const fs = require('fs')

const settings = require('../../../settings/userSettings.js')

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
  // console.log(defaultColor.value)
  const toWrite = `// settings of ASTo

const settings = {}

settings.darkText = '${darkText.value}'
settings.darkBgrd = '${darkBackground.value}'
settings.darkDarkBgrd = '${darkDarkBackground.value}'
settings.darkBlack = '${darkBlack.value}'
settings.darkGray = '${darkGray.value}'
settings.darkBlue = '${darkBlue.value}'
settings.darkRed = '${darkRed.value}'
settings.darkOrange = '${darkOrange.value}'
settings.darkGreen = '${darkGreen.value}'
settings.darkYellow = '${darkYellow.value}'
settings.darkMagenta = '${darkMagenta.value}'
settings.darkCyan = '${darkCyan}'
// light color theme
settings.lightText = '${lightText.value}'
settings.lightBgrd = '${lightBackground.value}'
settings.lightDarkBgrd = '${lightDarkBackground.value}'
settings.lightBlack = '${lightBlack.value}'
settings.lightGray = '${lightGray.value}'
settings.lightBlue = '${lightBlue.value}'
settings.lightRed = '${lightRed.value}'
settings.lightOrange = '${lightOrange.value}'
settings.lightGreen = '${lightGreen.value}'
settings.lightYellow = '${lightYellow.value}'
settings.lightMagenta = '${lightMagenta.value}'
settings.lightCyan = '${lightCyan.value}'

// graph color values
settings.setColors = color => {
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
}

// default color theme
settings.colorTheme = 'dark'
// first theme paint
settings.setColors(settings.colorTheme)

// number of maximum bubbles in the message area
settings.maxNumberOfBubbles = 15

// urls

// url for the ASTo wiki
settings.docsURL = 'https://or3stis.github.io/apparatus/docs'
// url for searching vulnerabilities
settings.cveSearchUrl = 'http://cve.circl.lu/api/search/'

module.exports = settings
`

  fs.writeFile('./app/settings/userSettings.js', toWrite, err => {
    if (err) throw err
  })

  // close the window
  const win = remote.getCurrentWindow()
  win.close()
})

// capture the cancel event
const cancelBtn = document.getElementById('settings-cancel')
cancelBtn.addEventListener('click', () => {
  const win = remote.getCurrentWindow()
  win.close()
})

// capture the settings restore event
const restoreBtn = document.getElementById('settings-restore')
restoreBtn.addEventListener('click', () => {
  // TODO uncomment when electron supports node.js < 8.5
  // fs.copyFile('./app/settings/defaultSettings.js', './app/settings/userSettings.js', (err) => {
  //   if (err) throw err
  // })
  fs
    .createReadStream('./app/settings/defaultSettings.js')
    .pipe(fs.createWriteStream('./app/settings/userSettings.js'))

  // close window
  const win = remote.getCurrentWindow()
  win.close()
})
