const graphModel = {}

graphModel.elements = [
  // nodes
  {
    data: {
      id: 'n1',
      label: 'device',
      asto: {
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
      id: 'n2',
      label: 'device',
      asto: {
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
      id: 'n3',
      label: 'device',
      asto: {
        description: 'baby camera',
        aspect: 'physical',
        layer: 'perception',
        type: 'Philips in Sight',
        service: 'camera',
        input: 'dataEnvironmental',
        output: 'dataDigital',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: 'n4',
      label: 'network connection',
      asto: {
        description: 'HTTP, SSH, Telnet',
        medium: 'wireless',
        listOfProtocols: 'TCP',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: 'n5',
      label: 'network connection',
      asto: {
        description: 'HTTP, SSH, Telnet',
        medium: 'wireless',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: 'n6',
      label: 'actor',
      asto: {
        description: 'user',
        intent: 'view camera feed',
        concept: 'actor'
      }
    }
  }, {
    data: {
      id: 'n7',
      label: 'information',
      asto: {
        description: 'data in transit',
        intent: 'local',
        concept: 'information'
      }
    }
  },
  {
    data: {
      id: 'n8',
      label: 'asset',
      asto: {
        description: 'camera feed',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: 'n9',
      label: 'constraint',
      asto: {
        description: 'secure camera feed',
        property: 'authorization',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: 'n10',
      label: 'threat',
      asto: {
        description: 'direct browsing',
        category: 'spoofing',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'n11',
      label: 'vulnerability',
      asto: {
        description: 'CVE-2015-2884',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: 'n12',
      label: 'malicious actor',
      asto: {
        description: 'attacker',
        intent: 'view camera feed',
        concept: 'malicious actor'
      }
    }
  }, {
    data: {
      id: 'n13',
      label: 'mechanism',
      asto: {
        description: 'whitelist authorized users',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: 'n14',
      label: 'asset',
      asto: {
        description: 'device credentials',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: 'n15',
      label: 'constraint',
      asto: {
        description: 'protect Device credentials',
        property: 'confidentiality',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: 'n16',
      label: 'mechanism',
      asto: {
        description: 'update Device firmware',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: 'n17',
      label: 'malicious actor',
      asto: {
        description: 'attacker',
        intent: 'access router',
        concept: 'malicious actor'
      }
    }
  }, {
    data: {
      id: 'n18',
      label: 'threat',
      asto: {
        description: 'password credentials',
        category: 'informationDisclosure',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'n19',
      label: 'vulnerability',
      asto: {
        description: 'CVE-2017-5521',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: 'n20',
      label: 'constraint',
      asto: {
        description: 'Device physical protection',
        property: 'integrity',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: 'n21',
      label: 'asset',
      asto: {
        description: 'physical devices',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: 'n22',
      label: 'threat',
      asto: {
        description: 'physical tampering',
        category: 'integrity',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'n23',
      label: 'mechanism',
      asto: {
        description: 'physically secure acces',
        concept: 'mechanism'
      }
    }
  }, {
    data: {
      id: 'n24',
      label: 'vulnerability',
      asto: {
        description: 'physically accessible',
        concept: 'vulnerability'
      }
    }
  }, {
    data: {
      id: 'n25',
      label: 'net',
      asto: {
        description: 'internet',
        concept: 'net'
      }
    }
  }, {
    data: {
      id: 'n26',
      label: 'device',
      asto: {
        description: 'server',
        aspect: 'physical',
        layer: 'application',
        type: 'Ubuntu server',
        service: 'processing',
        input: 'dataDigital',
        output: 'dataDigital',
        update: 'action',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: 'n27',
      label: 'micronet',
      asto: {
        description: 'smart home',
        state: 'static',
        concept: 'micronet'
      }
    }
  }, {
    data: {
      id: 'n28',
      label: 'malicious actor',
      asto: {
        description: 'attacker',
        intent: 'steal Devices',
        concept: 'malicious actor'
      }
    }
  },
  // edges
  {
    data: {
      id: 'en27n1',
      source: 'n1',
      target: 'n27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'en27n2',
      source: 'n2',
      target: 'n27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'en27n3',
      source: 'n3',
      target: 'n27',
      label: 'belongs'
    }
  }, {
    data: {
      id: 'en1n4',
      source: 'n4',
      target: 'n1',
      label: 'connects'
    }
  }, {
    data: {
      id: 'en2n4',
      source: 'n4',
      target: 'n2',
      label: 'connects'
    }
  }, {
    data: {
      id: 'en3n5',
      source: 'n5',
      target: 'n3',
      label: 'connects'
    }
  }, {
    data: {
      id: 'en2n5',
      source: 'n5',
      target: 'n2',
      label: 'connects'
    }
  }, {
    data: {
      id: 'en6n1',
      source: 'n6',
      target: 'n1',
      label: 'uses'
    }
  }, {
    data: {
      id: 'en21n1',
      source: 'n1',
      target: 'n21',
      label: 'is'
    }
  }, {
    data: {
      id: 'en3n21',
      source: 'n3',
      target: 'n21',
      label: 'is'
    }
  }, {
    data: {
      id: 'en22n21',
      source: 'n22',
      target: 'n21',
      label: 'targets'
    }
  }, {
    data: {
      id: 'en22n24',
      source: 'n22',
      target: 'n24',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'en23n24',
      source: 'n23',
      target: 'n24',
      label: 'protects'
    }
  }, {
    data: {
      id: 'en23n20',
      source: 'n23',
      target: 'n20',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'en20n22',
      source: 'n20',
      target: 'n22',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'en20n27',
      source: 'n20',
      target: 'n27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'en28n22',
      source: 'n28',
      target: 'n22',
      label: 'poses'
    }
  }, {
    data: {
      id: 'en25n27',
      source: 'n25',
      target: 'n27',
      label: 'requests'
    }
  }, {
    data: {
      id: 'en24n1',
      source: 'n24',
      target: 'n1',
      label: 'affects'
    }
  }, {
    data: {
      id: 'en23n3',
      source: 'n23',
      target: 'n3',
      label: 'affects'
    }
  }, {
    data: {
      id: 'en3n7',
      source: 'n3',
      target: 'n7',
      label: 'has'
    }
  }, {
    data: {
      id: 'en7n8',
      source: 'n7',
      target: 'n8',
      label: 'is'
    }
  }, {
    data: {
      id: 'en9n27',
      source: 'n9',
      target: 'n27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'en9n10',
      source: 'n9',
      target: 'n10',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'en10n8',
      source: 'n10',
      target: 'n8',
      label: 'targets'
    }
  }, {
    data: {
      id: 'en10n11',
      source: 'n10',
      target: 'n11',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'en12n10',
      source: 'n12',
      target: 'n10',
      label: 'poses'
    }
  }, {
    data: {
      id: 'en13n9',
      source: 'n13',
      target: 'n9',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'en13n11',
      source: 'n13',
      target: 'n11',
      label: 'protects'
    }
  }, {
    data: {
      id: 'en11n3',
      source: 'n11',
      target: 'n3',
      label: 'affects'
    }
  }, {
    data: {
      id: 'en2n14',
      source: 'n2',
      target: 'n14',
      label: 'is'
    }
  }, {
    data: {
      id: 'en18n14',
      source: 'n18',
      target: 'n14',
      label: 'targets'
    }
  }, {
    data: {
      id: 'en15n27',
      source: 'n15',
      target: 'n27',
      label: 'imposes'
    }
  }, {
    data: {
      id: 'en16n15',
      source: 'n16',
      target: 'n15',
      label: 'satisfies'
    }
  }, {
    data: {
      id: 'en15n18',
      source: 'n15',
      target: 'n18',
      label: 'mitigates'
    }
  }, {
    data: {
      id: 'en18n19',
      source: 'n18',
      target: 'n19',
      label: 'exploits'
    }
  }, {
    data: {
      id: 'en19n2',
      source: 'n19',
      target: 'n2',
      label: 'affects'
    }
  }, {
    data: {
      id: 'en17n18',
      source: 'n17',
      target: 'n18',
      label: 'poses'
    }
  }, {
    data: {
      id: 'en16n19',
      source: 'n16',
      target: 'n19',
      label: 'protects'
    }
  }, {
    data: {
      id: 'en26n25',
      source: 'n26',
      target: 'n25',
      label: 'belongs'
    }
  }
]

module.exports = graphModel
