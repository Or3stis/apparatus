// finds vulnerabilities from CVE database

const typeArray = ['type', 'service']
let keywords = []

module.exports = function findVuln (cy) {
  cy.nodes().each((n, node) => {
    // change .label when I change the graph schema
    if (node.data().label === 'Device') {
      Object.keys(node.data().info).map((key) => {
        if (typeArray.indexOf(key) !== -1) {
          keywords.push(node.data().info[key])
        }
      })
    }
  })
  console.log(keywords)
}
