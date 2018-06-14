// finds vulnerabilities from CVE database
// TODO gather all the globals in the same location
// TODO refactor use of globals

const https = require('https')
const fs = require('fs')
const { dialog, app } = require('electron').remote

const userDataPath = app.getPath('userData')
const settings = require(`${userDataPath}/settings.js`)

const bubbleTxt = require('../helpers/bubbleTxt.js')
const bubbleHTML = require('../helpers/bubbleHTML.js')

let totalVulnerabilities = []
let vulnerableJSONData = ''
/**
 *  request vulnerability information from cve
 *
 * @param {Array} nodesKeywords keywords to be send to the database
 */
const requestVulnerableData = nodesKeywords => {
  // stores the CVE list
  let keywordCounter = 0
  nodesKeywords.map(vulnerability => {
    https
      .get(`${settings.cveSearchUrl}${vulnerability}`, resp => {
        let data = ''
        // add each received chunk of data
        resp.on('data', chunk => {
          data += chunk
        })
        // once the whole response has been received
        resp.on('end', () => {
          // store the data for export
          vulnerableJSONData += data

          // this works for single keywords
          Object.values(JSON.parse(data)).map(key => {
            // array with the CVE ids
            key.map(info => totalVulnerabilities.push(info.id))
          })
          // this works for double keywords -> vendor/product
          // JSON.parse(data).map((key) => {
          // console.log(key)
          // })

          // displays the total amount of vulnerabilities
          bubbleHTML(
            `${vulnerability} vulnerabilities found: <strong>${
              totalVulnerabilities.length
            }</strong>`
          )

          // when the requests are finished ask if the file is to saved
          keywordCounter += 1
          if (keywordCounter === nodesKeywords.length) {
            const saveButton = `Do you want to save the file?<button id='saveButton-${buttonCounter}' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes</button>`

            bubbleHTML(saveButton)
            document
              .getElementById(`saveButton-${buttonCounter}`)
              .addEventListener('click', () => {
                saveFile()
              })
          }
        })
      })
      .on('error', err => {
        bubbleTxt(err.message)
      })
  })
}

/** saves the vulnerabilities in a json file */
const saveFile = () => {
  dialog.showSaveDialog(
    { filters: [{ name: 'javascript', extensions: ['json'] }] },
    filename => {
      // requestVulnerableData(filename, nodesKeywords)
      fs.writeFile(filename, vulnerableJSONData, err => {
        if (err) console.error(`Error: ${err.message}`)
      })
    }
  )
}

let nodesKeywords = []
/**
 * highlights the vulnerable nodes and fills the nodesKeywords array
 *
 * @param {Object} cy cytoscape instance
 */
const findVulnerableNodes = cy => {
  // fades out the graph elements
  cy.elements().addClass('faded')

  // stores the values of the nodes that will be used as keywords
  // fills the nodesKeywords with the values
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'device') {
      // check the 'type' attribute for vulnerabilities
      nodesKeywords.push(node.data().asto.type)

      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().asto.concept === 'application') {
      // check the 'version' attribute for vulnerabilities
      nodesKeywords.push(node.data().asto.version)

      node.removeClass('faded')
      node.addClass('attention')
    }
  })
}

let keywordsPrint = ''
/**
 * removes duplicate keywords
 *
 * @param {Array} nodesKeywords keywords to be send to the database
 */
const getUniqueKeywords = nodesKeywords => {
  const uniqueKeywords = [...new Set(nodesKeywords)]

  // stores the unique keywords for display
  uniqueKeywords.map(keyword => {
    keywordsPrint += `• ${keyword}\n`
  })
}

let buttonCounter = 0
/**
 * sends a request to a CVE database with the keywords
 *
 * @param {Object} cy cytoscape instance
 * @TODO globals need to cleared
 */
const findVulnerabilities = cy => {
  findVulnerableNodes(cy)

  const permission = `Do you want to send a request to ${
    settings.cveSearchUrl
  }<button id='yes-${buttonCounter}' class='menu-btn' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes?</button>`

  // check whether the nodesKeywords is empty before sending the request to
  // a vulnerability database
  if (nodesKeywords.length === 0) {
    bubbleTxt('no vulnerabilities were found')
  } else {
    bubbleHTML(permission)
    document
      .getElementById(`yes-${buttonCounter}`)
      .addEventListener('click', () => {
        getUniqueKeywords(nodesKeywords)
        bubbleTxt(`sending request to ${settings.cveSearchUrl}`)
        bubbleTxt(`☛ keywords used:\n\n${keywordsPrint}`)
        requestVulnerableData(nodesKeywords)

        nodesKeywords = []
        totalVulnerabilities = []
        keywordsPrint = ''
        vulnerableJSONData = ''
      })
  }
  buttonCounter += 1
}

// only checks vulnerabilities for the concepts of device and application
module.exports = findVulnerabilities
