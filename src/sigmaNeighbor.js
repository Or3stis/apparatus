/* global sigma */

// pluggin to find the neighbors of a node
// adds the neighbors method to sigmajs

(function () {
  'use strict'

  if (typeof sigma === 'undefined') {
    throw Error('sigma is not declared')
  }

  sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    const neighbors = {}
    const index = this.allNeighborsIndex[nodeId] || {}

    for (let i of Object.keys(index)) {
      neighbors[i] = this.nodesIndex[i]
    }
    return neighbors
  })
}).call(window)
