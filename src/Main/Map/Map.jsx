import { useState, useEffect } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl"; //
import { DARK } from "./Styles/dark/dark";
const Map = () => {
  const [mapStyle, setMapStyle] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: -95.7129,
    latitude: 37.0902,
    zoom: 2,
  });
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const handleViewportChange = (viewport) => {
    setViewport(viewport);
  };

  const handleClick = (e) => {
    console.log("e", e);
  };

  useEffect(() => {
    const layersIds = DARK.layers.map((layer) => layer.id);

    setInteractiveLayerIds(layersIds);
    setMapStyle(DARK);
  }, []);

  return (
    <div style={{ backgroundColor: "#0e1d29" }} className="w-full h-full">
      <div style={{ backgroundColor: "#162d3c" }} className="w-full h-full">
        {mapStyle && (
          <MapGL
            {...viewport}
            width={`100%`}
            height={`100%`}
            mapStyle={mapStyle}
            mapboxApiAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            onViewportChange={(vp) => handleViewportChange(vp)}
            interactiveLayerIds={interactiveLayerIds}
            onClick={handleClick}
          ></MapGL>
        )}
      </div>
    </div>
  );
};

export default Map;
