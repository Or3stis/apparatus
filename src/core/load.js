'use strict'

const { dialog } = require('electron').remote
const fs = require('fs')
const initialize = require('../initialize.js')
const cyOptions = require('./cyOptions.js')

// loads graphs in js or json format
module.exports = function load (cy) {
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
      fs.readFile(fileName, 'utf-8', () => {
        cyOptions(cy, fileName) // defines the cy instance
        initialize(cy.out) // links the cy instance with the rest of the app
      })
    }
  )
}
