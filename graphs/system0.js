// const config = require('./config.js')

const system = {}

system.graph = [
  // nodes
  {
    data: {
      id: '1',
      label: 'Net',
      info: {
        type: 'net',
        concept: 'net'
      }
    }
  }, {
    data: {
      id: '2',
      label: 'Micronet',
      info: {
        type: 'micronet',
        concept: 'micronet'
      }
    }
  }, {
    data: {
      id: '3',
      label: 'Device',
      info: {
        type: 'thing',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '4',
      label: 'Device',
      info: {
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
      info: {
        type: 'thing',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '6',
      label: 'Actor',
      info: {
        type: 'actor',
        concept: 'actor'
      }
    }
  }, {
    data: {
      id: '7',
      label: 'Data',
      info: {
        type: 'data',
        concept: 'data'
      }
    }
  }, {
    data: {
      id: '8',
      label: 'Data',
      info: {
        type: 'data',
        concept: 'data'
      }
    }
  }, {
    data: {
      id: '9',
      label: 'Threat',
      info: {
        type: 'threat',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '10',
      label: 'Constraint',
      info: {
        type: 'constraint',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '11',
      label: 'Threat',
      info: {
        type: 'threat',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: '12',
      label: 'Constraint',
      info: {
        type: 'constraint',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '13',
      label: 'Constraint',
      info: {
        type: 'constraint',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: '15',
      label: 'Asset',
      info: {
        type: 'asset',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '16',
      label: 'Asset',
      info: {
        type: 'asset',
        concept: 'asset'
      }
    }
  }, {
    data: {
      id: '17',
      label: 'Device',
      info: {
        type: 'thing',
        concept: 'device'
      }
    }
  }, {
    data: {
      id: '18',
      label: 'Network Connection',
      info: {
        type: 'thing',
        concept: 'network connection'
      }
    }
  }, {
    data: {
      id: '19',
      label: 'Network Connection',
      info: {
        type: 'thing',
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
// system.style = [{
//   selector: 'node',
//   style: {
//     shape: 'circle',
//     'background-color': config.comment,
//     'color': config.black,
//     'text-valign': 'center',
//     'font-size': '20px',
//     label: 'data(label)'
//     // 'text-outline-color': config.comment
//   }
// }, {
//   selector: 'edge',
//   style: {
//     'line-color': config.comment,
//     'color': config.black,
//     'font-size': '20px',
//     label: 'data(label)',
//     'target-arrow-shape': 'triangle',
//     'target-arrow-color': config.comment,
//     'width': 2
//   }
// }, {
//   selector: ':selected',
//   style: {
//     'background-color': config.red
//   }
// }, {
//   // selector: '.faded',
//   style: {
//     'opacity': 0.25,
//     'text-opacity': 0
//   }
// }, {
//   selector: '.selection',
//   style: {
//     'background-color': config.red,
//     'line-color': config.red
//   }
// }, {
//   selector: 'node.red',
//   style: {
//     'background-color': config.red
//   }
// }, {
//   selector: 'edge.red',
//   style: {
//     'line-color': config.red
//   }
// }]

module.exports = system
