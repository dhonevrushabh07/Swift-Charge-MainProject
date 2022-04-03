import { useState } from "react";
import ReactMapGL from "react-map-gl";

function GMap() {
  const [viewport, setViewport] = useState({
    width: "400vw",
    outerHeight: "400vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <div className="container">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
}
export default GMap;
