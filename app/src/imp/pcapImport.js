// creates models from pcap-ng files

// TODO code is incompehensible, make it better
const { dialog } = require('electron').remote
const fs = require('fs')
const child = require('child_process')

const commonPorts = require('./commonPorts.js')
const initialize = require('../initialize.js')
const cyOptions = require('../helpers/cyOptions.js')

// stores the node content of the file
let nodeContentJs = ''
// stores the edge content of the file
let edgeContentJs = ''

// stores the connections in the following format source, target, network protocol
let connection = []
// stores the total number device nodes
let deviceNodes = []
// stores all the connections (even duplicates src -> trg to trg -> src)
let allConnections = []
const storeConnections = txtData => {
  let srcNodes = []
  // store the target concepts
  let trgNodes = []

  txtData.map(eachLine => {
    let row = eachLine.split(' ')
    if (row[1] !== undefined && row[3] !== undefined) {
      srcNodes.push(row[1])
      trgNodes.push(row[3].replace(':', ''))
      connection.push(`${row[1]} ${row[3].replace(':', '')} ${row[4]}`)
    }
  })
  // stores the unique devices concepts based on the IPs addresses
  deviceNodes = [...new Set(srcNodes.concat(trgNodes))]
  // stores the unique transmissions between source and target devices
  allConnections = [...new Set(connection)]
}

// stores the information to create network connections
// each row format -> srcNode tgtNode protocol
let uniqueConnections = []
const removeServices = allConnections => {
  let counter = 0
  let uniqueLine = []
  // removes the services from the devices IP
  allConnections.map(row => {
    let element = row.split(' ')
    let src = element[0].split('.')
    src.pop()
    let srcIP = src.join('.')

    let trg = element[1].split('.')
    trg.pop()
    let trgIP = trg.join('.')

    // attempt to remove the duplicate connections
    // some connections have the same nodes but in opposite directions
    // src -> trg to trg -> src, this cause the srcipt to render them twice
    if (counter % 2 === 1) {
      uniqueLine.push(`${srcIP} ${trgIP} ${element[2]}`)
    } else if (counter % 2 === 0) {
      uniqueLine.push(`${trgIP} ${srcIP} ${element[2]}`)
    }
    counter += 1
  })
  // stores the unique transmissions between source and target devices
  uniqueConnections = [...new Set(uniqueLine)]
}

// to store the unique devices IP [key] and services [array]
let uniqueDevicesServices = {}
// to store the unique devices IP
let uniqueDevices = []
const storeUniqueDevicesServices = devices => {
  Object.keys(devices).map(key => {
    let nodeInformation = devices[key].split('.')
    let nodeService = nodeInformation.pop()
    let nodeIP = nodeInformation.join('.')

    if (Object.keys(uniqueDevicesServices).length === 0) {
      uniqueDevicesServices[nodeIP] = nodeService
    }
    if (uniqueDevicesServices[nodeIP] !== nodeIP) {
      uniqueDevicesServices[nodeIP] += ` ${nodeService}`
      uniqueDevices.push(nodeIP)
    }
  })
  // store the unique nodes with the device concept
  uniqueDevices = [...new Set(uniqueDevices)]
}

// unified counter to create the nodes
let idCounter = 0

const createDevices = uniqueDevicesServices => {
  Object.keys(uniqueDevicesServices).map(deviceIp => {
    nodeContentJs += `
  {
    data: {
      id: '${idCounter}',
      label: 'device',
      asto: {
        description: 'ip ${deviceIp}',
        layer: '',
        type: '',
        service: '',
        input: '',
        output: '',
        update: '',
        concept: 'device'
      }
    }
  },`
    idCounter += 1
  })
}

const createDevicesApplications = devices => {
  let deviceIdCounter = 0 // device concepts start from 0

  Object.keys(uniqueDevicesServices).map(i => {
    let services = uniqueDevicesServices[i].split(' ')
    services.map(service => {
      if (service !== 'undefined') {
        // checks if port service is known
        Object.keys(commonPorts).map(port => {
          if (port === service) {
            service = `${port} ${commonPorts[port]}`
          }
        })
        nodeContentJs += ` {
    data: {
      id: '${idCounter}',
      label: 'application',
      asto: {
        description: 'port ${service}',
        version: 'port ${service}',
        update: '',
        concept: 'application'
      }
    }
  },`

        // creates edge from the device node to the application nodes
        edgeContentJs += ` {
    data: {
      id: 'e${deviceIdCounter}${idCounter}',
      source: '${deviceIdCounter}',
      target: '${idCounter}',
      update: '',
      label: 'has'
    }
  },`
        idCounter += 1
      }
    })
    deviceIdCounter += 1
  })
}

