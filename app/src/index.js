// loads the home menu

const theme = require('../src/helpers/theme.js')
const homeMenu = require('../src/homeMenu.js')

const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

// set the first color paint theme
theme.setTheme(settings.colorTheme)

// load up the menu screen
homeMenu()
