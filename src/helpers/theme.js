// module to change color themes between light and dark themes

const config = require('../../config/config.js')
const graphStyle = require('../../config/graphStyle.js')

// changes only the UI color values
const setTheme = (color) => {
  // update color variables
  config.setColors(color)

  // update CSS root values
  document.documentElement.style.setProperty('--main-tx-color', config.text)
  document.documentElement.style.setProperty(
    '--main-bg-color',
    config.background
  )
  document.documentElement.style.setProperty(
    '--main-dark-bg-color',
    config.darkBackground
  )
  document.documentElement.style.setProperty('--blue-color', config.blue)
  document.documentElement.style.setProperty('--black-color', config.black)
  document.documentElement.style.setProperty('--gray-color', config.gray)
}

// changes the UI and graph colors
const setThemeGraph = (cy, color) => {
  // changes the UI theme
  setTheme(color)

  // changes the colors on the graph
  graphStyle.setStyle(color)
  cy.style(graphStyle.style)
}

module.exports = {
  setTheme: setTheme,
  setThemeGraph: setThemeGraph
}
