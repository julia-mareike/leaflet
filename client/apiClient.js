import request from 'superagent'
import _ from 'lodash'

import {teReo} from '../tests/streets'

const linzUrl = '/api/v1/linz'

export function getCoords () {
  return request.get(linzUrl)
  // .then(res => {
  //   reverseCoords(concatCoords(res.body))
  // })
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
  // const roads = _.intersection(teReo, (nameCoords(features)))
  // console.log(roads)
  // console.log(features)
  // // const intersect = _.intersectionWith(features, roads, _.includes())
  // _.partition(features, (x) => {
  //   return _.includes(x.properties.road_name_body, 'Tawari')
  // })
  features.forEach(road => {
    _.indexOf(teReo, road.properties.road_name_body) > -1
      ? coords[0].push(road.geometry.coordinates)
      : coords[1].push(road.geometry.coordinates)
  })
  console.log(coords)
  return coords
}

export const nameCoords = features => {
  const streets = []
  features.forEach(road => {
    streets.push(road.properties.road_name_body)
  })
  return streets
}
