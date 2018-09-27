// finds vulnerabilities from CVE database

const { get } = require('https')
const { writeFile } = require('fs')
const { dialog, app } = require('electron').remote

const userDataPath = app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

const bubbleTxt = require('../helpers/bubbleTxt.js')
const bubbleHTML = require('../helpers/bubbleHTML.js')

let vulnerabilities = []
let vulnerableJSONData = ''
let keywords = []
let buttonIdCounter = 0 // used when creating bubble buttons
let keywordsToShow = '' // keywords that are displayed in the bubble

/**
 *  request vulnerability information from cve
 *
 * @param {Array} keywords keywords to be send to the database
 */
const requestVulnerableData = keywords => {
  // stores the CVE list
  let keywordCounter = 0
  keywords.map(vulnerability => {
    get(`${settings.cveSearchURL}${vulnerability}`, resp => {
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
          key.map(info => vulnerabilities.push(info.id))
        })
        // this works for double keywords -> vendor/product
        // JSON.parse(data).map((key) => {
        // console.log(key)
        // })

        // displays the total amount of vulnerabilities
        bubbleHTML(
          `${vulnerability} vulnerabilities found: <strong>${
            vulnerabilities.length
          }</strong>`
        )

        // when the requests are finished ask if the file is to saved
        keywordCounter += 1
        if (keywordCounter === keywords.length) {
          const saveButton = `Do you want to save the file?<button id='saveButton-${buttonIdCounter}' class='menu-button' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes</button>`

          bubbleHTML(saveButton)
          document
            .getElementById(`saveButton-${buttonIdCounter}`)
            .addEventListener('click', () => {
              saveFile()
            })
        }
      })
    }).on('error', err => {
      bubbleTxt(err.message)
    })
  })
}

/** saves the vulnerabilities in a json file */
const saveFile = () => {
  dialog.showSaveDialog(
    { filters: [{ name: 'javascript', extensions: ['json'] }] },
    filename => {
      // requestVulnerableData(filename, keywords)
      writeFile(filename, vulnerableJSONData, err => {
        if (err) console.error(`Error: ${err.message}`)
      })
    }
  )
}

/**
 * highlights the vulnerable nodes and fills the keywords array
 *
 * @param {object} cy cytoscape instance
 */
const findVulnerableNodes = cy => {
  // fades out the graph elements
  cy.elements().addClass('faded')

  // stores the values of the nodes that will be used as keywords
  // fills the keywords with the values
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'device') {
      // check the 'type' attribute for vulnerabilities
      if (node.data().asto.type !== '') {
        keywords.push(node.data().asto.type)
      }
      node.removeClass('faded')
      node.addClass('attention')
    } else if (node.data().asto.concept === 'application') {
      // check the 'version' attribute for vulnerabilities
      if (node.data().asto.version !== '') {
        keywords.push(node.data().asto.version)
      }
      node.removeClass('faded')
      node.addClass('attention')
    }
  })
}

/**
 * removes duplicate keywords
 *
 * @param {array} keywords keywords to be send to the database
 */
const getUniqueKeywords = keywords => {
  const uniqueKeywords = [...new Set(keywords)]

  // stores the unique keywords for display
  uniqueKeywords.map(keyword => {
    keywordsToShow += `• ${keyword}\n`
  })
}

/**
 * sends a request to a CVE database with the keywords
 *
 * @param {object} cy cytoscape instance
 */
const findVulnerabilities = cy => {
  findVulnerableNodes(cy)

  const permission = `Do you want to send a request to <strong>${
    settings.cveSearchUrl
  }</strong> <button id='yes-${buttonIdCounter}' class='menu-button' style='color: var(--main-tx-color); background-color: var(--main-bg-color); width: 45px; height: 25px;'>yes?</button>`

  // check whether the keywords is empty before sending
  // the request to a vulnerability database
  if (keywords.length === 0) {
    bubbleTxt('no vulnerabilities were found')
  } else {
    bubbleHTML(permission)
    document
      .getElementById(`yes-${buttonIdCounter}`)
      .addEventListener('click', () => {
        getUniqueKeywords(keywords)
        bubbleTxt(`sending request to ${settings.cveSearchUrl}`)
        bubbleTxt(`☛ keywords used:\n\n${keywordsToShow}`)
        requestVulnerableData(keywords)

        // clear global variables
        keywords = []
        vulnerabilities = []
        keywordsToShow = ''
        vulnerableJSONData = ''
      })
  }
  buttonIdCounter += 1
}

// only checks vulnerabilities in the concepts of device and application
module.exports = findVulnerabilities
