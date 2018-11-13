// loads the home menu

import { setTheme } from '../src/helpers/theme'
import { homeMenu } from '../src/homeMenu'

const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

// set the first color paint theme
setTheme(settings.colorTheme)

// load up the menu screen
homeMenu()
