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
const keyboard = require('./src/keyboard.js')

// important, location of the json file for save
const fileToLoad = 'json/large.json'
document.getElementById('title-bar-id').innerHTML = `🚀 ${fileToLoad}`

// global variables
// captures the id of last two selected nodes
let sourceNode = ''
let targetNode = ''
// stores the last selected edge
let selectedEdge = ''
// theme switcher
let toggleTheme = false

// test button, remove at some point
// const buttonTest = document.getElementById('test-button')

// decleration of the buttons
const buttonSave = document.getElementById('save-button')
const buttonTheme = document.getElementById('theme-button')
const buttonValidate = document.getElementById('validate-button')
const buttonModuleValidate = document.getElementById('module-validate-button')
const buttonAddEdge = document.getElementById('add-edge')
const buttonAddOwns = document.getElementById('add-ownership')
const buttonDeleteNode = document.getElementById('delete-node')
const buttonDeleteEdge = document.getElementById('delete-edge')
const buttonStopAtlas = document.getElementById('stop-atlas')
const buttonStartAtlas = document.getElementById('start-atlas')

const select = document.getElementById('selection-id')
const moduleGroup = document.getElementById('module-group')
const addStuff = document.getElementById('add-stuff')

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
    // mouseWheelEnabled: true,
    // must enable canvas in type for edge hovering
    enableEdgeHovering: true,
    edgeHoverSizeRatio: 2,
    edgeHoverExtremities: true,
    doubleClickEnabled: false,
    enableCamera: true // does not move the graph in the container
  }
}, (s) => {
  // store the initial colors of the nodes and edges
  s.graph.nodes().map(n => n.originalColor = n.color)
  s.graph.edges().map(e => e.originalColor = e.color)

  let lastEdge = s.graph.edges().length

  // functions when individual nodes are clicked
  s.bind('clickNode', (n) => {
    nodeInfo(n) // module
    showSourceTargetNode(n)
    selectedEdge = '' // deselect edge
    s.refresh()
  })
  s.bind('clickEdge', (edge) => {
    selectedEdge = edge // global value
    targetNode = '' // deselect node
    s.refresh()
  })
  s.bind('doubleClickNode', (n) => {
    showNeighbor(n, s, toggleTheme) // module
    selectedEdge = '' // deselect edge
    s.refresh()
  })
  s.bind('doubleClickStage', () => {
    returnColorNeighbor()
    // reset the component choice for the filters
    document.getElementById('selection-id').selectedIndex = ''
    document.getElementById('module-group').selectedIndex = ''
    selectedEdge = '' // deselect edge
    targetNode = '' // deselect node
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

  buttonTheme.addEventListener('click', () => {
    if (toggleTheme === false) {
      switchTheme.switchLightTheme()
      toggleTheme = true
    } else {
      switchTheme.switchThemeDark()
      toggleTheme = false
    }
  })

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
    addEdge(s, sourceNode, targetNode, lastEdge) // module
    lastEdge = s.graph.edges().length
  })
  buttonAddOwns.addEventListener('click', () => {
    addOwnership(s, sourceNode, targetNode, lastEdge) // module
    lastEdge = s.graph.edges().length
  })
  buttonDeleteNode.addEventListener('click', () => {
    deleteNode()
  })
  buttonDeleteEdge.addEventListener('click', () => {
    deleteEdge()
  })

  buttonStopAtlas.addEventListener('click', () => {
    s.killForceAtlas2()
  })
  buttonStartAtlas.addEventListener('click', () => {
    s.startForceAtlas2()
  })
  // buttonTest.addEventListener('click', () => {
  //
  // })

  // for the filter selection
  select.addEventListener('change', (e) => {
    buttonSelection(e.target.value, s, toggleTheme) // module
    // reset moduleGroup selection
    document.getElementById('module-group').selectedIndex = ''
  })
  // grouping of the modules
  moduleGroup.addEventListener('change', (input) => {
    returnColorNeighbor() // function
    moduleSelection(input, s, toggleTheme) // module
    // reset selection selection
    document.getElementById('selection-id').selectedIndex = ''
  })
  addStuff.addEventListener('change', (e) => {
    addComponent(e.target.value, s)
    document.getElementById('info-for-nodes').innerHTML = `${e.target.value}
      component added`
    // reset the component choice
    document.getElementById('add-stuff').selectedIndex = ''
  })

  // last stage refresh
  CustomShapes.init(s) // required for the custom shapes
  s.refresh()

  // beginning of the functions

  // returns color to stage when clicked
  const returnColorNeighbor = () => {
    s.graph.nodes().map(n => n.color = n.originalColor)
    s.graph.edges().map(e => e.color = e.originalColor)
  }

  // it generates values used in addEdge/addOwn modules
  const showSourceTargetNode = (n) => {
    // store the id of the selected node to be used for
    // addEdge function
    sourceNode = targetNode // second selection
    targetNode = n.data.node // first selection

    // message displayed in the footer bar
    const selectedNodes = `source node: ${sourceNode.id} <br>
      targetNode: ${targetNode.id}`
    document.getElementById('legend-id').innerHTML = selectedNodes
  }

  // function for node deletion
  const deleteNode = () => {
    if (targetNode === '') {
      document.getElementById('info-for-nodes').innerHTML = 'no node selected'
    }
    s.graph.dropNode(targetNode.id)
    document.getElementById('info-for-nodes').innerHTML =
      `${targetNode.id} deleted`
    s.refresh()
  }
  // function for edge deletion
  const deleteEdge = () => {
    if (selectedEdge === '') {
      document.getElementById('info-for-nodes').innerHTML = 'no edge selected'
    }
    s.graph.dropEdge(selectedEdge.data.edge.id)
    document.getElementById('info-for-nodes').innerHTML =
      `${selectedEdge.data.edge.id} deleted`
    s.refresh()
  }

  // toggles side divs
  const toggleUI = () => {
    const sidebarStatus = document.getElementById('sidebar-id')
    const actionBarStatus = document.getElementById('action-bar-id')
    // const titleBarStatus = document.getElementById('title-bar-id')
    // const footerStatus = document.getElementById('footer-id')
    if (sidebarStatus.style.display === 'block') {
      sidebarStatus.style.display = 'none'
      actionBarStatus.style.display = 'none'
      // titleBarStatus.style.display = 'none'
      // document.body.style.background = '#3b4251'
      // footerStatus.style.display = 'none'
    } else {
      sidebarStatus.style.display = 'block'
      actionBarStatus.style.display = 'block'
      // titleBarStatus.style.display = 'block'
      // document.body.style.background = '#2e3440'
      // footerStatus.style.display = 'block'
    }
    s.refresh()
  }

  // enable keyboard shortcuts
  keyboard(s, addEdge, toggleUI, deleteNode, deleteEdge)
})
