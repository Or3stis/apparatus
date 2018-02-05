// prints the total number of nodes along with their concept type and module

const dgnMetamodel = require('./dgnSchema.js')

module.exports = function overview (cy) {
  const networkArray = dgnMetamodel.network
  const securityArray = dgnMetamodel.security
  const socialArray = dgnMetamodel.social

  // initialize the output of the module
  let output = ''

  // object to store the number of each node in the graph
  const graphNodes = {
    network: {
      numberOfNodes: 0
    },
    security: {
      numberOfNodes: 0
    },
    social: {
      numberOfNodes: 0
    },
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
    maliciousActor: {
      numberOfNodes: 0
    }
  }

  const totalNodes = cy.elements().nodes().length
  output = `• total nodes: ${totalNodes}\n\n`

  // count the number of nodes
  cy.nodes().map(node => {
    const nodeConcept = node.data().asto.concept
    // count the network nodes
    if (networkArray.includes(nodeConcept) === true) {
      graphNodes.network.numberOfNodes += 1
      if (nodeConcept === 'device') {
        graphNodes.device.numberOfNodes += 1
      } else if (nodeConcept === 'application') {
        graphNodes.application.numberOfNodes += 1
      } else if (nodeConcept === 'micronet') {
        graphNodes.micronet.numberOfNodes += 1
      } else if (nodeConcept === 'net') {
        graphNodes.net.numberOfNodes += 1
      } else if (nodeConcept === 'information') {
        graphNodes.information.numberOfNodes += 1
      }
      // count the security nodes
    } else if (securityArray.includes(nodeConcept) === true) {
      graphNodes.security.numberOfNodes += 1
      if (nodeConcept === 'asset') {
        graphNodes.asset.numberOfNodes += 1
      } else if (nodeConcept === 'threat') {
        graphNodes.threat.numberOfNodes += 1
      } else if (nodeConcept === 'constraint') {
        graphNodes.constraint.numberOfNodes += 1
      } else if (nodeConcept === 'malicious actor') {
        graphNodes.maliciousActor.numberOfNodes += 1
      }
      // count the social node
    } else if (socialArray.includes(nodeConcept) === true) {
      graphNodes.social.numberOfNodes += 1
      if (nodeConcept === 'actor') {
        graphNodes.actor.numberOfNodes += 1
      }
    }
  })

  // construct the output final output
  const conOutput = (node, numberOfNodes) => {
    output = `${output}• ${node} nodes: ${numberOfNodes}\n`
  }

  // loop the object to make the output
  Object.keys(graphNodes).map(node => {
    conOutput(node, graphNodes[node].numberOfNodes)
  })

  // show output in the graph container
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = output
}
