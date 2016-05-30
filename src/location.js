'use strict'

// not included in the app

// shows the location of nodes at div nodeInfo
module.exports = function (n) {
  let nodeLocation = ''
  nodeLocation = `x: ${n.data.captor.x} y: ${n.data.captor.y}`
    // appends info to the div
  document.getElementById('infoForNodes').innerHTML = nodeLocation
}
