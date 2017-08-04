'use strict'

const editNode = require('./editNode.js')
const threatVerification = require('./threatVerification.js')

let posY = ''
let posX = ''
const mousePosition = (selection) => {
  posX = selection.renderedPosition.x
  posY = selection.renderedPosition.y
}

// remove the node menu element
const removeNodeMenu = () => {
  const parentEl = document.getElementById('graph-container')
  const formEl = document.getElementById('nodeMenu-id')

  if (formEl !== null) parentEl.removeChild(formEl)
}

// removes the stage menu element
const removeStageMenu = () => {
  const parentEl = document.getElementById('graph-container')
  const formEl = document.getElementById('stageMenu-id')

  if (formEl !== null) parentEl.removeChild(formEl)
}

// creates the node menu element
const nodeMenu = (cy, selection) => {
  removeStageMenu()
  const selectedNode = selection.target[0]
  const graph = document.getElementById('graph-container')

  mousePosition(selection)

  // checks to see if the menu has been created
  const nodeMenuExists = document.getElementById('nodeMenu-id')
  if (nodeMenuExists === null) {
    const nodeMenu = document.createElement('button')
    nodeMenu.id = 'nodeMenu-id'
    nodeMenu.innerHTML = `<div class="dropdown" style='display: block; position: absolute; top:${posY}px; left: ${posX}px;'>
    <ul class="dropdown-menu" style='display:block;'>
    <li><a href="#edit-node">edit node</a></li>
    <li><a href="#show-neighbors">show neighbors</a></li>
    </ul>
    </div>`

    nodeMenu.addEventListener('click', e => {
      const event = e.target.textContent

      if (event === 'show neighbors') {
        const neighborhood = selectedNode.neighborhood().add(selectedNode)
        cy.elements().addClass('faded')
        neighborhood.removeClass('faded')
      } else if (event === 'edit node') {
        editNode.formNode(selectedNode)
      }
      removeNodeMenu()
    })
    graph.appendChild(nodeMenu)
  } else {
    removeNodeMenu()
  }
}

// creates the stage menu element
const stageMenu = (cy, selection) => {
  removeNodeMenu()
  const graph = document.getElementById('graph-container')

  mousePosition(selection)

  // checks to see if the menu has been created
  const stageMenuExists = document.getElementById('stageMenu-id')
  if (stageMenuExists === null) {
    const stageMenu = document.createElement('button')
    stageMenu.id = 'stageMenu-id'
    stageMenu.innerHTML = `<div class="dropdown" style='display: block; position: absolute; top:${posY}px; left: ${posX}px;'>
      <ul class="dropdown-menu" style='display:block;'>
        <li><a href="#threat-verification">threat verification</a></li>
      </ul>
    </div>`

    graph.appendChild(stageMenu)

    stageMenu.addEventListener('click', e => {
      const event = e.target.textContent

      if (event === 'threat verification') {
        threatVerification(cy)
      }
      removeStageMenu()
    })
  } else {
    removeStageMenu()
  }
}

module.exports = {
  nodeMenu: nodeMenu,
  stageMenu: stageMenu,
  removeNodeMenu: removeNodeMenu,
  removeStageMenu: removeStageMenu
}
