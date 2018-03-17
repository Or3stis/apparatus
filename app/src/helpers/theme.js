// module to change color themes between light and dark
// used the color values from settings/userSettings.js

const settings = require('../../settings/userSettings.js')
const graphStyle = require('../../settings/graphStyle.js')

/**
 * changes only the UI color values
 *
 * @param {string} color light or dark
 */
const setTheme = color => {
  // update color variables
  settings.setColors(color)

  // update CSS root values
  document.documentElement.style.setProperty('--main-tx-color', settings.text)
  document.documentElement.style.setProperty(
    '--main-bg-color',
    settings.background
  )
  document.documentElement.style.setProperty(
    '--main-dark-bg-color',
    settings.darkBackground
  )
  document.documentElement.style.setProperty('--blue-color', settings.blue)
  document.documentElement.style.setProperty('--black-color', settings.black)
}

/**
 * changes the UI and graph colors
 *
 * @param {Object} cy cytoscape instance
 * @param {string} color light or dark
 */
const setThemeGraph = (cy, color) => {
  // changes the UI theme
  setTheme(color)

  // changes the colors on the graph
  graphStyle.setStyle(color)
  cy.style(graphStyle.style)
}

module.exports = {
  setTheme,
  setThemeGraph
}
