import React from 'react'
import { FeatureGroup, LayerGroup, LayersControl, Map, Polyline, TileLayer } from 'react-leaflet'

const { BaseLayer, Overlay } = LayersControl

class Auckland extends React.Component {

  render () {
    const position = [-36.8670921833, 174.7585096333]
    const zoom = 15
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    const accessToken = 'pk.eyJ1IjoianVsaWEtbWFyZWlrZSIsImEiOiJjamdhY2VyNHoxMXFyMnlwam05dWphd3Y4In0.yAxAhojYaX8Q4Xcf-Qh2JQ'
    
    const ruru = [
      [[-36.8670921833, 174.7585096333],
       [-36.8674314167, 174.75874785],
       [-36.8674576167, 174.7590423167]],
      [[-36.866171316700004, 174.75781668330004],
       [-36.866263, 174.7579059333],
       [-36.8670921833, 174.7585096333]]
    ]

    const nikau = [
      [
          [   -36.8667732333,
              174.75924545
          ],
          [
              -36.8670921833,        
              174.7585096333
          ]
      ],
      [
          [
              -36.8656960333,
              174.76113725          
          ],
          [
              -36.86593800472117,
              174.7607787568334          
          ]
      ],
      [
          [
              -36.86644745,
              174.7599972667          
          ],
          [
              -36.8667732333,
              174.75924545          
          ]
      ],
      [
          [
              -36.86593800472117,
              174.7607787568334          
          ],
          [
              -36.8664151667,
              174.7600718167          
          ],
          [
              -36.86644745,
              174.7599972667          
          ]
      ]
    ]

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
          <Polyline color='lightblue' positions={ruru} />
          </Overlay>
          <Overlay name='nikau'>
          <Polyline color='lightgreen' positions={nikau} />
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Auckland