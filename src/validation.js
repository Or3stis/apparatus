'use scrict'

// checks if a node threat has a connection to a node constraint
module.exports = function validation (s) {
  let arrThreat = [] // array with all threats
  let arrMitigated = [] // array with mitigated threats
  let result = '' // posted on the nodeInfo div

  s.graph.nodes().map((n) => {
    // checks in node is threat and adds to arrThreat
    if (n.info.type === 'threat') {
      // console.log(e.id) // threats
      arrThreat.push(n.id)

      // stores the neigborring nodes of the threats
      const neighborNodes = s.graph.neighbors(n.id)

      // check which threat has a constraint neighbor
      Object.keys(neighborNodes).map((i) => {
        if (neighborNodes[i].info.type === 'constraint') {
          arrMitigated.push(n.id)
          result = `${result} • Threat ${n.id} is mitigated by constraint
          ${neighborNodes[i].id} <br/>`
        }
      })
    }
  })
  // checks the arrays to see which threat is not mitigated
  const setMitigated = new Set(arrMitigated)
  const threats = new Set([...arrThreat].filter(x => !setMitigated.has(x)))
  Object.keys(threats).map((i) => {
    result = `${result} • Threat ${i} is not mitigated <br/>`
  })

  // result will be displayed at info-for-nodes div
  result = `${result} • Threats total: ${arrThreat.length} <br/>`
  result = `${result} • Mitigated total: ${arrMitigated.length} <br/>`
  document.getElementById('info-for-nodes').innerHTML = result
}
