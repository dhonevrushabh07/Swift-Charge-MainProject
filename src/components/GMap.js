import React, { useState } from "react";

import Map, { Marker } from "react-map-gl";

function GMap() {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
      ></Map>
    </div>
  );
}
export default GMap;
