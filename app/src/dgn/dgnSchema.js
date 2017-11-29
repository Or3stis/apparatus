// design phase concept schema

const dgnMetamodel = {}

// metamodel group concepts
dgnMetamodel.network = [
  'micronet',
  'net',
  'information',
  'device',
  'application'
]
dgnMetamodel.security = ['asset', 'threat', 'constraint', 'malicious actor']
dgnMetamodel.social = ['actor']

// allowed concepts connections
dgnMetamodel.deviceArray = [
  'micronet',
  'net',
  'information',
  'actor',
  'malicious actor',
  'asset',
  'device',
  'application'
]
dgnMetamodel.applicationArray = ['device', 'information', 'asset', 'actor']
dgnMetamodel.micronetArray = ['device', 'net', 'micronet']
dgnMetamodel.netArray = ['micronet', 'threat', 'device']
dgnMetamodel.undentifiedNodeArray = ['net', 'actor', 'malicious actor']
dgnMetamodel.informationArray = ['asset', 'application', 'device', 'actor']
dgnMetamodel.actorArray = ['device', 'application', 'information']
dgnMetamodel.maliciousActorArray = dgnMetamodel.actorArray.concat('threat')
dgnMetamodel.assetArray = [
  'information',
  'application',
  'threat',
  'actor',
  'device'
]
dgnMetamodel.constraintArray = ['threat', 'micronet']
dgnMetamodel.threatArray = ['asset', 'malicious actor', 'constraint', 'net']

module.exports = dgnMetamodel
