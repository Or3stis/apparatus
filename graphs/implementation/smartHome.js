const graphModel = {}

graphModel.elements = [
  // nodes
  {
    data: {
      id: '1',
      label: 'device',
      info: {
        description: 'laptop',
        aspect: 'physical',
        layer: 'perception',
        type: 'Macbook 2015',
        service: 'request data',
        input: 'action',
        output: 'dataDigital',
        update: 'automatic',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '2',
      label: 'device',
      info: {
        description: 'router',
        aspect: 'physical',
        layer: 'gateway',
        type: 'NETGEAR R8500',
        service: 'routing',
        input: 'dataDigital',
        output: 'dataDigital',
        update: 'action',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '3',
      label: 'device',
      info: {
        description: 'baby camera',
        aspect: 'physical',
        layer: 'perception',
        type: 'Philips in Sight',
        service: 'camera',
        input: 'dataEnvironemntal',
        output: 'dataDigital',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '4',
      label: 'network connection',
      info: {
        description: 'wireless',
        listOfProtocols: 'HTTP, TELNET, SHH',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: '5',
      label: 'network connection',
      info: {
        description: 'wireless',
        listOfProtocols: 'HTTP, TELNET, SHH',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: '6',
      label: 'actor',
      info: {
        description: 'user',
        intent: 'view camera feed',
        concept: 'actor'
      }
    }
  }, {
    data: {
      id: '7',
      label: 'information',
      info: {
        description: 'data in transit',
        intent: 'local',
        concept: 'information'
      }
    }
  },
  {
    data: {
      id: '8',
      label: 'asset',
      info: {
        description: 'camera feed',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '9',
      label: 'constraint',
      info: {
        description: 'secure camera feed',
        property: 'authorization',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '10',
      label: 'threat',
      info: {
        description: 'direct browsing',
        type: 'spoofing',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '11',
      label: 'vulnerability',
      info: {
        description: 'CVE-2015-2884',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: '12',
      label: 'malicious actor',
      info: {
        description: 'attacker',
        intent: 'view camera feed',
        concept: 'malicious actor'
      }
    }
  }, {
    data: {
      id: '13',
      label: 'mechanism',
      info: {
        description: 'whitelist authorized users',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: '14',
      label: 'asset',
      info: {
        description: 'device credentials',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '15',
      label: 'constraint',
      info: {
        description: 'protect Device credentials',
        property: 'confidentiality',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '16',
      label: 'mechanism',
      info: {
        description: 'update Device firmware',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: '17',
      label: 'malicious actor',
      info: {
        description: 'attacker',
        intent: 'access router',
        concept: 'malicious actor'
      }
    }
  }, {
    data: {
      id: '18',
      label: 'threat',
      info: {
        description: 'password credentials',
        type: 'informationDisclosure',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '19',
      label: 'vulnerability',
      info: {
        description: 'CVE-2017-5521',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: '20',
      label: 'constraint',
      info: {
        description: 'Device physical protection',
        property: 'integrity',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '21',
      label: 'asset',
      info: {
        description: 'physical devices',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '22',
      label: 'threat',
      info: {
        description: 'physical tampering',
        type: 'integrity',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '23',
      label: 'mechanism',
      info: {
        description: 'physically secure acces',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: '24',
      label: 'vulnerability',
      info: {
        description: 'physically accessible',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: '25',
      label: 'net',
      info: {
        description: 'internet',
        concept: 'net'
      }
    }
  }, {
    data: {
      id: '26',
      label: 'unidentified node',
      info: {
        description: 'server',
        concept: 'unidentified node'
      }
    }
  }, {
    data: {
      id: '27',
      label: 'micronet',
      info: {
        description: 'smart home',
        state: 'static',
        concept: 'micronet'
      }
    }
  }, {
    data: {
      id: '28',
      label: 'malicious actor',
      info: {
        description: 'attacker',
        intent: 'steal Devices',
        concept: 'malicious actor'
      }
    }
  },
  // edges
  {
    data: {
      id: 'e271',
      source: '1',
      target: '27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'e272',
      source: '2',
      target: '27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'e273',
      source: '3',
      target: '27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'e14',
      source: '1',
      target: '4',
      label: 'connects'
    }
  }, {
    data: {
      id: 'e24',
      source: '2',
      target: '4',
      label: 'connects'
    }
  }, {
    data: {
      id: 'e35',
      source: '3',
      target: '5',
      label: 'connects'
    }
  }, {
    data: {
      id: 'e25',
      source: '2',
      target: '5',
      label: 'connects'
    }
  }, {
    data: {
      id: 'e61',
      source: '6',
      target: '1',
      label: 'uses'
    }
  }, {
    data: {
      id: 'e121',
      source: '1',
      target: '21',
      label: 'is'
    }
  }, {
    data: {
      id: 'e321',
      source: '3',
      target: '21',
      label: 'is'
    }
  }, {
    data: {
      id: 'e2221',
      source: '22',
      target: '21',
      label: 'targets'
    }
  }, {
    data: {
      id: 'e2224',
      source: '22',
      target: '24',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'e2324',
      source: '23',
      target: '24',
      label: 'protects'
    }
  }, {
    data: {
      id: 'e2320',
      source: '23',
      target: '20',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'e2022',
      source: '20',
      target: '22',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'e2027',
      source: '20',
      target: '27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'e2822',
      source: '28',
      target: '22',
      label: 'poses'
    }
  }, {
    data: {
      id: 'e2527',
      source: '25',
      target: '27',
      label: 'requests'
    }
  }, {
    data: {
      id: 'e241',
      source: '24',
      target: '1',
      label: 'affects'
    }
  }, {
    data: {
      id: 'e243',
      source: '23',
      target: '3',
      label: 'affects'
    }
  }, {
    data: {
      id: 'e37',
      source: '3',
      target: '7',
      label: 'has'
    }
  }, {
    data: {
      id: 'e78',
      source: '7',
      target: '8',
      label: 'is'
    }
  }, {
    data: {
      id: 'e927',
      source: '9',
      target: '27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'e910',
      source: '9',
      target: '10',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'e108',
      source: '10',
      target: '8',
      label: 'targets'
    }
  }, {
    data: {
      id: 'e1011',
      source: '10',
      target: '11',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'e1210',
      source: '12',
      target: '10',
      label: 'poses'
    }
  }, {
    data: {
      id: 'e139',
      source: '13',
      target: '9',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'e1311',
      source: '13',
      target: '11',
      label: 'protects'
    }
  }, {
    data: {
      id: 'e113',
      source: '11',
      target: '3',
      label: 'affects'
    }
  }, {
    data: {
      id: 'e214',
      source: '2',
      target: '14',
      label: 'is'
    }
  }, {
    data: {
      id: 'e1814',
      source: '18',
      target: '14',
      label: 'targets'
    }
  }, {
    data: {
      id: 'e1527',
      source: '15',
      target: '27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'e1615',
      source: '16',
      target: '15',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'e1518',
      source: '15',
      target: '18',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'e1819',
      source: '18',
      target: '19',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'e192',
      source: '19',
      target: '2',
      label: 'affects'
    }
  }, {
    data: {
      id: 'e1718',
      source: '17',
      target: '18',
      label: 'poses'
    }
  }, {
    data: {
      id: 'e1619',
      source: '16',
      target: '19',
      label: 'protects'
    }
  }, {
    data: {
      id: 'e2625',
      source: '26',
      target: '25',
      label: 'belongs'
    }
  }
]

module.exports = graphModel
