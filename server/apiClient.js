const request = require('superagent')

const key = 'ecddf4ae567846ed8236d226dd412cea'
const radiusUrl = 'https://data.linz.govt.nz/services/query/v1/vector.json'

function getCoords () {
  return request.get(radiusUrl)
    .query({key: key})
    .query({layer: 53382})
    .query({x: 174.7585488})
    .query({y: -36.8673986})
    .query({max_results: 100})
    .query({radius: 1000})
    .query({geometry: true})
}

module.exports = {
  getCoords
}
