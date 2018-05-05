const request = require('superagent')

const key = 'ecddf4ae567846ed8236d226dd412cea'
// const ruru = '{"road_id":1831464}'
// const ruruUrl = 'https://data.linz.govt.nz/services/query/v1/feature.dojodata/53382/'
const radiusUrl = 'https://data.linz.govt.nz/services/query/v1/vector.json'

function getCoords () {
  return request.get(radiusUrl)
    .query({key: key})
    .query({layer: 53382}) // vector
    .query({x: 174.7585488}) // vector
    .query({y: -36.8673986}) // vector
    .query({max_results: 30}) // vector
    .query({radius: 1000}) // vector
    .query({geometry: true}) // vector
    // .query({v: 1.3}) // ruru
    // .query({query: ruru}) // ruru
    // .query({include_geom: true}) // ruru
}

module.exports = {
  getCoords
}
