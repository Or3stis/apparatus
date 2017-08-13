// finds vulnerabilities from CVE database

const printChat = require('../helpers/printChat.js')
const printChatHTML = require('../helpers/printChatHTML.js')
const http = require('http')
const fs = require('fs')

// only checks for the concepts of device and application
module.exports = function findVuln (cy) {
  // array that stores the attributes of the concepts that will be checked
  let keywords = ''
  // stores the id of the node and the value of the attribute
  let vulnInfo = {}

  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      keywords += `• ${node.data().info.type}\n`
      vulnInfo[node.data().id] = node.data().info.type

      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().info.concept === 'application') {
      keywords += `• ${node.data().info.version}\n`
      vulnInfo[node.data().id] = node.data().info.version

      node.removeClass('faded')
      node.addClass('attention')
    }
  })

  if (keywords === '') {
    printChat('no vulnerabilities were found')
  } else {
    printChat('sending request to http://cve/circ.lu')
    printChat(`☛ keywords used:\n\n${keywords}`)
    requestVulnData(vulnInfo)
  }
}

// request vulnerability information from cve
const requestVulnData = vulnInfo => {
  // get the name of the fileNames
  const title = document.getElementById('title-bar-id')
  const file = title.textContent.split('/').pop()

  // stores the CVE list
  let totalVuln = []
  Object.keys(vulnInfo).map(vuln => {
    http
      .get(`http://cve.circl.lu/api/search/${vulnInfo[vuln]}`, resp => {
        let data = ''

        // A chunk of data has been recieved.
        resp.on('data', chunk => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          // write the results

          fs.writeFile(`analysis/vulnerability-${file}`, data, err => {
            if (err) throw err
          })
          // this works for office
          Object.values(JSON.parse(data)).map(key => {
            key.map(info => {
              // CVE id
              totalVuln.push(info.id)
            })
          })
          // this works for microsoft/office
          // JSON.parse(data).map((key) => {
          // console.log(key)
          // })

          // displays the total amount of vulnerabilities
          printChat(
            `${vulnInfo[vuln]} vulnerabilities found: ${totalVuln.length}`
          )
        })
      })
      .on('error', err => {
        console.log(`Error: ${err.message}`)
      })
  })
  printChatHTML(
    `analysis results will be stored at\n<strong>./analysis/vulnerability-${file}</strong>`
  )
}
