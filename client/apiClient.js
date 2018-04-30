import request from 'superagent'

const linzUrl = '/api/v1/linz'

export function getRuru () {
  return request.get(linzUrl)
}
