// watch the graph for changes

const nodes = (graphNodes, cy) => {

  const titleBar = document.getElementById('title-bar-id')

  if (graphNodes.same(cy.nodes()) === false) {
    // add the files location to the title bar
    titleBar.innerHTML += ` *`
  } else {
    titleBar.innerHTML = titleBar.innerHTML.replace(' *', ' ')
  }
}

const edges = (graphEdges, cy) => {
  console.log(graphEdges.same(cy.edges()))

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
