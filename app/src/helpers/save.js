// helper function to save graphs

const jsonfile = require('jsonfile')
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
      jsonfile.writeFile(fileToSave, fullgraph, err => {
        if (err) {
          console.error(err.message)
        } else {
          // remove the change indicator on save
          const titleBar = document.getElementById('title-bar-id')
          titleBar.innerHTML = titleBar.innerHTML.replace(' •', ' ')
        }
      })
    }
  )
}
