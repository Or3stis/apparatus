// contains the attribute/connection patterns and the insights.js

const insightList = {
  s0: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'perception',
    insight: 'Devices in the perception layer require physical security.',
    nodes: []
  },
  s1: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'gateway',
    insight:
      'Devices in the gateway layer are usually external facing nodes. Malicious actors can target them with network attacks.',
    nodes: []
  },
  s2: {
    concept: 'device',
    attribute: 'layer',
    attributeValue: 'application',
    insight:
      'Devices in the application layer are usually provided by third parties. The security configuration of third party devices must be taken into consideration since it affects the security posture of the overall system.',
    nodes: []
  },
  s3: {
    concept: 'device',
    attribute: 'update',
    attributeValue: 'false',
    insight: 'Treat devices that cannot be updated as compromised.',
    nodes: []
  },
  s4: {
    concept: 'connection',
    attribute: 'medium',
    attributeValue: 'wireless',
    insight:
      'Wireless connections are subject to information disclosure attacks. Use encrypted protocols.',
    nodes: []
  },
  s5: {
    concept: 'application',
    attribute: 'update',
    attributeValue: 'false',
    insight: 'Treat applications that cannot be updated as compromised.',
    nodes: []
  }
}

module.exports = insightList
