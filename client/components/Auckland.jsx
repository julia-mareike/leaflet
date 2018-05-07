import React from 'react'
import {LayersControl, Map, Polyline, TileLayer} from 'react-leaflet'

import {getCoords, reverseCoords, concatCoords, nameCoords} from '../apiClient.js'

import {teReo} from '../../tests/streets'

import _ from 'lodash'

const {BaseLayer, Overlay} = LayersControl

class Auckland extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coords1: [],
      coords2: []
    }
  }

  componentWillMount () {
    getCoords()
      .then(res => {
        const coords = reverseCoords(concatCoords(res.body))
        this.setState({
          coords1: coords[0],
          coords2: coords[1]
          // streets: _.intersection((nameCoords(res.body)), teReo)
        })
      })
  }

  render () {
    const position = [-36.8670921833, 174.7585096333]
    const zoom = 15
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    const accessToken = 'pk.eyJ1IjoianVsaWEtbWFyZWlrZSIsImEiOiJjamdhY2VyNHoxMXFyMnlwam05dWphd3Y4In0.yAxAhojYaX8Q4Xcf-Qh2JQ'

    return (
      <Map center={position} zoom={zoom}>
        <LayersControl position='topright'>
          <BaseLayer checked name='map'>
            <TileLayer
              id={'mapbox.pencil'}
              url={url}
              attribution={attribution}
              accessToken={accessToken}
            />
          </BaseLayer>
          <Overlay name='streets 1'>
            <Polyline color='blue' positions={this.state.coords1} />
          </Overlay>
          <Overlay name='streets 2'>
            <Polyline color='lime' positions={this.state.coords2} />
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland
