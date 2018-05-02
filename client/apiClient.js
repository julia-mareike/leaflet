import request from 'superagent'

const linzUrl = '/api/v1/linz'

export function getCoords () {
  return request.get(linzUrl)
}
