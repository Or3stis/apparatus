const impMetamodel = {}

// metamodel group concepts
impMetamodel.network = [
  'device',
  'network connection',
  'micronet',
  'net',
  'information',
  'application'
]
impMetamodel.security = [
  'asset',
  'threat',
  'vulnerability',
  'mechanism',
  'constraint',
  'malicious actor'
]
impMetamodel.social = ['actor']

// allowed concept connections
impMetamodel.deviceArray = [
  'micronet',
  'net',
  'vulnerability',
  'network connection',
  'information',
  'actor',
  'asset',
  'device',
  'application'
]
impMetamodel.applicationArray = [
  'device',
  'asset',
  'information',
  'vulnerability',
  'actor',
  'malicious actor'
]
impMetamodel.networkArray = ['device', 'actor', 'information']
impMetamodel.micronetArray = [
  'device',
  'net',
  'micronet',
  'constraint',
  'vulnerability'
]
impMetamodel.netArray = ['micronet', 'device', 'threat']
impMetamodel.informationArray = [
  'asset',
  'device',
  'network connection',
  'actor',
  'application'
]
impMetamodel.actorArray = [
  'asset',
  'network connection',
  'device',
  'information',
  'application'
]
impMetamodel.maliciousActorArray = impMetamodel.actorArray.concat('threat')
impMetamodel.assetArray = [
  'information',
  'threat',
  'actor',
  'device',
  'application'
]
impMetamodel.constraintArray = ['threat', 'micronet', 'mechanism']
impMetamodel.mechanismArray = ['vulnerability', 'constraint']
impMetamodel.threatArray = [
  'asset',
  'malicious actor',
  'vulnerability',
  'constraint',
  'net'
]
impMetamodel.vulnerabilityArray = [
  'threat',
  'micronet',
  'mechanism',
  'device',
  'network connection',
  'application'
]

module.exports = impMetamodel
