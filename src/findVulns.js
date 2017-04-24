// finds vulnerabilities from CVE database

const typeArray = ['type', 'service']

module.exports = function findVuln (cy) {
  cy.nodes().each((n, node) => {
    // change .label when I change the graph schema
    if (node.data().label === 'Device') {
      Object.keys(node.data().info).map((key) => {
        // if (typeArray.indexOf(key) !== -1) {
        //   console.log(Object.keys[key])
        // }
      })
    }
  })
}