// creates network connections and adds edges between them and the devices
const createConnections = (devices, connections) => {
  // creates the edges and the network connection nodes concept
  connections.map(row => {
    let element = row.split(' ')

    // creates the network connection nodes
    nodeContentJs += ` {
    data: {
      id: '${idCounter}',
      label: 'network connection',
      asto: {
        description: '${element[2]}',
        listOfProtocols: '${element[2]}',
        concept: 'network connection'
      }
    }
  },`

    // find the nodes id to create the edges
    let srcId = ''
    let trgId = ''
    Object.keys(devices).map(id => {
      if (devices[id] === element[0]) {
        srcId = id
      }
    })
    Object.keys(devices).map(id => {
      if (devices[id] === element[1]) {
        trgId = id
      }
    })

    // creates edges between devices and network connections
    edgeContentJs += ` {
    data: {
      id: 'e${srcId}${idCounter}',
      source: '${srcId}',
      target: '${idCounter}',
      label: 'connects'
    }
  }, {
    data: {
      id: 'e${trgId}${idCounter}',
      source: '${trgId}',
      target: '${idCounter}',
      label: 'connects'
    }
  },`
    idCounter += 1
  })
}

// writes the data from the read function
// the data are read from the txt created in readFile function
const writeGraph = (cy, filename, devices, connections) => {
  storeUniqueDevicesServices(devices)
  createDevices(uniqueDevicesServices)
  createDevicesApplications(devices)
  createConnections(uniqueDevices, connections)

  // creates the first line of the file
  const fileStart = 'const graphModel = {}\n\ngraphModel.elements = [\n// nodes'
  // end of written file
  const fileEnd = '\n]\nmodule.exports = graphModel\n'

  // concatenates the created content
  const toWrite = fileStart
    .concat(nodeContentJs)
    .concat(edgeContentJs)
    .concat(fileEnd)

  // writes the graph on file
  fs.writeFile(`${filename}.js`, toWrite, err => {
    if (err) throw err

    // loads the created graph on the tool
    cyOptions(cy, `${filename}.js`)
    initialize(cy.out, 'implementation')
  })
}

// reads the .txt file that was created by the tcpdump command
const readTxtFile = (cy, filename) => {
  fs.readFile(`${filename}`, (err, data) => {
    if (err) throw err

    const txtData = data.toString().split('\n')

    storeConnections(txtData)
    removeServices(allConnections)

    // writes graph data on as .js file
    writeGraph(cy, filename, deviceNodes, uniqueConnections)
  })
  // deletes the text file
  fs.unlink(`${filename}`, err => {
    if (err) throw err
  })
}

module.exports = function pcapImport (cy, phase) {
  // checks if tcpdump is installed, returns a boolean
  const testTcpdump = child.spawnSync('type', ['tcpdump']).status === 0

  if (testTcpdump === true) {
    let dialogOptions = []
    process.platform === 'darwin'
      ? (dialogOptions = ['openFile', 'openDirectory'])
      : (dialogOptions = ['openFile'])

    // request pcapng file to load
    dialog.showOpenDialog(
      {
        properties: [...dialogOptions],
        filters: [{ name: 'pcap', extensions: ['pcapng'] }]
      },
      pcapngFiles => {
        if (pcapngFiles === undefined) return

        const pcapngFile = pcapngFiles[0]

        // ask for save location for the new file
        dialog.showSaveDialog(filename => {
          // tcpdump command to be executed
          const tcpDumpCommand = `tcpdump -qtn -r ${pcapngFile} > ${filename}`

          child.execSync(tcpDumpCommand)

          // reads data from the txt file, creates a js file and deletes the txt
          readTxtFile(cy, filename)
        })
      }
    )
  } else {
    dialog.showErrorBox('Error', 'tcpdump not found in your path')
  }
}
