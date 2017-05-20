'use scrict'

// document.body.onload = addElement;

// shows info of node in the div 'info-for-nodes'
module.exports = function nodeInfo (node) {
  let nodeInfo = ''
  const nodeData = node.data().info
  Object.keys(nodeData).map((i) => {
    // adds the keys of the object to the string
    if (nodeData.hasOwnProperty(i)) {
      nodeInfo += `• ${i}: `
    }
    // adds the values of the object to the string
    nodeInfo += `${nodeData[i]}\n`
  })
  // appends info to the div
  document.getElementById('info-nodes-id').textContent = nodeInfo
}

// uses Div elements

// const currentDiv = document.getElementById('info-for-nodes-id')
// // shows info of node in the div 'info-for-nodes'
// module.exports = function nodeInfo (node) {
//   let elem = document.createElement(`node-form`)
//   // check all the nodes in graph for the search terms
//   Object.keys(node.data().info).map((i) => {
//     if (node.data().info.hasOwnProperty(i)) {
//       let key = document.createTextNode(`• ${i}: `)
//       elem.appendChild(key)
//     }
//     // adds the values of the object to the string
//     let value = document.createTextNode(`${node.data().info[i]}\n`)
//     elem.appendChild(value)
//     currentDiv.appendChild(elem)
//   })
//   // appends info to the div
//   // document.getElementById('info-for-nodes-id').textContent = nodeInfo
// }

// get the content of the div. Then save it in the js file. Once the program loads create a new temp file to work on. Once the program closes then ask to save. All the work will done in the temp.
