import request from 'superagent'

const linzUrl = '/api/v1/linz'

export function getCoords () {
  return request.get(linzUrl)
}

export function reverseCoords (array) {
  for (let element of array) {
    Array.isArray(element[0])
      ? reverseCoords(element)
      : element.sort()
  }
  return array
}
