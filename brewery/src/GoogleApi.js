import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'






class GoogleApi extends React.Component {



  render(){
    return (
      <div className="maps">
      <Map google={this.props.google} zoom={16}
      style={{
margin: "0",
        width: "80%",
        height: "60%"
      }}
      initialCenter={{
        lat: this.props.latitude,
        lng: this.props.longitude
      }}
      >

      <Marker onClick={this.onMarkerClick}
      name={'Current location'} />
      </Map>
      </div>
    )
  }

}//--------------end of class------------------
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(GoogleApi)
