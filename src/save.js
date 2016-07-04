'use scrict'

const jsonfile = require('jsonfile')

// shows info of node in the div 'infoForNodes'
module.exports = function save (s) {
  const fileToSave = 'json/test.json'
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
