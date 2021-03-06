module.exports = {
  description: '[layer:extent] the layer extent field is missing from the protocol buffer. The spec says, "A layer MUST contain an extent that describes the width and height of the tile in integer coordinates." so this could be interpreted as invalid, but since proto2 parsers should assign the default, this can be considered valid.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: []
      }
    ]
  },
  proto: '2.1'
};
