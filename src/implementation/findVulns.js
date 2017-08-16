// finds vulnerabilities from CVE database

const printChat = require('../helpers/printChat.js')
const printChatHTML = require('../helpers/printChatHTML.js')
const http = require('http')
const fs = require('fs')

// only checks for the concepts of device and application
module.exports = function findVuln (cy) {
  // stores the nodes keywords
  let nodesKeywords = []

  cy.elements().addClass('faded')

  cy.nodes().map(node => {
    if (node.data().info.concept === 'device') {
      nodesKeywords.push(node.data().info.type)

      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().info.concept === 'application') {
      nodesKeywords.push(node.data().info.version)

      node.removeClass('faded')
      node.addClass('attention')
    }
  })

  if (nodesKeywords.length === 0) {
    printChat('no vulnerabilities were found')
  } else {
    // removes duplicate keywords
    const uniqueKeywords = [...new Set(nodesKeywords)]

    // stores the keywords for print
    let keywordsPrint = ''
    uniqueKeywords.map(keyword => {
      keywordsPrint += `• ${keyword}\n`
    })

    printChat('sending request to http://cve.circl.lu/api/')
    printChat(`☛ keywords used:\n\n${keywordsPrint}`)
    requestVulnData(uniqueKeywords)
  }
}

// request vulnerability information from cve
const requestVulnData = nodesKeywords => {
  // get the name of the fileNames
  const title = document.getElementById('title-bar-id')
  const file = title.textContent.split('/').pop()

  // stores the CVE list
  let totalVuln = []
  nodesKeywords.map(vuln => {
    http
      .get(`http://cve.circl.lu/api/search/${vuln}`, resp => {
        let data = ''

        // add each received chunk of data
        resp.on('data', chunk => {
          data += chunk
        })

        // whole response has been received
        resp.on('end', () => {
          // write the results
          fs.writeFile(`analysis/vulnerability-${file}`, data, err => {
            if (err) console.error(`Error: ${err.message}`)
          })

          // this works for single keywords
          Object.values(JSON.parse(data)).map(key => {
            // arry with the CVE ids
            key.map(info => totalVuln.push(info.id))
          })
          // this works for double keywords -> vendor/product
          // JSON.parse(data).map((key) => {
          // console.log(key)
          // })

          // displays the total amount of vulnerabilities
          printChatHTML(
            `${vuln} vulnerabilities found: <strong>${totalVuln.length}</strong>`
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
