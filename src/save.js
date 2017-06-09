'use scrict'

const jsonfile = require('jsonfile')
const printChat = require('./printChat.js')

// saves graph to savedFile.json
module.exports = function save (cy, path) {
  let fileToSave = `${path}/graphs/savedFile.json`

  if (window.location.pathname === `${path}/implementation.html`) {
    fileToSave = `${path}/graphs/implementation/savedFile.json`
  } else if (window.location.pathname === `${path}/design.html`) {
    fileToSave = `${path}/graphs/design/savedFile.json`
  } else if (window.location.pathname === `${path}/design-state.html`) {
    fileToSave = `${path}/graphs/design-state/savedFile.json`
  }

  // parses graph and stores it as an object
  const fullgraph = cy.json()
  jsonfile.writeFile(fileToSave, fullgraph, (err) => {
    if (err) {
      throw err
    }
  })
  printChat('graph saved\n👍')
}
