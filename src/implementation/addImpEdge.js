'use strict'

const printChat = require('../printChat.js')
const addEdge = require('../addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) {
  if (srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'composed')
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'device' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
  } else if (srcNodeCpt === 'net' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requests')
  } else if (srcNodeCpt === 'net' && trgNodeCpt === 'threat') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
  } else if (srcNodeCpt === 'unidentified node' && trgNodeCpt === 'net') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'belongs')
  } else if (srcNodeCpt === 'network connection' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'connects')
  } else if (srcNodeCpt === 'network connection' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
  } else if (srcNodeCpt === 'information' && trgNodeCpt === 'application') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'runs')
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'has')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'application') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'unidentified node') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'actor' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'application') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'unidentified node') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'uses')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'knows')
  } else if (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'report sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'report sensor')
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'contorl sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'application' && trgNodeCpt === 'event sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'report sensor' && trgNodeCpt === 'control sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'notifies')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'event sensor') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'listens')
  } else if (srcNodeCpt === 'control sensor' && trgNodeCpt === 'mechanism') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'triggers')
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'threat') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
  } else if (srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'imposes')
  } else if (srcNodeCpt === 'mechanism' && trgNodeCpt === 'constraint') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'satisfies')
  } else if (srcNodeCpt === 'mechanism' && trgNodeCpt === 'vulnerability') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'protects')
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'vulnerability') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'exploits')
  } else if (srcNodeCpt === 'threat' && trgNodeCpt === 'asset') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'targets')
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'micronet') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'network connection') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'vulnerability' && trgNodeCpt === 'application') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'affects')
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'device') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'application') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else if (srcNodeCpt === 'asset' && trgNodeCpt === 'information') {
    addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'is')
  } else {
    printChat('mistake 😔')
  }
}
