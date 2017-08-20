const config = require('../../config/config.js')
const graphStyle = require('../../config/graphStyle.js')

const setTheme = (cy, color) => {
  config.setColors(color)
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

  graphStyle.setStyle(color)
  cy.style(graphStyle.style)
}

module.exports = {
  setTheme: setTheme
}
