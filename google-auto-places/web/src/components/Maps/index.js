import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import './styles.css';

const Maps = () => {
    const { center, zoom, markers, error } = useSelector(state => state.places);

    return (
        <div className="map-box">
            {!error ? (<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={zoom}
                >
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker} />
                    ))}
                </GoogleMap>
            </LoadScript>)
                : <h4>Something went wrong!</h4>}
        </div>
    );
};

export default Maps;
