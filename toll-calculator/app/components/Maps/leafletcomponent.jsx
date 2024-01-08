import React, { useEffect, useRef } from "react";
import { useMapEvents, Marker, useMap} from "react-leaflet";
import { Icon } from "leaflet";

const leafletcomponent = ({position, iconURL}) => {
  const map = useMap();

  const newPos = useRef(null)

  console.log(newPos)

  useEffect(() => {
    if (newPos.current && (newPos.current[0] !== position[0] || newPos.current[1] !== position[1])) {
      map.flyTo(position, map.getZoom)
    }else{
      newPos.current = position
    }
  }, [position])
  

  const icon = new Icon({
    iconUrl: iconURL,
    iconSize: [40, 41],
    iconAnchor: [21, 38],
    popupAnchor: [-3, -76],
  });

  // console.log("com",position);
  // console.log("com",{lat:parseFloat(position.lat),lng:parseFloat(position.lng)});

  return position === null ? null : (
    <Marker position={position} icon={icon} />
  );
};

export default leafletcomponent;
