import request from 'superagent'

const linzUrl = '/api/v1/linz'

export function getCoords () {
  return request.get(linzUrl)
}

export function reverseCoords (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      array[i][j].sort()
    }
  }
  return array
}
