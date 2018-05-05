import React from 'react'
import {LayersControl, Map, Polyline, TileLayer} from 'react-leaflet'

import {getCoords, reverseCoords, concatCoords} from '../apiClient.js'

const {BaseLayer, Overlay} = LayersControl

class Auckland extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  componentWillMount () {
    getCoords()
      .then(res => {
        this.setState({
          coords: (reverseCoords(concatCoords(res.body)))
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
          <Overlay name='streets'>
            <Polyline color='blue' positions={this.state.coords} />
          </Overlay>
          {/* <Overlay name='rākau'>
            <Polyline color='lime' positions={rākau} />
          </Overlay> */}
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland
