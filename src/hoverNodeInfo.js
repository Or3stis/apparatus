'use scrict'

const containerNode = document.getElementById('container-node-id')
const containerNodeInfo = document.getElementById('container-node-info-id')

module.exports = function nodeInfo (n) {
  let nodeInfo = ''
  Object.keys(n.data.node.info).map((i) => {
    // adds the keys of the object to the string
    if (n.data.node.info.hasOwnProperty(i)) {
      nodeInfo = `${nodeInfo} • ${i}:`
    }
    // adds the values of the object to the string
    nodeInfo = `${nodeInfo} ${n.data.node.info[i]}\n`
  })
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = nodeInfo
}
