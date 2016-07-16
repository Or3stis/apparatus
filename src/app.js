/* global sigma CustomShapes*/

// here is where it begins
'use strict'

const nodeInfo = require('./src/nodeInfo.js')
const showNeighbor = require('./src/showNeighbor.js')
const validation = require('./src/validation.js')
const moduleValidation = require('./src/moduleValidation.js')
const buttonSelection = require('./src/buttonSelection.js')
const moduleSelection = require('./src/moduleSelection.js')
const save = require('./src/save.js')
const addComponent = require('./src/addComponent.js')
const addEdge = require('./src/addEdge.js')
const addOwnership = require('./src/addOwnership.js')

// important, location of the json file
const fileToLoad = 'json/savedFile.json'

// global variables
// captures the id of last two selected nodes
let sourceNode = ''
let targetNode = ''
let selectedEdge = ''

// test button, remove at some point
let buttonTest = document.getElementById('testButton')
  // decleration of the buttons
let buttonSave = document.getElementById('saveButton')
let buttonValidate = document.getElementById('validateButton')
let buttonModuleValidate = document.getElementById('moduleValidateButton')
let buttonAddEdge = document.getElementById('addEdge')
let buttonAddOwns = document.getElementById('addOwnership')
let buttonDeleteNode = document.getElementById('deleteNode')
let buttonDeleteEdge = document.getElementById('deleteEdge')
let buttonStopAtlas = document.getElementById('stopAtlas')
let buttonStartAtlas = document.getElementById('startAtlas')

let select = document.getElementById('selection')
let moduleGroup = document.getElementById('moduleGroup')
let addStuff = document.getElementById('addStuff')

// create the graph from the json file
sigma.parsers.json(fileToLoad, {
  renderer: {
    container: document.getElementById('graph-container'),
    type: 'canvas'
  },
  settings: {
    labelSize: 'fixed',
    labelThreshold: 9,
    edgeLabelSize: 'fixed',
    defaultLabelColor: '#94a4a5',
    defaultEdgeLabelColor: '#94a4a5',
    mouseWheelEnabled: false,
    // must enable canvas in type for edge hovering
    enableEdgeHovering: true,
    edgeHoverSizeRatio: 3,
    doubleClickEnabled: false,
    // edgeHoverPrecision: 7,
    // edgeHoverSizeRatio: 9,
    enableCamera: false // does not move the graph in the container
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
    nodeInfo(n) // module
    footerSourceTargetNode(n)
    s.refresh()
  })

  // functions when the stage is clicked
  // s.bind('clickStage', () => {
  //   s.refresh()
  // })

  s.bind('clickEdge', (edge) => {
    selectedEdge = edge
    s.refresh()
  })

  s.bind('doubleClickNode', (n) => {
    showNeighbor(n, s) // module
    s.refresh()
  })
  s.bind('doubleClickStage', () => {
    returnColorNeighbor()
    s.refresh()
  })
  s.bind('rightClickNode', (n) => {
    window.alert('right click works')
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
    //   returnColorNeighbor()
    //   console.log(event)
    //   s.refresh()
    // })
    // dragListener.bind('dragend', (event, e) => {
    //   returnColorNeighbor()
    //   console.log(event)
    //   s.refresh()
    // })

  buttonSave.addEventListener('click', () => {
    save(s) // module
  })

  buttonValidate.addEventListener('click', () => {
    validation(s) // module
  })
  buttonModuleValidate.addEventListener('click', () => {
    moduleValidation(s) // module
  })

  buttonAddEdge.addEventListener('click', () => {
    addEdge(s, sourceNode, targetNode)
  })
  buttonAddOwns.addEventListener('click', () => {
    addOwnership(s, sourceNode, targetNode)
  })
  // TODO add backspace event listener
  buttonDeleteNode.addEventListener('click', () => {
    s.graph.dropNode(sourceNode)
    s.refresh()
  })
  buttonDeleteEdge.addEventListener('click', (e) => {
    s.graph.dropEdge(selectedEdge.data.edge.id)
    s.refresh()
  })

  buttonStopAtlas.addEventListener('click', () => {
    s.killForceAtlas2()
  })
  buttonStartAtlas.addEventListener('click', () => {
    s.startForceAtlas2()
  })
  // for the filter selection
  select.addEventListener('change', (e) => {
    buttonSelection(e.target.value, s)
  })
  // grouping of the modules
  moduleGroup.addEventListener('change', (input) => {
    moduleSelection(input, s)
  })
  addStuff.addEventListener('change', (e) => {
    addComponent(e.target.value, s)
    document.getElementById('infoForNodes').innerHTML = `${e.target.value}
      component added`
    // reset the component choice
    document.getElementById('addStuff').selectedIndex = ''
  })

  // last stage refresh
  CustomShapes.init(s) // required for the custom shapes
  s.refresh()

  // beginning of the functions

  // returns color to stage when clicked
  function returnColorNeighbor () {
    for (let n of s.graph.nodes().values()) {
      n.color = n.originalColor
    }
    for (let e of s.graph.edges().values()) {
      e.color = e.originalColor
    }
  }

  // it generates values used in addEdge/addOwn modules
  function footerSourceTargetNode (n) {
    // store the id of the selected node to be used for
    // addEdge function
    let nodeId = n.data.node.id

    targetNode = sourceNode // second selection
    sourceNode = nodeId // first selection

    // message displayed in the footer bar
    let selectedNodes = `source node: ${sourceNode} <br/>
      targetNode: ${targetNode}`
    document.getElementById('footerId').innerHTML = selectedNodes
  }

  buttonTest.addEventListener('click', () => {
    switchLightTheme()
  })
  function switchLightTheme () {
    document.getElementsByTagName('body')[0].style.background = '#f5f5f5'
    document.getElementsByTagName('body')[0].style.color = '#35495d'
    document.getElementsByClassName('graph')[0].style.background = '#ecf0f1'
    let but = document.getElementsByClassName('button')
    console.log(but)
    for (let i of Object.keys(but)) {
      but[i].style.color = '#35495d'
    }
  }
})
