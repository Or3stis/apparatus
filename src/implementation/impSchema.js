const impMetamodel = {}

// metamodel concepts
impMetamodel.network = ['device', 'network connection', 'micronet',
  'net', 'unidentified node', 'data'
]
impMetamodel.security = ['asset', 'threat', 'vulnerability', 'mechanism',
  'constraint', 'malicious actor'
]
impMetamodel.social = ['actor']

// allowed concept connections
impMetamodel.deviceArray = ['micronet', 'vulnerability',
  'network connection', 'data', 'actor', 'asset', 'device'
]
impMetamodel.networkArray = ['device', 'actor', 'data']
impMetamodel.micronetArray = ['device', 'net', 'micronet', 'constraint',
  'vulnerability'
]
impMetamodel.netArray = ['micronet', 'unidentified node', 'threat']
impMetamodel.undentifiedNodeArray = ['net', 'actor', 'malicious actor']
impMetamodel.dataArray = ['asset', 'device', 'network connection', 'actor']
impMetamodel.actorArray = ['asset', 'network connection', 'device',
  'unidentified node', 'data'
]
impMetamodel.maliciousActorArray = impMetamodel.actorArray.concat('threat')
impMetamodel.assetArray = ['data', 'threat', 'actor', 'device']
impMetamodel.constraintArray = ['threat', 'micronet', 'mechanism']
impMetamodel.mechanismArray = ['vulnerability', 'constraint']
impMetamodel.threatArray = ['asset', 'malicious actor', 'vulnerability', 'constraint', 'net']
impMetamodel.vulnerabilityArray = ['threat', 'micronet', 'mechanism', 'device',
  'network connection'
]

module.exports = impMetamodel
