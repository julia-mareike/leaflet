import request from 'superagent'
import _ from 'lodash'

import {teReo} from '../tests/dbstreets'

const linzUrl = '/api/v1/linz'

export function getCoords (centre) {
  return request.get(linzUrl)
    .query(centre)
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
  const coords = [[], []]
  features.forEach(road => {
    _.indexOf(teReo, road.properties.road_name_body) > -1
      ? coords[0].push(road.geometry.coordinates)
      : coords[1].push(road.geometry.coordinates)
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
