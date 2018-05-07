import React from 'react'
import {LayersControl, Map, Polyline, TileLayer} from 'react-leaflet'

import {getCoords, reverseCoords, concatCoords} from '../apiClient.js'

// import {teReo} from '../../tests/streets'

// import _ from 'lodash'

const {BaseLayer, Overlay} = LayersControl

class Auckland extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // position: [-36.827587, 174.7902642],
      // position: [-36.8670921833, 174.7585096333],
      position: {lat: -36.868840882080555, lng: 174.7713661193848},
      coords1: [],
      coords2: []
    }
    this.getPolylines = this.getPolylines.bind(this)
    this.getPosition = this.getPosition.bind(this)
  }

  componentWillMount () {
    this.getPolylines()
  }

  getPolylines () {
    getCoords(this.state.position)
      .then(res => {
        const coords = reverseCoords(concatCoords(res.body))
        this.setState({
          coords1: coords[0],
          coords2: coords[1]
        })
      })
  }

  getPosition (e) {
    this.setState({
      position: e.latlng
    })
    this.getPolylines()
  }

  render () {
    const zoom = 15
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    const accessToken = 'pk.eyJ1IjoianVsaWEtbWFyZWlrZSIsImEiOiJjamdhY2VyNHoxMXFyMnlwam05dWphd3Y4In0.yAxAhojYaX8Q4Xcf-Qh2JQ'

    return (
      <Map center={this.state.position} zoom={zoom} onclick={this.getPosition}>
        <LayersControl position='topright'>
          <BaseLayer checked name='map'>
            <TileLayer
              id={'mapbox.light'}
              url={url}
              attribution={attribution}
              accessToken={accessToken}
            />
          </BaseLayer>
          <Overlay checked name='Te reo street names'>
            <Polyline color='red' positions={this.state.coords1} />
          </Overlay>
          <Overlay checked name='Other street names'>
            <Polyline color='blue' positions={this.state.coords2} />
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland
