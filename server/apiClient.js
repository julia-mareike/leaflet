const request = require('superagent')

const key = 'ecddf4ae567846ed8236d226dd412cea'
const radiusUrl = 'https://data.linz.govt.nz/services/query/v1/vector.json'

function getCoords (coords) {
  return request.get(radiusUrl)
    .query({key: key})
    .query({layer: 53382})
    // may need to reverse xy/latlongs later
    .query({x: coords[1]})
    .query({y: coords[0]})
    .query({max_results: 100})
    .query({radius: 1000})
    .query({geometry: true})
}

module.exports = {
  getCoords
}
