const request = require('superagent')

const key = 'ecddf4ae567846ed8236d226dd412cea'
const ruruUrl = `https://data.linz.govt.nz/services/query/v1/feature.dojodata/53382/?v=1.3&key=${key}&query={"road_id":1831584}&include_geom="true"`
// const linzUrl = 'https://data.linz.govt.nz/services/query/v1/feature.dojodata/53382/?v=1.3'

module.exports = {
  getRuru
}

function getRuru () {
  return request.get(ruruUrl)
  // .send(`key=${linzKey}`, 'query={"road_id":1831547}', 'include_geom=true')
  // .send({include_geom: 'true'})
  // .then(res => {
  //   console.log('done')
  // })
}
