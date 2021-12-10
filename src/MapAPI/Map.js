import React from 'react';
import {GoogleMap} from "react-google-maps"
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';


 function Map() {
    const WrappedMap= withScriptjs(withGoogleMap(Map))
    return (
        <div>
       <GoogleMap 
      defaultZoom={10}
      deafaultCenter={{lat:50.951290 , lng:1.858686}}
     />
     <div style={{width: "100vw" , height: "100vh"}}>
      <WrappedMap
      googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{height: "100%"}}/>}
      containerElement={<div style={{height: "100%"}}/>}
      mapElement={<div style={{height: "100%"}}/>}
      />
    </div>
        </div>
    );
}


export default Map;