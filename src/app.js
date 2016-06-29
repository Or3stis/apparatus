/* global sigma CustomShapes*/

// here is where it begins
'use strict'

const jsonfile = require('jsonfile')
const nodeInfo = require('./src/nodeInfo.js')
const validation = require('./src/validation.js')
const moduleValidation = require('./src/moduleValidation.js')
const buttonSelection = require('./src/buttonSelection.js')

// important, location of the json file
const fileToLoad = 'json/sectro.json'

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
  let buttonValidate = document.getElementById('validateButton')
  let buttonModuleValidate = document.getElementById('moduleValidateButton')
  let buttonAddThreat = document.getElementById('addThreat')
  let buttonAddConstraint = document.getElementById('addConstraint')
  let buttonAddVuln = document.getElementById('addVuln')
  let buttonAddMechanism = document.getElementById('addMechanism')
  let buttonAddDevice = document.getElementById('addDevice')
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

  buttonValidate.addEventListener('click', () => {
    validation(s)
  })
  buttonModuleValidate.addEventListener('click', () => {
    moduleValidation(s)
  })

  // TODO: add a function that finds the last node id
  // then add it to the created node
  buttonAddThreat.addEventListener('click', () => {
    s.graph.addNode({
      id: 'n50',
      label: 'n50 Threat',
      x: 0,
      y: 0,
      size: 3,
      color: '#eb5368',
      info: {
        type: 'threat'
      }
    })
    // needed to for the selection functions
    s.graph.nodes().forEach((n) => {
      n.originalColor = n.color
    })
    s.graph.edges().forEach((e) => {
      e.originalColor = e.color
    })
    s.refresh()
    // window.alert('uncomment')
  })
  buttonAddConstraint.addEventListener('click', () => {
    window.alert('uncomment')
  })
  buttonAddVuln.addEventListener('click', () => {
    window.alert('uncomment')
  })
  buttonAddMechanism.addEventListener('click', () => {
    // s.graph.addNode({
    //   id: 'n51',
    //   label: 'n51 mechanism',
    //   x: 0,
    //   y: 0,
    //   size: 3,
    //   color: '#70bf53',
    //   info: {
    //     type: 'security mechanism'
    //   }
    // })
    // // needed to for the selection functions
    // s.graph.nodes().forEach((n) => {
    //   n.originalColor = n.color
    // })
    // s.graph.edges().forEach((e) => {
    //   e.originalColor = e.color
    // })
    // s.refresh()
    window.alert('uncomment')
  })
  buttonAddDevice.addEventListener('click', () => {
    window.alert('uncomment')
  })
  buttonEdge.addEventListener('click', (e) => {
    s.graph.addEdge({
      id: 'e50',
      target: 'n50',
      source: 'n1'
    })
  })

  // last stage refresh
  CustomShapes.init(s) // required for the shapes
  s.refresh()

  // TODO test for the atlas
  let buttonStopAtlas = document.getElementById('stopAtlas')
  buttonStopAtlas.addEventListener('click', () => {
    s.killForceAtlas2()
  })
  let buttonStartAtlas = document.getElementById('startAtlas')
  buttonStartAtlas.addEventListener('click', () => {
    s.startForceAtlas2()
  })

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
        n.color = '#424A57'
      }
    }
    for (let e of s.graph.edges().values()) {
      if (toKeep[e.target]) {
        e.color = e.originalColor
      } else {
        e.color = '#424A57'
      }
    }
  }

  // returns color to stage when clicked
  function returnColorNeighbor (e) {
    for (let n of s.graph.nodes().values()) {
      n.color = n.originalColor
    }
    for (let e of s.graph.edges().values()) {
      e.color = e.originalColor
    }
  }

  // test functions to check double and right click
  s.bind('doubleClickNode', (n) => {
    window.alert('double click works')
    s.refresh()
  })
  s.bind('rightClickNode', (n) => {
    window.alert('right click works')
    s.refresh()
  })

  // for the search function
  // add filter options with arrow down
  let select = document.getElementById('selection')

  select.addEventListener('change', (e) => {
    buttonSelection(e.target.value, s)
  })
})
