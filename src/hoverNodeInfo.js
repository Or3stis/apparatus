'use scrict'

const containerNode = document.getElementById('container-node-id')
const containerNodeInfo = document.getElementById('container-node-info-id')

module.exports = function nodeInfo (node) {
  let nodeInfo = ''
  Object.keys(node.data().info).map((i) => {
    // adds the keys of the object to the string
    if (node.data().info.hasOwnProperty(i)) {
      nodeInfo = `${nodeInfo} • ${i}:`
    }
    // adds the values of the object to the string
    nodeInfo = `${nodeInfo} ${node.data().info[i]}\n`
  })
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = nodeInfo
}
