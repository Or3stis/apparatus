'use scrict'

// shows info of node in the div 'info-for-nodes'
module.exports = function nodeInfo (n) {
  let nodeInfo = ''
  Object.keys(n.data.node.info).map((i) => {
    // adds the keys of the object to the string
    if (n.data.node.info.hasOwnProperty(i)) {
      nodeInfo = `${nodeInfo} • ${i}:`
    }
    // adds the values of the object to the string
    nodeInfo = `${nodeInfo} ${n.data.node.info[i]}<br/>`
  })
  // appends info to the div
  document.getElementById('info-for-nodes').innerHTML = nodeInfo
}
