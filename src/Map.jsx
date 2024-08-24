import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet'; // imports everything from leaflet as L

import customMarker from './assets/images/icon-location.svg';

const Map = ({response}) => {

    // Set my custom marker image
    const customIcon = new L.Icon ({
        iconUrl: customMarker,
        iconRetinaUrl: customMarker,
        popupAnchor: [-0, -0],
        iconSize: [39, 47],
    });
    

    // Updates and resets the map with the current coordinates
    const ChangeMapView = ({coordinates}) => {
        const map = useMap();
        map.setView(coordinates, map.getZoom());
        return null;
    }
    

    return (
        <>
            {
                response &&

                <MapContainer center={[response.latitude, response.longitude]} zoom={13} 
                    scrollWheelZoom={false} className='h-[100vh] z-0' zoomControl={false}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[response.latitude, response.longitude]} icon={customIcon}>
                        <Popup>
                        {response.city}
                        </Popup>
                    </Marker>

                    <ChangeMapView coordinates={[response.latitude, response.longitude]} />
                </MapContainer>
            }
        </>
    );
}
 
export default Map;