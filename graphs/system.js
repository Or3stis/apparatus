const system = {}

system.graph = [
  // nodes
  {
    data: {
      id: 'a',
      label: 'node 1',
      info: {
        description: 'laptop',
        type: 'device',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'b',
      label: 'node 2',
      info: {
        description: 'server',
        type: 'device',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'constraint'
      }
    }
  }, {
    data: {
      id: 'c',
      label: 'node 3',
      info: {
        description: 'server',
        type: 'device',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'd',
      label: 'node 3',
      info: {
        description: 'server',
        type: 'threat',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'e',
      label: 'node 4',
      info: {
        description: 'server',
        type: 'constraint',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'threat'
      }
    }
  }, {
    data: {
      id: 'f',
      label: 'node 5',
      info: {
        description: 'server',
        type: 'threat',
        id: '02',
        aspect: 'physical',
        layer: 'application',
        nodeType: 'server',
        attribute: 'process',
        input: 'dataDigital',
        output: 'dataDigital',
        concept: 'threat'
      }
    }
  },
  // edges
  {
    data: {
      id: 'ab',
      source: 'a',
      target: 'b'
    }
  }, {
    data: {
      id: 'cd',
      source: 'c',
      target: 'd'
    }
  }, {
    data: {
      id: 'ef',
      source: 'e',
      target: 'f'
    }
  }, {
    data: {
      id: 'ac',
      source: 'a',
      target: 'd'
    }
  }, {
    data: {
      id: 'be',
      source: 'b',
      target: 'e'
    }
  }
]

module.exports = system
