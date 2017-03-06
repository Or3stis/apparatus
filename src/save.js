'use scrict'

const jsonfile = require('jsonfile')
const fileToSave = `${__dirname}/savedFile.json`

// TODO fix the directory issue

// saves graph to savedFile.json
module.exports = function save (cy) {
  // parses graph and stores it as an object
  const fullgraph = cy.json()
  jsonfile.writeFile(fileToSave, fullgraph, (err) => {
    if (err) {
      throw err
    }
  })
  document.getElementById('info-for-nodes-id').textContent = 'graph saved 👍'
}
