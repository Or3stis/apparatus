'use scrict'

const jsonfile = require('jsonfile')
const fileToSave = `${__dirname}/savedFile.json`
// console.log(fileToSave)

// saves graph to savedFile.json
module.exports = function save (cy) {
  // parses graph and stores it as an object
  // const fullgraph = {
  //   nodes: cy.nodes(),
  //   edges: cy.edges()
  // }
  const fullgraph = cy.json()
  jsonfile.writeFile(fileToSave, fullgraph, (err) => {
    if (err) {
      throw err
    }
  })
}
