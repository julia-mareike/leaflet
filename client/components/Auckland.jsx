import React from 'react'
import {LayersControl, Map, Polyline, TileLayer} from 'react-leaflet'

import {getCoords, reverseCoords, concatCoords} from '../apiClient.js'

const {BaseLayer, Overlay} = LayersControl

class Auckland extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      position: {lat: -36.8673584, lng: 174.7562757},
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
    const zoom = 14
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    const accessToken = 'pk.eyJ1IjoianVsaWEtbWFyZWlrZSIsImEiOiJjamdhY2VyNHoxMXFyMnlwam05dWphd3Y4In0.yAxAhojYaX8Q4Xcf-Qh2JQ'

    return (
      <Map center={this.state.position} zoom={zoom} onclick={this.getPosition}>
        <LayersControl position='topright'>
          <BaseLayer checked name='map'>
            <TileLayer
              id={'mapbox.streets-basic'}
              url={url}
              attribution={attribution}
              accessToken={accessToken}
            />
          </BaseLayer>
          <Overlay checked name='Red: te reo'>
            <Polyline color='red' opacity='0.5' positions={this.state.coords1} className='leaflet-zoom-hide' />
          </Overlay>
          <Overlay checked name='Blue: other'>
            <Polyline color='blue' opacity = '0.5' positions={this.state.coords2} className='leaflet-zoom-hide' />
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland
