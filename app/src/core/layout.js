// source: http://js.cytoscape.org/#layouts/cose

/**
 * changes the layout of the graph
 *
 * @param {Object} cy cytoscape instance
 * @param {string} selection user selection
 */
module.exports = function layout (cy, selection) {
  // cose layout
  const coseLayout = cy.layout({
    name: 'cose',
    // Called on `layoutready`
    ready: () => {},
    // Called on `layoutstop`
    stop: () => {},
    // Whether to animate while running the layout
    animate: false,
    // The layout animates only after this many milliseconds
    // (prevents flashing on fast runs)
    animationThreshold: 250,
    // Number of iterations between consecutive screen positions update
    // (0 -> only updated on the end)
    refresh: 20,
    fit: true,
    padding: 10,
    // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    boundingBox: undefined,
    // Excludes the label when calculating node bounding boxes for the layout algorithm
    nodeDimensionsIncludeLabels: true,
    // Randomize the initial positions of the nodes (true) or use existing positions (false)
    randomize: false,
    // Extra spacing between components in non-compound graphs
    componentSpacing: 100,
    // Node repulsion (non overlapping) multiplier
    nodeRepulsion: node => {
      return 400000
    },
    // Node repulsion (overlapping) multiplier
    nodeOverlap: 1,
    // Ideal edge (non nested) length
    idealEdgeLength: edge => {
      return 10
    },
    // Divisor to compute edge forces
    edgeElasticity: edge => {
      return 100
    },
    // Nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 10,
    // Gravity force (constant)
    gravity: 10,
    // Maximum number of iterations to perform
    numIter: 1000,
    // Initial temperature (maximum node displacement)
    initialTemp: 200,
    // Cooling factor (how the temperature is reduced between consecutive iterations
    coolingFactor: 0.95,
    // Lower temperature threshold (below this point the layout will end)
    minTemp: 1.0,
    // Pass a reference to weaver to use threads for calculations
    weaver: false
  })

  // breadthfirst layout
  const breadLayout = cy.layout({
    name: 'breadthfirst',
    fit: true,
    directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
    padding: 30,
    circle: false, // put depths in concentric circles if true, put depths top down if false
    spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    roots: undefined, // the roots of the trees
    maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    ready: undefined, // callback on layoutready
    stop: undefined // callback on layoutstop
  })

  // breadthfirst in circle layout
  const breadLayoutCircle = cy.layout({
    name: 'breadthfirst',
    fit: true,
    directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
    padding: 30,
    circle: true, // put depths in concentric circles if true, put depths top down if false
    spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    roots: undefined, // the roots of the trees
    maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    ready: undefined, // callback on layoutready
    stop: undefined // callback on layoutstop
  })

  // circular layout
  const circle = cy.layout({
    name: 'circle',
    fit: true,
    padding: 30,
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    radius: undefined, // the radius of the circle
    startAngle: 3 / 2 * Math.PI, // where nodes start in radians
    sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
    clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
    sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
    animate: false,
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    ready: undefined, // callback on layoutready
    stop: undefined // callback on layoutstop
  })

  // grid layout
  const grid = cy.layout({
    name: 'grid',
    fit: true,
    padding: 30,
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    condense: false, // uses all available space on false, uses minimal space on true
    rows: undefined, // force num of rows in the grid
    cols: undefined, // force num of columns in the grid
    position: node => {}, // returns { row, col } for element
    sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    ready: undefined, // callback on layoutready
    stop: undefined // callback on layoutstop
  })

  const concentric = cy.layout({
    name: 'concentric',

    fit: true, // whether to fit the viewport to the graph
    padding: 30, // the padding on fit
    startAngle: 3 / 2 * Math.PI, // where nodes start in radians
    sweep: undefined, // how many radians should be between the first and last
    clockwise: true, // whether the layout should go clockwise (true)
    equidistant: true, // whether levels have an equal radial distance between them, may cause bounding box overflow
    minNodeSpacing: 90, // min spacing between outside of nodes
    boundingBox: undefined, // constrain layout bounds;
    avoidOverlap: true, // prevents node overlap
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    height: undefined, // height of layout area (overrides container height)
    width: undefined, // width of layout area (overrides container width)
    spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    concentric: node => {
      // returns numeric value for each node, placing higher nodes in levels towards the centre
      return node.degree()
    },
    levelWidth: nodes => {
      return nodes.maxDegree() / 2
    },
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    animateFilter: (node, i) => {
      return true
    }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    ready: undefined, // callback on layoutready
    stop: undefined, // callback on layoutstop
    transform: (node, position) => {
      return position
    }
  })

  switch (selection) {
    case 'cose':
      coseLayout.run()
      break
    case 'breadthfirst':
      breadLayout.run()
      break
    case 'circle':
      circle.run()
      break
    case 'grid':
      grid.run()
      break
    case 'breadthfirst(circle)':
      breadLayoutCircle.run()
      break
    case 'concentric':
      concentric.run()
      break
    default:
      console.error('error in layout.js')
  }
}
