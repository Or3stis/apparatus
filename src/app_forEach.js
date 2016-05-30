/* global sigma */

// legacy code, has forEach functions that have been replace
// with for of
// here is where it begins
'use strict'

const jsonfile = require('jsonfile')
const nodeInfo = require('./src/nodeInfo.js')
const validation = require('./src/validation.js')
const buttonSelection = require('./src/buttonSelection.js')

// important, location of the json file
const fileToLoad = 'json/test.json'

// create the graph from the json file
sigma.parsers.json(fileToLoad, {
  renderer: {
    container: 'graph-container',
    type: 'canvas'
  },
  settings: {
    labelSize: 'fixed',
    labelThreshold: '9',
    edgeLabelSize: 'fixed',
    defaultLabelColor: '#8fa1b2',
    defaultEdgeLabelColor: '#8fa1b2'
  // must enable canvas in type for edge hovering
  // enableEdgeHovering: true,
  // edgeHoverSizeRatio: '2'
  }
}, (s) => {
  // store the initial colors of the nodes and edges
  for (let n of s.graph.nodes().values()) {
    n.originalColor = n.color
  }
  for (let e of s.graph.edges().values()) {
    e.originalColor = e.color
  }

  // functions when individual nodes are clicked
  s.bind('clickNode', (n) => {
    showNeighbor(n)
    nodeInfo(n)
    s.refresh()
  })

  // functions when the stage is clicked
  s.bind('clickStage', (e) => {
    returnColorNeighbor(e)
    s.refresh()
  })

  // drag nodes plugin
  sigma.plugins.dragNodes(s, s.renderers[0])
  // the rest of the node is to make dragable events to fire up
  // const dragListener = sigma.plugins.dragNodes(s, s.renderers[0])
  // dragListener.bind('startdrag', (event) => {
  //   // console.log(event)
  // })
  // dragListener.bind('drag', (event) => {
  //   // console.log(event)
  // })
  // dragListener.bind('drop', (event) => {
  //   // console.log(event)
  // })
  // dragListener.bind('dragend', (event) => {
  //   // console.log(event)
  // })

  // decleration of the buttons of the buttons
  let buttonSave = document.getElementById('saveButton')
  let buttonIoT = document.getElementById('iotButton')
  let buttonThreat = document.getElementById('threatButton')
  let buttonVuln = document.getElementById('vulnButton')
  let buttonAsset = document.getElementById('assetButton')
  let buttonMechanism = document.getElementById('mechanismButton')
  let buttonConstraint = document.getElementById('constraintButton')
  let buttonValidate = document.getElementById('validateButton')
  let buttonAdd = document.getElementById('addNode')
  let buttonEdge = document.getElementById('addEdge')

  buttonSave.addEventListener('click', function save () {
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
  })

  buttonIoT.addEventListener('click', () => {
    buttonSelection('iotNode', s)
  })
  buttonThreat.addEventListener('click', () => {
    buttonSelection('threat', s)
  })
  buttonVuln.addEventListener('click', () => {
    buttonSelection('vulnerability', s)
  })
  buttonAsset.addEventListener('click', () => {
    buttonSelection('asset', s)
  })
  buttonMechanism.addEventListener('click', () => {
    buttonSelection('mechanism', s)
  })
  buttonConstraint.addEventListener('click', () => {
    buttonSelection('constraint', s)
  })
  buttonValidate.addEventListener('click', () => {
    validation(s)
  })
  buttonAdd.addEventListener('click', () => {
    // s.graph.addNode({
    //   id: 'n50',
    //   label: 'n2',
    //   x: 0.4,
    //   y: 0.3,
    //   size: 3,
    //   color: '#8fa1b2',
    //   info: {
    //     aspect: 'application'
    //   }
    // })
    // // needed to for the selectin functions
    // s.graph.nodes().forEach((n) => {
    //   n.originalColor = n.color
    // })
    // s.graph.edges().forEach((e) => {
    //   e.originalColor = e.color
    // })
    // s.refresh()
    window.alert('uncomment')
  })
  buttonEdge.addEventListener('click', () => {
    // s.graph.addEdge({
    //   id: 'e50',
    //   target: 'n50',
    //   source: 'n1'
    // })
    // s.graph.nodes().forEach((n) => {
    //   n.originalColor = n.color
    // })
    // s.graph.edges().forEach((e) => {
    //   e.originalColor = e.color
    // })
    // s.refresh()
    window.alert('uncomment')
  })

  // last stage refresh
  s.refresh()

  // beginning of the functions

  // when a node is clicked the neighbors is checked
  // if neighbor true, the original color is kept
  // needs the sigmaNeighbor.js to work
  function showNeighbor (e) {
    let nodeId = e.data.node.id
    let toKeep = s.graph.neighbors(nodeId)

    toKeep[nodeId] = e.data.node

    for (let n of s.graph.nodes().values()) {
      if (toKeep[n.id]) {
        n.color = n.originalColor
      } else {
        n.color = '#2c2e3f'
      }
    }
    for (let e of s.graph.edges().values()) {
      if (toKeep[e.target]) {
        e.color = e.originalColor
      } else {
        e.color = '#2c2e3f'
      }
    }
  }

  // returns color when stage is clicked
  function returnColorNeighbor (e) {
    for (let n of s.graph.nodes().values()) {
      n.color = n.originalColor
    }
    for (let e of s.graph.edges().values()) {
      e.color = e.originalColor
    }
  }
})
