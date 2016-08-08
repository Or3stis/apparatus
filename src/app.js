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
// const keyboard = require('./src/keyboard.js')

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
const buttonSave = document.getElementById('saveButton')
const buttonTheme = document.getElementById('themeButton')
const buttonValidate = document.getElementById('validateButton')
const buttonModuleValidate = document.getElementById('moduleValidateButton')
const buttonAddEdge = document.getElementById('addEdge')
const buttonAddOwns = document.getElementById('addOwnership')
const buttonDeleteNode = document.getElementById('deleteNode')
const buttonDeleteEdge = document.getElementById('deleteEdge')
const buttonStopAtlas = document.getElementById('stopAtlas')
const buttonStartAtlas = document.getElementById('startAtlas')

const select = document.getElementById('selection')
const moduleGroup = document.getElementById('moduleGroup')
const addStuff = document.getElementById('addStuff')

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

  let lastEdge = s.graph.edges().length

  // functions when individual nodes are clicked
  s.bind('clickNode', (n) => {
    nodeInfo(n) // module
    footerSourceTargetNode(n)
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
    document.getElementById('selection').selectedIndex = ''
    document.getElementById('moduleGroup').selectedIndex = ''
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
    lastEdge += 1
  })
  buttonAddOwns.addEventListener('click', () => {
    addOwnership(s, sourceNode, targetNode, lastEdge) // module
    lastEdge += 1
  })

  // TODO add backspace event listener
  buttonDeleteNode.addEventListener('click', () => {
    deleteNode()
  })
  buttonDeleteEdge.addEventListener('click', (e) => {
    deleteEdge()
  })

  buttonStopAtlas.addEventListener('click', () => {
    s.killForceAtlas2()
  })
  buttonStartAtlas.addEventListener('click', () => {
    s.startForceAtlas2()
  })

  // for the filter selection
  select.addEventListener('change', (e) => {
    buttonSelection(e.target.value, s, toggleTheme) // module
    // reset moduleGroup selection
    document.getElementById('moduleGroup').selectedIndex = ''
  })
  // grouping of the modules
  moduleGroup.addEventListener('change', (input) => {
    returnColorNeighbor() // function
    moduleSelection(input, s, toggleTheme) // module
    // reset selection selection
    document.getElementById('selection').selectedIndex = ''
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
  const returnColorNeighbor = () => {
    s.graph.nodes().map(n => n.color = n.originalColor)
    s.graph.edges().map(e => e.color = e.originalColor)
  }

  // it generates values used in addEdge/addOwn modules
  const footerSourceTargetNode = (n) => {
    // store the id of the selected node to be used for
    // addEdge function
    sourceNode = targetNode // second selection
    targetNode = n.data.node // first selection

    // message displayed in the footer bar
    const selectedNodes = `source node: ${sourceNode.id} <br>
      targetNode: ${targetNode.id}`
    document.getElementById('footerId').innerHTML = selectedNodes
  }

  // function for node deletion
  const deleteNode = () => {
    if (targetNode === '') {
      document.getElementById('infoForNodes').innerHTML = 'no node selected'
    }
    s.graph.dropNode(targetNode.id)
    document.getElementById('infoForNodes').innerHTML = `${targetNode.id}
    deleted`
    s.refresh()
  }
  // function for edge deletion
  const deleteEdge = () => {
    if (selectedEdge === '') {
      document.getElementById('infoForNodes').innerHTML = 'no edge selected'
    }
    s.graph.dropEdge(selectedEdge.data.edge.id)
    document.getElementById('infoForNodes').innerHTML =
      `${selectedEdge.data.edge.id} deleted`
    s.refresh()
  }

  // stuff for the keyboard shortcuts
  // remove once keyboard is working
  const helpMenu = 'no commands working now'

  const keyboard = (s) => {
    document.addEventListener('keydown', (event) => {
      // hotkey to focus on the console
      // console.log(event.code)
      if (event.metaKey === true && event.code === 'KeyL') {
        document.getElementById('consoleID').focus()
      }
      // hot key to add edge
      if (event.metaKey === true && event.code === 'KeyE') {
        addEdge(s, sourceNode, targetNode, lastEdge) // module
        lastEdge += 1
      }
      // Backspace deletion of nodes and edges
      if (event.code === 'Backspace') {
        (selectedEdge === '') ? deleteNode() : deleteEdge()
      }

      // stuff for the console
      const input = document.getElementById('consoleID').value
      // listens for you to press the ENTER key
      if (event.code === 'Enter') {
        // console.log(input)
        document.getElementById('consoleID').value = ''
        if (input === 'help' || input === 'options') {
          document.getElementById('infoForNodes').innerHTML = helpMenu
          console.log('help')
        } else if (input === 'validate') {
          moduleValidation(s)
        } else {
          document.getElementById('infoForNodes').innerHTML = 'not valid'
        }
      }
    })
  }
  // enable keyboard shortcuts
  keyboard(s)
})
