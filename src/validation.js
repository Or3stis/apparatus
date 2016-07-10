'use scrict'

// checks if a node threat has a connection to a node constraint
module.exports = function validation (s) {
  let arrThreat = [] // array with all threats
  let arrMitigated = [] // array with mitigated threats
  let result = '' // posted on the nodeInfo div

  for (let n of s.graph.nodes().values()) {
    // checks in node is threat and adds to arrThreat
    if (n.info.type === 'threat') {
      // console.log(e.id) // threats
      arrThreat.push(n.id)

      // stores the neigborring nodes of the threats
      const neighborNodes = s.graph.neighbors(n.id)

      // check which threat has a constraint neighbor
      for (let i of Object.keys(neighborNodes)) {
        if (neighborNodes[i].info.type === 'constraint') {
          // console.log(neighborNodes[i].id) // constraints
          arrMitigated.push(n.id)
          result = `${result} > Threat ${n.id} is mitigated by constraint
          ${neighborNodes[i].id} <br/>`
        }
      }
    }
  }
  // checks the arrays to see which threat is not mitigated
  let setMitigated = new Set(arrMitigated)
  let threats = new Set([...arrThreat].filter(x => !setMitigated.has(x)))
  for (let i of threats) {
    result = `${result} > Threat ${i} is not mitigated <br/>`
  }

  // result will be displayed at infoForNodes div
  result = `${result} > Threats total: ${arrThreat.length} <br/>`
  result = `${result} > Mitigated total: ${arrMitigated.length} <br/>`
  document.getElementById('infoForNodes').innerHTML = result
}
