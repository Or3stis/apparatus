'use scrict'

const jsonfile = require('jsonfile')

// saves graph to savedFils.json
module.exports = function save (s) {
  const fileToSave = 'json/savedFile.json'
  // parses graph and stores it as an object
  const fullgraph = {
    nodes: s.graph.nodes(),
    edges: s.graph.edges()
  }
  jsonfile.writeFile(fileToSave, fullgraph, (err) => {
    if (err) {
      throw err
    }
  })
}
