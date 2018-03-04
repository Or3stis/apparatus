// settings of ASTo

const settings = {}

settings.darkText = '#abb2bf'
settings.darkBgrd = '#1b2836'
settings.darkDarkBgrd = '#141d26'
settings.darkBlack = '#3b4251'
settings.darkGray = '#abb2bf'
settings.darkBlue = '#61afef'
settings.darkRed = '#be5046'
settings.darkOrange = '#cf8772'
settings.darkGreen = '#98c379'
settings.darkYellow = '#d19a66'
settings.darkMagenta = '#c678dd'
settings.darkCyan = '#56b6c2'
// light color theme
settings.lightText = '#383a42'
settings.lightBgrd = '#fafafa'
settings.lightDarkBgrd = '#eaeaeb'
settings.lightBlack = '#a0a1a7'
settings.lightGray = '#abb2bf'
settings.lightBlue = '#4078f2'
settings.lightRed = '#e45649'
settings.lightOrange = '#cf8772'
settings.lightGreen = '#50a14f'
settings.lightYellow = '#986901'
settings.lightMagenta = '#a381ff'
settings.lightCyan = '#0184bc'

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
