import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

class Auckland extends React.Component {

  render () {
    const position = [-36.8670921833, 174.7585096333]
    const zoom = 15
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    const accessToken = 'pk.eyJ1IjoianVsaWEtbWFyZWlrZSIsImEiOiJjamdhY2VyNHoxMXFyMnlwam05dWphd3Y4In0.yAxAhojYaX8Q4Xcf-Qh2JQ'
    
    return (
      <Map center={position} zoom={zoom}>
          <TileLayer
            id={'mapbox.pencil'}
            url={url}
            attribution={attribution}
            accessToken={accessToken}
          />
      </Map>
    )
  }
}

export default Auckland