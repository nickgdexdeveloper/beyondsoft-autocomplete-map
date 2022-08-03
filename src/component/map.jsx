import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';




const CustomMap = ({ center, zoom, google }) => {


    return (
        <Map 
            google={google} 
            zoom={zoom}
            initialCenter={center}
            center={center}
            containerStyle={{ width: '100%', height: '500px', position: 'relative' }}
        >
            <Marker 
                onClick={() => console.log(123)}
                name={'Current location'} 
                position={center}
            />
        </Map>
    );

    
}
 
export default GoogleApiWrapper({
    apiKey: "AIzaSyBNUapuqzvxfhPw2lW1EO3M-MK-JjKskxw"
})(CustomMap)





























