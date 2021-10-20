import React,{Component} from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class Site extends Component  {
    render(){
    return (
        <div>
            <h1>Site</h1>

            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  
                </InfoWindow>
            </Map>
        </div>
    );
}
} 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA_dCqmHnyJzdO1PR7siogmT3TToYUHJYY")
  })(Site)