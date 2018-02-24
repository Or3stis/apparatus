// allows modification of the settings by the user

const settings = require('./settings')

// dark theme color values
const darkText = document.getElementById('dark-text')
darkText.value = settings.text
const darkBackground = document.getElementById('dark-background')
darkBackground.value = settings.background
const darkDarkBackground = document.getElementById('dark-dark-background')
darkDarkBackground.value = settings.darkBackground
const darkBlack = document.getElementById('dark-black')
darkBlack.value = settings.black
const darkGray = document.getElementById('dark-gray')
darkGray.value = settings.gray
const darkBlue = document.getElementById('dark-blue')
darkBlue.value = settings.blue
const darkRed = document.getElementById('dark-red')
darkRed.value = settings.red
const darkOrange = document.getElementById('dark-orange')
darkOrange.value = settings.orange
const darkYellow = document.getElementById('dark-yellow')
darkYellow.value = settings.yellow
const darkMagenta = document.getElementById('dark-magenta')
darkMagenta.value = settings.magenta
const darkCyan = document.getElementById('dark-cyan')
darkCyan.value = settings.cyan

// light theme color values
const lightText = document.getElementById('light-text')
lightText.value = settings.text
const lightBackground = document.getElementById('light-background')
lightBackground.value = settings.background
const lightDarkBackground = document.getElementById('light-dark-background')
lightDarkBackground.value = settings.darkBackground
const lightBlack = document.getElementById('light-black')
lightBlack.value = settings.black
const lightGray = document.getElementById('light-gray')
lightGray.value = settings.gray
const lightBlue = document.getElementById('light-blue')
lightBlue.value = settings.blue
const lightRed = document.getElementById('light-red')
lightRed.value = settings.red
const lightOrange = document.getElementById('light-orange')
lightOrange.value = settings.orange
const lightYellow = document.getElementById('light-yellow')
lightYellow.value = settings.yellow
const lightMagenta = document.getElementById('light-magenta')
lightMagenta.value = settings.magenta
const lightCyan = document.getElementById('light-cyan')
lightCyan.value = settings.cyan

// default color
const defaultColor = document.getElementById('default-color')
defaultColor.value = settings.colorTheme

const numberBubbles = document.getElementById('number-bubbles')
numberBubbles.value = settings.maxNumberOfBubbles

const cveUrl = document.getElementById('cve-url')
cveUrl.value = settings.cveSearchUrl
