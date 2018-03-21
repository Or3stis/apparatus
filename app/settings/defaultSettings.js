// settings of ASTo

const settings = {
  darkText: '#abb2bf',
  darkBgrd: '#282c34',
  darkDarkBgrd: '#21252b',
  darkBlack: '#3b4251',
  darkGray: '#abb2bf',
  darkBlue: '#61afef',
  darkRed: '#be5046',
  darkOrange: '#cf8772',
  darkGreen: '#98c379',
  darkYellow: '#d19a66',
  darkMagenta: '#c678dd',
  darkCyan: '#56b6c2',
  // light color theme
  lightText: '#383a42',
  lightBgrd: '#fafafa',
  lightDarkBgrd: '#eaeaeb',
  lightBlack: '#a0a1a7',
  lightGray: '#abb2bf',
  lightBlue: '#4078f2',
  lightRed: '#e45649',
  lightOrange: '#cf8772',
  lightGreen: '#50a14f',
  lightYellow: '#986901',
  lightMagenta: '#a381ff',
  lightCyan: '#12a3b4',
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
  colorTheme: 'dark',
  // number of maximum bubbles in the message area
  maxNumberOfBubbles: 15,
  // url for the ASTo wiki
  docsURL: 'https://or3stis.github.io/apparatus/docs',
  // url for searching vulnerabilities
  cveSearchUrl: 'http://cve.circl.lu/api/search/'
}

module.exports = settings
