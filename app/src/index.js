// loads the home menu

const homeMenu = require('./homeMenu.js')
const theme = require('./helpers/theme.js')
const settings = require('../settings/settings.js')

// set the first color paint theme
theme.setTheme(settings.colorTheme)

// load up the menu screen
homeMenu()
