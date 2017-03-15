const config = require('./config.js')

const system = {}

system.graph = [
  // nodes
  {
    data: {
      id: '1',
      label: 'Net:Internet',
      weight: 100,
      info: {
        type: 'net'
      }
    }
  }, {
    data: {
      id: '2',
      label: 'Micronet:IoT system',
      info: {
        type: 'micronet'
      }
    }
  }, {
    data: {
      id: '3',
      label: 'Thing:temperature sensor',
      info: {
        type: 'thing'
      }
    }
  }, {
    data: {
      id: '4',
      label: 'Security Sensor:server',
      info: {
        type: 'security sensor'
      }
    }
  }, {
    data: {
      id: '5',
      label: 'Thing:mobile device',
      info: {
        type: 'thing'
      }
    }
  }, {
    data: {
      id: '6',
      label: 'Actor:user',
      info: {
        type: 'actor'
      }
    }
  }, {
    data: {
      id: '7',
      label: 'Data:user credential',
      info: {
        type: 'data'
      }
    }
  }, {
    data: {
      id: '8',
      label: 'Data:temperature data',
      info: {
        type: 'data'
      }
    }
  }, {
    data: {
      id: '9',
      label: 'Threat:user credentail can be stolen',
      info: {
        type: 'threat'
      }
    }
  }, {
    data: {
      id: '10',
      label: 'Constraint:client be authorized',
      info: {
        type: 'constraint'
      }
    }
  }, {
    data: {
      id: '11',
      label: 'Threat:non authenticated Things can tamper with data server',
      info: {
        type: 'threat'
      }
    }
  }, {
    data: {
      id: '12',
      label: 'Constraint:client be authenticated',
      info: {
        type: 'constraint'
      }
    }
  }, {
    data: {
      id: '13',
      label: 'Constraint:client be deauthenticated',
      info: {
        type: 'constraint'
      }
    }
  }, {
    data: {
      id: '15',
      label: 'Asset:user credential',
      info: {
        type: 'asset'
      }
    }
  }, {
    data: {
      id: '16',
      label: 'Asset:temperature data',
      info: {
        type: 'asset'
      }
    }
  }, {
    data: {
      id: '17',
      label: 'Thing:mobile phone',
      info: {
        type: 'thing'
      }
    },
    classes: 'red'
  }, {
    data: {
      id: '18',
      label: 'Threat:non authenticated clients cause authenticated clients to disconnect',
      info: {
        type: 'threat'
      }
    }
  }, {
    data: {
      id: '19',
      label: 'Constraint:Micronet ignores request',
      info: {
        type: 'constraint'
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
      source: '2',
      target: '5'
    }
  }, {
    data: {
      id: '34',
      label: 'connects',
      source: '3',
      target: '4'
    }
  }, {
    data: {
      id: '54',
      label: 'connects',
      source: '5',
      target: '4'
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
    },
    classes: 'red'
  }, {
    data: {
      id: '181',
      label: '',
      source: '18',
      target: '1'
    }
  }, {
    data: {
      id: '191',
      label: '',
      source: '19',
      target: '18'
    }
  }
]
system.style = [{
  selector: 'node',
  style: {
    shape: 'circle',
    'background-color': config.comment,
    'color': config.black,
    'text-valign': 'center',
    'font-size': '20px',
    label: 'data(label)'
    // 'text-outline-color': config.comment
  }
}, {
  selector: 'edge',
  style: {
    'line-color': config.comment,
    'color': config.black,
    'font-size': '20px',
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.comment,
    'width': 2
  }
}, {
  selector: ':selected',
  style: {
    'background-color': config.red
  }
}, {
  // selector: '.faded',
  style: {
    'opacity': 0.25,
    'text-opacity': 0
  }
}, {
  selector: '.selection',
  style: {
    'background-color': config.red,
    'line-color': config.red
  }
}, {
  selector: 'node.red',
  style: {
    'background-color': config.red
  }
}, {
  selector: 'edge.red',
  style: {
    'line-color': config.red
  }
}]

module.exports = system
