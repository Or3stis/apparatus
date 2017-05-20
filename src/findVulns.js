// finds vulnerabilities from CVE database

const typeArray = ['type', 'service']
let keywords = []

module.exports = function findVuln (cy) {
  cy.nodes().map((node) => {
    // change .label when I change the graph schema
    if (node.data().info.concept === 'device') {
      keywords = Object.keys(node.data().info).filter((key) => {
        (typeArray.indexOf(key) !== -1)
      })
    }
  })
  console.log(keywords)
}
