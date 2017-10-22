// watch the graph for changes

let changeToken = false

const nodes = (graphNodes, cy) => {
  const titleBar = document.getElementById('title-bar-id')

  if (graphNodes.same(cy.nodes()) === false && changeToken === false) {
    titleBar.innerHTML += `<span style='color: var(--blue-color);'> •</span>`
    changeToken = true
  } else if (graphNodes.same(cy.nodes()) === true) {
    titleBar.innerHTML = titleBar.innerHTML.replace(' •', ' ')
    changeToken = false
  }
}

const edges = (graphEdges, cy) => {
  const titleBar = document.getElementById('title-bar-id')

  if (
    graphEdges.same(cy.edges()) === false &&
    titleBar.innerText !== `${titleBar.innerHTML} *`
  ) {
    // add the files location to the title bar
    titleBar.innerHTML += ` *`
  } else if (graphEdges.same(cy.edges()) === false) {
    titleBar.innerHTML = titleBar.innerHTML
  } else {
    titleBar.innerHTML = titleBar.innerHTML.replace(' *', ' ')
  }
}

module.exports = {
  nodes,
  edges
}
