import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Polyline, useMapEvents, useMapEvent } from "react-leaflet";
import LeafletComponent from "./leafletcomponent";
import axios from "axios";
import tollinfo from "../../redux/tollinfo";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "@googlemaps/polyline-codec";

import { detailsData } from "../../redux/tolldata";

const leaflettollmap = () => {
  const from = useSelector((state) => state.tollinfo.from);
  const to = useSelector((state) => state.tollinfo.to);

  const dispatch = useDispatch();

  const [locFrom, setLocFrom] = useState({ lat: 39.95209, lng: -75.16219 });
  const [locTo, setLocTo] = useState({ lat: 39.95209, lng: -75.16219 });
  const [locPoly, setLocPoly] = useState([]);
  const [tolls, setTolls] = useState([]);
  const [routes, setRoutes] = useState(null);

  // console.log(from, to);

  const [position, setPosition] = useState({ lat: 39.95209, lng: -75.16219 });

  const postData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/toll");
      const response = await data.data;
      // console.log(response);
      setLocFrom(response.summary.route[0].location);
      setLocTo(response.summary.route[1].location);
      const pathCoordinates = decode(response.routes[0].polyline);
      setLocPoly(pathCoordinates);
      setTolls(response.routes[0].tolls);
      setRoutes(response.routes[0]);
      setPosition({ lat: response.summary.route[0].location.lat, lng: response.summary.route[1].location.lng });
      // console.log("In",position);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    // console.log(from, to);

    if (from && to) {
      postData();
      // setPosition({lat: locFrom.lat, lng: locTo.lng})
    }
  }, [from, to]);

  // useEffect(() => {
  //   // console.log(from, to);

  //   if (from && to) {
  //   }
  // }, [position]);

  // console.log("Out", position);
  // console.log(tolls);
  dispatch(
    detailsData({
      data: routes,
    })
  );
  // console.log(routes);
  // console.log(locPoly)

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {from && to ? <Polyline positions={locPoly} color="blue" /> : null}

      {tolls.length
        ? tolls.map((toll) => {
            if (toll.lat && toll.lng) {
              return (
                <LeafletComponent
                  position={{ lat: toll.lat, lng: toll.lng }}
                  iconURL={
                    "https://cdn.tollguru.com/github/Wiki/calc/toll_inr.png"
                  }
                />
              );
            } else {
              return (
                <>
                  <LeafletComponent
                    position={{ lat: toll.start.lat, lng: toll.start.lng }}
                    iconURL={
                      "https://cdn.tollguru.com/github/Wiki/calc/toll_inr.png"
                    }
                  />
                  <LeafletComponent
                    position={{ lat: toll.end.lat, lng: toll.end.lng }}
                    iconURL={
                      "https://cdn.tollguru.com/github/Wiki/calc/toll_inr.png"
                    }
                  />
                </>
              );
            }
          })
        : null}

      {from && to ? (
        <LeafletComponent
          position={locFrom}
          iconURL={"https://cdn.tollguru.com/github/Wiki/calc/from.png"}
        />
      ) : null}
      {from && to ? (
        <LeafletComponent
          position={locTo}
          iconURL={"https://cdn.tollguru.com/github/Wiki/calc/to.png"}
        />
      ) : null}
    </MapContainer>
  );
};

export default leaflettollmap;
