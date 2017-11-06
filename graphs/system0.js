const graphModel = {}

graphModel.elements = [
  // nodes
  {
    data: {
      id: '1',
      label: 'Net',
      asto: {
        description: 'laptop',
        concept: 'net'
      }
    }
  }, {
    data: {
      id: '2',
      label: 'Micronet',
      asto: {
        description: 'laptop',
        concept: 'micronet'
      }
    }
  }, {
    data: {
      id: '3',
      label: 'Device',
      asto: {
        description: 'laptop',
        aspect: 'physical',
        layer: 'perception',
        type: 'server',
        service: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        update: 'automatic',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '4',
      label: 'Device',
      asto: {
        description: 'laptop',
        aspect: 'physical',
        layer: 'perception',
        type: 'server',
        service: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        update: 'automatic',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '5',
      label: 'Device',
      asto: {
        description: 'laptop',
        aspect: 'physical',
        layer: 'perception',
        type: 'server',
        service: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        update: 'automatic',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '6',
      label: 'Actor',
      asto: {
        description: 'laptop',
        concept: 'actor'
      }
    }
  }, {
    data: {
      id: '7',
      label: 'Data',
      asto: {
        description: 'laptop',
        concept: 'data'
      }
    }
  }, {
    data: {
      id: '8',
      label: 'Data',
      asto: {
        description: 'laptop',
        concept: 'data'
      }
    }
  }, {
    data: {
      id: '9',
      label: 'Threat',
      asto: {
        description: 'laptop',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '10',
      label: 'Constraint',
      asto: {
        description: 'laptop',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '11',
      label: 'Threat',
      asto: {
        description: 'laptop',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '12',
      label: 'Constraint',
      asto: {
        description: 'laptop',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '13',
      label: 'Constraint',
      asto: {
        description: 'laptop',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '15',
      label: 'Asset',
      asto: {
        description: 'laptop',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '16',
      label: 'Asset',
      asto: {
        description: 'laptop',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '17',
      label: 'Device',
      asto: {
        description: 'laptop',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '18',
      label: 'Network Connection',
      asto: {
        description: 'laptop',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: '19',
      label: 'Network Connection',
      asto: {
        description: 'laptop',
        concept: 'network connection'
      }
    }
  },
  // edges
  {
    data: {
      id: '23',
      label: '',
      source: '2',
      target: '3'
    }
  }, {
    data: {
      id: '24',
      label: '',
      source: '2',
      target: '4'
    }
  }, {
    data: {
      id: '25',
      label: '',
      source: '5',
      target: '2'
    }
  }, {
    data: {
      id: '183',
      label: 'connects',
      weight: 1,
      source: '18',
      target: '3'
    }
  }, {
    data: {
      id: '184',
      label: 'connects',
      weight: 1,
      source: '18',
      target: '4'
    }
  }, {
    data: {
      id: '194',
      label: 'connects',
      source: '19',
      target: '4'
    }
  }, {
    data: {
      id: '195',
      label: 'connects',
      source: '19',
      target: '5'
    }
  }, {
    data: {
      id: '65',
      label: 'uses',
      source: '6',
      target: '5'
    }
  }, {
    data: {
      id: '47',
      label: 'has',
      source: '4',
      target: '7'
    }
  }, {
    data: {
      id: '48',
      label: 'has',
      source: '4',
      target: '8'
    }
  }, {
    data: {
      id: '715',
      label: 'is',
      source: '7',
      target: '15'
    }
  }, {
    data: {
      id: '816',
      label: 'is',
      source: '8',
      target: '16'
    }
  }, {
    data: {
      id: '915',
      label: 'targets',
      source: '9',
      target: '15'
    }
  }, {
    data: {
      id: '1116',
      label: 'targets',
      source: '11',
      target: '16'
    }
  }, {
    data: {
      id: '109',
      label: 'mitigates',
      source: '10',
      target: '9'
    }
  }, {
    data: {
      id: '1211',
      label: 'mitigates',
      source: '12',
      target: '11'
    }
  }, {
    data: {
      id: '1311',
      label: 'mitigates',
      source: '13',
      target: '11'
    }
  }, {
    data: {
      id: '1213',
      label: 'requests',
      source: '1',
      target: '2'
    }
  }, {
    data: {
      id: '171',
      label: '',
      source: '17',
      target: '2'
    }
  }, {
    data: {
      id: '210',
      label: 'imposes',
      source: '10',
      target: '2'
    }
  }, {
    data: {
      id: '212',
      label: 'imposes',
      source: '12',
      target: '2'
    }
  }, {
    data: {
      id: '213',
      label: 'imposes',
      source: '13',
      target: '2'
    }
  }
]

module.exports = graphModel
