// design phase concept schema

const dgnMetamodel = {
  // metamodel group concepts
  network: ['micronet', 'net', 'information', 'device', 'application'],
  security: ['asset', 'threat', 'constraint', 'malicious actor'],
  social: ['actor'],
  // allowed concepts connections
  deviceArray: [
    'micronet',
    'net',
    'information',
    'actor',
    'malicious actor',
    'asset',
    'device',
    'application'
  ],
  applicationArray: ['device', 'information', 'asset', 'actor'],
  micronetArray: ['device', 'net', 'micronet'],
  netArray: ['micronet', 'threat', 'device'],
  informationArray: ['asset', 'application', 'device', 'actor'],
  actorArray: ['device', 'application', 'information'],
  maliciousActorArray: ['device', 'application', 'information', 'threat'],
  assetArray: ['information', 'application', 'threat', 'actor', 'device'],
  constraintArray: ['threat', 'micronet'],
  threatArray: ['asset', 'malicious actor', 'constraint', 'net']
}

// concepts and allowed connections pairs
dgnMetamodel.pairs = {
  device: dgnMetamodel.deviceArray,
  application: dgnMetamodel.applicationArray,
  micronet: dgnMetamodel.micronetArray,
  net: dgnMetamodel.netArray,
  information: dgnMetamodel.informationArray,
  actor: dgnMetamodel.actorArray,
  'malicious actor': dgnMetamodel.maliciousActorArray,
  asset: dgnMetamodel.assetArray,
  constraint: dgnMetamodel.constraintArray,
  threat: dgnMetamodel.threatArray
}

module.exports = dgnMetamodel
