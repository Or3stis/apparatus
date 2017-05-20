// finds vulnerabilities from CVE database

const typeArray = ['type', 'service']
let keywords = []

module.exports = function findVuln (cy) {
  cy.nodes().map((node) => {
    if (node.data().info.concept === 'device') {
      Object.keys(node.data().info).map((key) => {
        if (typeArray.includes(key) === true) {
          keywords.push(node.data().info[key])
        }
      })
    }
  })
  console.log(keywords)
}
