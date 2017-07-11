const dgnMetamodel = {}

// metamodel group concepts
dgnMetamodel.network = ['micronet', 'net', 'information', 'thing']
dgnMetamodel.security = ['asset', 'threat', 'constraint', 'malicious actor']
dgnMetamodel.social = ['actor']
dgnMetamodel.sensing = ['sensor']

// allowed concepts connections
dgnMetamodel.thingArray = [
  'micronet',
  'information',
  'actor',
  'malicious actor',
  'asset',
  'thing'
]
dgnMetamodel.micronetArray = ['thing', 'net', 'micronet']
dgnMetamodel.netArray = ['micronet', 'thing', 'threat']
dgnMetamodel.informationArray = ['asset', 'thing', 'actor']
dgnMetamodel.actorArray = ['thing', 'information']
dgnMetamodel.maliciousActorArray = dgnMetamodel.actorArray.concat('threat')
dgnMetamodel.assetArray = ['information', 'threat', 'actor', 'thing']
dgnMetamodel.constraintArray = ['threat', 'micronet']
dgnMetamodel.threatArray = ['asset', 'malicious actor', 'constraint', 'net']
dgnMetamodel.sensorArray = ['thing']

module.exports = dgnMetamodel
