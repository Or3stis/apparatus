// module to change color themes between light and dark
const { app } = require('electron').remote

import * as graphStyle from '../settings/graphStyle'

const userDataPath = app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

/**
 * changes only the UI color values
 *
 * @param {string} color light or dark
 */
const setTheme = (color: string) => {
  // update color variables
  settings.setColors(color)

  // update CSS root values
  document.documentElement.style.setProperty('--main-tx-color', settings.text)
  document.documentElement.style.setProperty(
    '--main-bg-color',
    settings.background,
  )
  document.documentElement.style.setProperty(
    '--main-dark-bg-color',
    settings.darkBackground,
  )
  document.documentElement.style.setProperty('--blue-color', settings.blue)
  document.documentElement.style.setProperty('--black-color', settings.black)
}

/** changes the UI and graph colors */
const setThemeGraph = (cy: any, color: string) => {
  // changes the UI theme
  setTheme(color)

  // changes the colors on the graph
  graphStyle.setStyle(color)
  cy.style(graphStyle.style)
}

export {
  setTheme,
  setThemeGraph,
}
