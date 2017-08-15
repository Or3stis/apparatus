'use strict'

const jsonfile = require('jsonfile')
const { dialog } = require('electron').remote
const printChat = require('./printChat.js')

// saves graph
module.exports = function save (cy) {
  // parses graph and stores it as an object
  const fullgraph = cy.json()

  dialog.showSaveDialog(
    {
      filters: [
        {
          name: 'javascript',
          extensions: ['json']
        }
      ]
    },
    fileToSave => {
      jsonfile.writeFile(fileToSave, fullgraph, err => {
        if (err) {
          console.error(err.message)
        } else {
          printChat('graph saved\n👍')
        }
      })
    }
  )
}
