import React from "react";
import { MapContainer as MapLeaflet, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import "./Map.css";
import { showDataOnMap } from "../../utils/utils";

function Map({ casesType }) {
  const { center, zoom, countries } = useSelector((state) => state.disease);

  return (
    <div className="map">
      {console.log(center)}
      <MapLeaflet center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Map through all countries and draw a cirlce */}
        {showDataOnMap(countries, casesType)}
      </MapLeaflet>
    </div>
  );
}

export default Map;
