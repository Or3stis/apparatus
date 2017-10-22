// helper function to save graphs

const jsonfile = require('jsonfile')
const { dialog } = require('electron').remote
const printChatText = require('./printChatText.js')

// saves graph
module.exports = function save (cy) {
  // parses graph and stores it as an object
  const fullgraph = cy.json()

  const titleBar = document.getElementById('title-bar-id')

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
          printChatText('graph saved\n👍')
          // remove the change indicator on save
          titleBar.innerHTML = titleBar.innerHTML.replace(' •', ' ')
        }
      })
    }
  )
}
