// shows the total number of nodes along with their concept type and module

const dgnMetamodel = require('./dgnSchema.js')

module.exports = function overview (cy) {
  // initialize the output of the module
  let output = ''

  // stores the node of module nodes
  const moduleNodes = {
    network: {
      schema: dgnMetamodel.network,
      numberOfNodes: 0
    },
    security: {
      schema: dgnMetamodel.security,
      numberOfNodes: 0
    },
    social: {
      schema: dgnMetamodel.social,
      numberOfNodes: 0
    }
  }

  // stores the number of each node
  const graphNodes = {
    device: {
      numberOfNodes: 0
    },
    application: {
      numberOfNodes: 0
    },
    micronet: {
      numberOfNodes: 0
    },
    net: {
      numberOfNodes: 0
    },
    information: {
      numberOfNodes: 0
    },
    asset: {
      numberOfNodes: 0
    },
    constraint: {
      numberOfNodes: 0
    },
    threat: {
      numberOfNodes: 0
    },
    actor: {
      numberOfNodes: 0
    },
    'malicious actor': {
      numberOfNodes: 0
    }
  }

  const totalNodes = cy.elements().nodes().length
  output = `• total nodes: ${totalNodes}\n\n`

  // count the number of nodes
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    // count the module nodes
    Object.keys(moduleNodes).map(module => {
      if (moduleNodes[module].schema.includes(nodeConcept) === true) {
        moduleNodes[module].numberOfNodes += 1
      }
    })
    // count the concept nodes
    Object.keys(graphNodes).map(concept => {
      if (nodeConcept === concept) {
        graphNodes[concept].numberOfNodes += 1
      }
    })
  })

  // compose the output by parsing the objects
  const composeOutput = (node, numberOfNodes) => {
    output += `• ${node} nodes: ${numberOfNodes}\n`
  }

  // loop the objects to compose the output
  Object.keys(moduleNodes).map(module => {
    composeOutput(module, moduleNodes[module].numberOfNodes)
  })
  // new line between modules and concepts
  output += `\n`
  Object.keys(graphNodes).map(node => {
    composeOutput(node, graphNodes[node].numberOfNodes)
  })

  // show output in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = output
}
