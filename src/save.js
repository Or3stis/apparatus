'use scrict'

const jsonfile = require('jsonfile')
const printChat = require('./printChat.js')

// saves graph to savedFile.json
module.exports = function save (cy, path) {
  const fileToSave = `${path}/graphs/savedFile.json`
  // parses graph and stores it as an object
  const fullgraph = cy.json()
  jsonfile.writeFile(fileToSave, fullgraph, (err) => {
    if (err) {
      throw err
    }
  })
  printChat('graph saved 👍')
}
