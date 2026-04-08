import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: 'active' | 'warning' | 'critical';
}

const mockLocations: Location[] = [
  { id: 1, name: "Jakarta HQ", lat: -6.2088, lng: 106.8456, status: 'active' },
  { id: 2, name: "Bandung Branch", lat: -6.9175, lng: 107.6191, status: 'active' },
  { id: 3, name: "Surabaya Hub", lat: -7.2575, lng: 112.7521, status: 'warning' },
  { id: 4, name: "Medan Office", lat: 3.5952, lng: 98.6722, status: 'critical' },
];

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapComponent() {
  const [center, setCenter] = useState<[number, number]>([-2.5489, 118.0149]); // Indonesia center
  const [zoom, setZoom] = useState(5);

  return (
    <div className="h-full w-full rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockLocations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold">{loc.name}</h3>
                <p className="text-sm text-neutral-600">Status: <span className={
                  loc.status === 'active' ? 'text-green-600' : 
                  loc.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }>{loc.status}</span></p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
