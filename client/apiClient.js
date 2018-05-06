import request from 'superagent'
import _ from 'lodash'

const linzUrl = '/api/v1/linz'

export function getCoords () {
  return request.get(linzUrl)
}

export const reverseCoords = array => {
  for (let element of array) {
    Array.isArray(element[0])
      ? reverseCoords(element)
      : element.sort()
  }
  return array
}

export const concatCoords = features => {
  const coords = []
  features.forEach(road => {
    coords.push(road.geometry.coordinates)
  })
  return coords
}

export const nameCoords = features => {
  const streets = []
  features.forEach(road => {
    streets.push(road.properties.road_name_body)
  })
  return streets
}
