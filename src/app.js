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
const switchTheme = require('./src/switchTheme.js')

// important, location of the json file for save
const fileToLoad = 'json/savedFile.json'

// global variables
// captures the id of last two selected nodes
let sourceNode = ''
let targetNode = ''
// stores the last selected edge
let selectedEdge = ''
// theme switcher
let toggleTheme = false

// test button, remove at some point
// let buttonTest = document.getElementById('testButton')

// decleration of the buttons
let buttonSave = document.getElementById('saveButton')
let buttonTheme = document.getElementById('themeButton')
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
    edgeHoverSizeRatio: 2,
    doubleClickEnabled: false,
    enableCamera: false // does not move the graph in the container
  }
}, (s) => {
  // store the initial colors of the nodes and edges
  s.graph.nodes().map(n => n.originalColor = n.color)
  s.graph.edges().map(e => e.originalColor = e.color)

  // functions when individual nodes are clicked
  s.bind('clickNode', (n) => {
    nodeInfo(n) // module
    footerSourceTargetNode(n)
    s.refresh()
  })
  s.bind('clickEdge', (edge) => {
    selectedEdge = edge // global value
    s.refresh()
  })
  s.bind('doubleClickNode', (n) => {
    showNeighbor(n, s) // module
    s.refresh()
  })
  s.bind('doubleClickStage', () => {
    returnColorNeighbor()
    // reset the component choice for the filters
    document.getElementById('selection').selectedIndex = ''
    document.getElementById('moduleGroup').selectedIndex = ''
    s.refresh()
  })
  s.bind('rightClickNode', (n) => {
    window.alert('right click works')
    s.refresh()
  })
  // functions when the stage is clicked
  // s.bind('clickStage', () => {
  //   s.refresh()
  // })

  // drag nodes plugin
  sigma.plugins.dragNodes(s, s.renderers[0])

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
    addEdge(s, sourceNode, targetNode) // module
  })
  buttonAddOwns.addEventListener('click', () => {
    addOwnership(s, sourceNode, targetNode) // module
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
    buttonSelection(e.target.value, s) // module
  })
  // grouping of the modules
  moduleGroup.addEventListener('change', (input) => {
    returnColorNeighbor() // function
    moduleSelection(input, s) // module
  })
  addStuff.addEventListener('change', (e) => {
    addComponent(e.target.value, s)
    document.getElementById('infoForNodes').innerHTML = `${e.target.value}
      component added`
    // reset the component choice
    document.getElementById('addStuff').selectedIndex = ''
  })

  buttonTheme.addEventListener('click', () => {
    if (toggleTheme === false) {
      switchTheme.switchLightTheme()
      toggleTheme = true
    } else {
      switchTheme.switchThemeDark()
      toggleTheme = false
    }
  })

  // last stage refresh
  CustomShapes.init(s) // required for the custom shapes
  s.refresh()

  // beginning of the functions

  // returns color to stage when clicked
  let returnColorNeighbor = () => {
    s.graph.nodes().map(n => n.color = n.originalColor)
    s.graph.edges().map(e => e.color = e.originalColor)
  }

  // it generates values used in addEdge/addOwn modules
  let footerSourceTargetNode = (n) => {
    // store the id of the selected node to be used for
    // addEdge function
    let nodeId = n.data.node.id

    targetNode = sourceNode // second selection
    sourceNode = nodeId // first selection

    // message displayed in the footer bar
    let selectedNodes = `source node: ${sourceNode} <br/>
      targetNode: ${targetNode} <br/>`
    document.getElementById('footerId').innerHTML = selectedNodes
  }
})
