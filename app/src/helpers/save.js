// helper function to save graphs

const bubbleTxt = require('./bubbleTxt.js')
const jsonfileWrite = require('jsonfile').writeFile
const { dialog } = require('electron').remote

/**
 * saves graph
 *
 * @param {Object} cy cytoscape instance
 */
module.exports = function save (cy) {
  // parses graph and stores it as an object
  const fullGraph = cy.json()

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
      jsonfileWrite(fileToSave, fullGraph, err => {
        if (err) {
          dialog.showErrorBox('Error while saving the file', err.message)
        } else {
          // remove the change indicator on save
          const titleBar = document.getElementById('title-bar-id')
          titleBar.innerHTML = titleBar.innerHTML.replace(' •', ' ')
        }
        bubbleTxt('graph saved\n👍')
      })
    }
  )
}
