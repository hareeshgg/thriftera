"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

(L.Icon.Default as any).mergeOptions({
    iconRetinaUrl: typeof markerIcon2x === "string" ? markerIcon2x : (markerIcon2x as any).src,
    iconUrl: typeof markerIcon === "string" ? markerIcon : (markerIcon as any).src,
    shadowUrl: typeof markerShadow === "string" ? markerShadow : (markerShadow as any).src,
});

function ClickHandler() {
    useMapEvents({
        click(e) {
            console.log(e.latlng.lat);
            console.log(e.latlng.lng);
        },
    });

    return null;
}

function ClickMarker() {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
        },
    });

    return position ? <Marker position={position} /> : null;
}

export default function Map() {
    return (
        <MapContainer
            center={[40.7128, -74.006]}
            zoom={13}
            className="h-dvh w-dvw"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[40.7128, -74.006]}>
                <Popup>Hello!</Popup>
            </Marker>

            <ClickHandler />
            <ClickMarker />
        </MapContainer>
    );
}