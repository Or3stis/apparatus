// loads the home menu

const homeMenu = require('./homeMenu.js')
const theme = require('./helpers/theme.js')
const config = require('../settings/config.js')

// set the first color paint theme
theme.setTheme(config.colorTheme)

// load up the menu screen
homeMenu()
