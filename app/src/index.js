// loads the home menu

const homeMenu = require('./homeMenu.js')
const theme = require('./helpers/theme.js')

const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/settings.js`)

// set the first color paint theme
theme.setTheme(settings.colorTheme)

// load up the menu screen
homeMenu()
