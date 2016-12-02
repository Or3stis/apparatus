/* global sigma */

// pluggin to find the neighbors of a node
// adds the neighbors method to sigmajs

;(() => {
  'use strict'

  if (typeof sigma === 'undefined') {
    throw Error('sigma is not declared')
  }

  sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    const neighbors = {}
    const index = this.allNeighborsIndex[nodeId] || {}

    Object.keys(index).map((i) => {
      neighbors[i] = this.nodesIndex[i]
    })
    return neighbors
  })
}).call(window)
