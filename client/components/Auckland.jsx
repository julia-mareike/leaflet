import React from 'react'
import { FeatureGroup, LayerGroup, LayersControl, Map, Polyline, TileLayer } from 'react-leaflet'

const { BaseLayer, Overlay } = LayersControl

import { ruru, rākau } from '../streets'

class Auckland extends React.Component {

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
          <Overlay name='ruru'>
          <Polyline color='blue' positions={ruru} />
          </Overlay>
          <Overlay name='rākau'>
          <Polyline color='lime' positions={rākau} />
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland