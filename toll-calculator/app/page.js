"use client";

import React from "react";
import { Provider } from "react-redux";
import Navbar from "./components/navbar";
import SearchToll from "./components/searchtoll";
import MainDetail from "./components/Details/maindetail";
import LeafletTollMap from "./components/Maps/leaflettollmap";
import store from "./redux/store";

import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Navbar />
          <div className="m-12 grid lg:grid-cols-2 gap-2 sm:grid-cols-1">
            <SearchToll />
            <LeafletTollMap />
          </div>
          <MainDetail />
          {/* <Details/> */}
        </Provider>
      </React.StrictMode>
    </>
  );
}
