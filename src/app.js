'use strict'

const { dialog } = require('electron').remote
const fs = require('fs')
const cytoscape = require('cytoscape')

const initialize = require('./src/initialize.js')

// configuration for the graphs style
const graphStyle = require(`./config/graphStyle.js`)

// uncomment for debugging
// const testGraph = './graphs/implementation/smartHome.js'

let cy = {}

const cyOptions = (file) => {
  let model = require(file)
  cy = cytoscape({
    container: document.getElementById('graph-container'),
    autounselectify: true,
    elements: model.elements, // loads the elements object of the graph
    style: graphStyle.style
  })
  // graph layout
  cy.layout({
    name: 'cose'
  })
}
const loadCy = () => {
  let dialogOptions = []
  if (process.platform === 'darwin') {
    dialogOptions = ['openFile', 'openDirectory']
  } else {
    dialogOptions = ['openFile']
  }
  dialog.showOpenDialog(
    {
      properties: [...dialogOptions],
      filters: [{ name: 'javascript', extensions: ['json', 'js'] }]
    },
    fileNames => {
      if (fileNames === undefined) return

      const fileName = fileNames[0]
      fs.readFile(fileName, 'utf-8', () => {
        cyOptions(fileName)
        // links the cy instance with the rest of the app
        initialize(cy)
      })
    }
  )
}
const start = () => {
  // loads a file on start
  loadCy() // comment for debugging

  // cyOptions(testGraph) // uncomment for debugging
  // initialize(cy) // uncomment for debugging
}

start()
