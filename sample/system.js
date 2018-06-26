const graphModel = {}

graphModel.elements = [
  // nodes
  {
    data: {
      id: '1',
      label: 'laptop',
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
      id: '2',
      label: 'router',
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
      id: '3',
      label: 'baby camera',
      asto: {
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
      label: 'connection',
      asto: {
        description: 'HTTP, SSH, Telnet',
        medium: 'wireless',
        concept: 'connection'
      }
    }
  }, {
    data: {
      id: '5',
      label: 'connection',
      asto: {
        description: 'HTTP, SSH, Telnet',
        medium: 'wireless',
        concept: 'connection'
      }
    }
  }, {
    data: {
      id: '6',
      label: 'actor',
      asto: {
        description: 'user',
        intent: 'view camera feed',
        concept: 'actor'
      }
    }
  }, {
    data: {
      id: '7',
      label: 'data',
      asto: {
        description: 'data in transit',
        intent: 'local',
        concept: 'data'
      }
    }
  }, {
    data: {
      id: '8',
      label: 'asset',
      asto: {
        description: 'camera feed',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '9',
      label: 'constraint',
      asto: {
        description: 'secure camera feed',
        property: 'authorization',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '10',
      label: 'threat',
      asto: {
        description: 'direct browsing',
        category: 'spoofing',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '27',
      label: 'micronet',
      asto: {
        description: 'smart home',
        state: 'static',
        concept: 'micronet'
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
      id: 'e910',
      source: '9',
      target: '10',
      label: 'mitigates'
    }
  }
]

module.exports = graphModel
