// settingsuration values of the app

const settings = {}

// graph color values
settings.setColors = color => {
  // Atom's dark color theme
  if (color === 'dark') {
    settings.text = '#abb2bf'
    settings.background = '#1b2836'
    settings.darkBackground = '#141d26'
    settings.black = '#3b4251'
    settings.gray = '#abb2bf'
    settings.blue = '#61afef'
    settings.red = '#be5046'
    settings.orange = '#cf8772'
    settings.green = '#98c379'
    settings.yellow = '#d19a66'
    settings.magenta = '#c678dd'
    settings.cyan = '#56b6c2'
  // Atom's light color theme
  } else if (color === 'light') {
    settings.text = '#383a42'
    settings.background = '#fafafa'
    settings.darkBackground = '#eaeaeb'
    settings.black = '#a0a1a7'
    settings.gray = '#abb2bf'
    settings.blue = '#4078f2'
    settings.red = '#e45649'
    settings.orange = '#cf8772'
    settings.green = '#50a14f'
    settings.yellow = '#986901'
    settings.magenta = '#a381ff'
    settings.cyan = '#0184bc'
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
