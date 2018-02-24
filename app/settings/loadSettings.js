// allows modification of the settings by the user

const settings = require('./settings')

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
  console.log(defaultColor.value)
})
