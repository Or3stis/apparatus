'use strict'

const {dialog} = require('electron').remote
const initialize = require('../initialize.js')
const cyOptions = require('./cyOptions.js')

// loads graphs in js or json format
module.exports = function load (cy, phase) {
  // check platform
  let dialogOptions = []
  if (process.platform === 'darwin') {
    dialogOptions = ['openFile', 'openDirectory']
  } else {
    dialogOptions = ['openFile']
  }

  dialog.showOpenDialog(
    {
      properties: [...dialogOptions],
      filters: [{ name: 'javascript', extensions: ['json', 'js'] }]
    },
    fileNames => {
      if (fileNames === undefined) return

      const fileName = fileNames[0]
      cyOptions(cy, fileName) // defines the cy instance
      initialize(cy.out, phase) // links the cy instance with the rest of the app
    }
  )
}
