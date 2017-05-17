'use scrict'

// checks if a node threat has a connection to a node constraint
module.exports = function threatVerification (cy) {
  let arrThreat = [] // array with all threats
  let arrMitigated = [] // array with mitigated threats
  let result = '' // posted on the nodeInfo div

  cy.nodes().map((node) => {
    // checks in node is threat and adds to arrThreat
    if (node.data().info.concept === 'threat') {
      arrThreat.push(node.data().id)
      // console.log(node.data().id)
      // stores the neigborring nodes of the threats
      const neighborNodes = node.neighborhood()
      const neighborInfo = neighborNodes.data().info

      // check which threat has a constraint neighbor
      Object.keys(neighborInfo).map((i) => {
        // console.log(neighborInfo)
        if (neighborInfo[i] === 'constraint') {
          arrMitigated.push(node.data().id)
          result = `${result} • Threat ${node.data().id} is mitigated by constraint ${neighborNodes.data().id}\n`
        }
      })
    }
  })
  // checks the arrays to see which threat is not mitigated
  const setMitigated = new Set(arrMitigated)
  const threats = new Set([...arrThreat].filter(threat => !setMitigated.has(threat)))

  threats.forEach((i) => {
    result = `${result} • Threat ${i} is not mitigated\n`
  })

  // result will be displayed at info-for-nodes div
  result = `${result} • Threats total: ${arrThreat.length}\n`
  result = `${result} • Mitigated total: ${arrMitigated.length}\n`
  document.getElementById('info-for-nodes-id').textContent = result
}
