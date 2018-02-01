// helper function to save graphs

const bubbleTxt = require('./bubbleTxt.js')
const jsonfileWrite = require('jsonfile').writeFile
const { dialog } = require('electron').remote

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
      jsonfileWrite(fileToSave, fullgraph, err => {
        if (err) {
          console.error(err.message)
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
