import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Harita için Baku'nun koordinatları ve zoom seviyesi
const position = [40.4093, 49.8671]; // Baku'nun koordinatları
const zoomLevel = 13;

const AdminMap = () => {
    // Tıklanan yerin koordinatlarını saklamak için state
    const [markerPosition, setMarkerPosition] = useState(position);

    // Harita üzerinde tıklanan koordinatları al
    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;  // Tıklanan enlem ve boylam
        setMarkerPosition([lat, lng]); // Marker'ı güncelle
        console.log('ok')
    };

    return (
        <div className='w-full h-[100vh] pt-[50px] pb-[65px] px-[50px] flex justify-center items-center'>
            <MapContainer
                center={position}
                zoom={zoomLevel}
                style={{ height: "100%", width: "100%", zIndex: '1' }}
                onClick={() => console.log('sd')}  // Harita tıklama olayını dinle
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={markerPosition}>
                    <Popup>
                        Tıklanan Konum: {markerPosition[0].toFixed(4)}, {markerPosition[1].toFixed(4)}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default AdminMap;
