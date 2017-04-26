const dgnMetamodel = {}

// metamodel concepts
dgnMetamodel.network = ['micronet',
  'net', 'unidentified node', 'data', 'thing']
dgnMetamodel.security = ['asset', 'threat',
  'constraint', 'malicious actor'
]
dgnMetamodel.social = ['actor']

// allowed concepts connections
dgnMetamodel.thingArray = ['micronet', 'data', 'actor', 'asset', 'thing']
dgnMetamodel.micronetArray = ['thing', 'net', 'micronet']
dgnMetamodel.netArray = ['micronet', 'thing', 'threat']
dgnMetamodel.dataArray = ['asset', 'thing', 'actor']
dgnMetamodel.actorArray = ['asset', 'thing', 'data']
dgnMetamodel.assetArray = ['data', 'threat', 'actor', 'thing']
dgnMetamodel.constraintArray = ['threat']
dgnMetamodel.threatArray = ['asset', 'actor', 'constraint', 'net']

module.exports = dgnMetamodel
