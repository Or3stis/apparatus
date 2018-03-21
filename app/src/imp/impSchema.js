// implementation phase concept schema

const impMetamodel = {
  // metamodel group concepts
  network: [
    'device',
    'network connection',
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
    'network connection',
    'information',
    'actor',
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
  networkArray: ['device', 'actor', 'information'],
  micronetArray: ['device', 'net', 'micronet', 'constraint', 'vulnerability'],
  netArray: ['micronet', 'device', 'threat'],
  informationArray: [
    'asset',
    'device',
    'network connection',
    'actor',
    'application'
  ],
  actorArray: [
    'asset',
    'network connection',
    'device',
    'information',
    'application'
  ],
  maliciousActorArray: [
    'asset',
    'network connection',
    'device',
    'information',
    'application',
    'threat'
  ],
  assetArray: ['information', 'threat', 'actor', 'device', 'application'],
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
    'network connection',
    'application'
  ]
}

// concepts and allowed connections pairs
impMetamodel.pairs = {
  device: impMetamodel.deviceArray,
  application: impMetamodel.applicationArray,
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
