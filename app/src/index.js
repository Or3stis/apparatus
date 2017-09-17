// loads the home menu

const homeMenu = require('./homeMenu.js')
const theme = require('./helpers/theme.js')
const config = require('../settings/config.js')

// makes the initial color render
theme.setTheme(config.colorTheme)
// loads up the menu screen
homeMenu()
