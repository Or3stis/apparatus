// loads the home menu

const homeMenu = require('./src/homeMenu.js')
const theme = require('./src/helpers/theme.js')
const config = require('./config/config.js')

// makes the initial color render
theme.setTheme(config.colorTheme)
// loads up the menu screen
homeMenu()
