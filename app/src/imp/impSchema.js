// implementation phase concept schema

const impMetamodel = {
  // metamodel group concepts
  network: [
    'device',
    'connection',
    'micronet',
    'net',
    'information',
    'application'
  ],
  security: [
    'asset',
    'threat',
    'vulnerability',
    'mechanism',
    'constraint',
    'malicious actor'
  ],
  social: ['actor'],
  // allowed concept connections
  deviceArray: [
    'micronet',
    'net',
    'vulnerability',
    'connection',
    'information',
    'actor',
    'malicious actor',
    'asset',
    'device',
    'application'
  ],
  applicationArray: [
    'device',
    'asset',
    'information',
    'vulnerability',
    'actor',
    'malicious actor'
  ],
  connectionArray: ['device', 'actor', 'information'],
  micronetArray: ['device', 'net', 'micronet', 'constraint', 'vulnerability'],
  netArray: ['micronet', 'device', 'threat'],
  informationArray: ['asset', 'device', 'connection', 'actor', 'application'],
  actorArray: ['asset', 'device', 'information', 'application'],
  maliciousActorArray: ['device', 'information', 'application', 'threat'],
  assetArray: ['information', 'threat', 'device', 'application', 'micronet'],
  constraintArray: ['threat', 'micronet', 'mechanism'],
  mechanismArray: ['vulnerability', 'constraint'],
  threatArray: [
    'asset',
    'malicious actor',
    'vulnerability',
    'constraint',
    'net'
  ],
  vulnerabilityArray: [
    'threat',
    'micronet',
    'mechanism',
    'device',
    'connection',
    'application'
  ]
}

// concepts and allowed connections pairs
impMetamodel.pairs = {
  device: impMetamodel.deviceArray,
  application: impMetamodel.applicationArray,
  connection: impMetamodel.connectionArray,
  micronet: impMetamodel.micronetArray,
  net: impMetamodel.netArray,
  information: impMetamodel.informationArray,
  actor: impMetamodel.actorArray,
  'malicious actor': impMetamodel.maliciousActorArray,
  asset: impMetamodel.assetArray,
  constraint: impMetamodel.constraintArray,
  threat: impMetamodel.threatArray,
  mechanism: impMetamodel.mechanismArray,
  vulnerability: impMetamodel.vulnerabilityArray
}

module.exports = impMetamodel
