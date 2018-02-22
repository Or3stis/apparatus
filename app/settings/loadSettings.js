const settings = require('./settings')

const defaultColor = document.getElementById('default-color')

const theme = document.createElement('span')
const themeValue = document.createTextNode(settings.colorTheme)

theme.appendChild(themeValue)
defaultColor.appendChild(theme)
