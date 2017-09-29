const printChatText = require('./printChatText.js')

// shows info of node in the div 'info-for-nodes'
module.exports = function nodeInfo (node) {
  let nodeInfo = ''
  const nodeData = node.data().info
  Object.keys(nodeData).map(i => {
    // adds the keys of the object to the string
    if (nodeData.hasOwnProperty(i) === true) {
      nodeInfo += `• ${i}: `
    }
    // adds the values of the object to the string
    nodeInfo += `${nodeData[i]}\n`
  })
  printChatText(nodeInfo)
}
