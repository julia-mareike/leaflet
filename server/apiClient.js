const request = require('superagent')

const key = 'ecddf4ae567846ed8236d226dd412cea'
const radiusUrl = 'https://data.linz.govt.nz/services/query/v1/vector.json'

function getCoords (coords) {
  return request.get(radiusUrl)
    .query({key: key})
    .query({layer: 53382})
    .query({x: coords.lng})
    .query({y: coords.lat})
    .query({max_results: 100})
    .query({radius: 10000})
    .query({geometry: true})
}

module.exports = {
  getCoords
}
