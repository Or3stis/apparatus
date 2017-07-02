const impMetamodel = {}

// metamodel concepts
impMetamodel.network = [
  'device',
  'network connection',
  'micronet',
  'net',
  'unidentified node',
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
impMetamodel.sensing = ['event sensor', 'report sensor', 'control sensor']

// allowed concept connections
impMetamodel.deviceArray = [
  'micronet',
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
  'malicious actor',
  'event sensor',
  'report sensor',
  'control sensor'
]
impMetamodel.networkArray = ['device', 'actor', 'information']
impMetamodel.micronetArray = [
  'device',
  'net',
  'micronet',
  'constraint',
  'vulnerability'
]
impMetamodel.netArray = ['micronet', 'unidentified node', 'threat']
impMetamodel.undentifiedNodeArray = ['net', 'actor', 'malicious actor']
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
  'unidentified node',
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
impMetamodel.eventSensorArray = ['application', 'control sensor']
impMetamodel.reportSensorArray = ['application', 'control sensor']
impMetamodel.controlSensorArray = [
  'application',
  'event sensor',
  'report sensor',
  'mechanism'
]

module.exports = impMetamodel
