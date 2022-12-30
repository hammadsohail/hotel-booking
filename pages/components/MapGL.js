import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import {getCenter} from "geolib";
import {MapPinIcon} from "@heroicons/react/24/solid";
import 'mapbox-gl/dist/mapbox-gl.css';
const MapGL = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);


  //transform the search result object in to the { latitude, longitude }
  //object
  const coord = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //centeral point of locations, example here we have London, so it get the all them in center, and show in one map
  const center = getCenter(coord);
  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
  })

  return (
    <Map
    initialViewState={{
      longitude: viewport.longitude,
      latitude: viewport.latitude,
      zoom: 11,
      width: "100%",
      height: "100%",
    }}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
       mapStyle="mapbox://styles/muhammadhammad848/clca6kr8600ay14mpj4pa1ozt"
      mapboxAccessToken={process.env.mapbox_key}
      // {...viewport}
    >
      {searchResults.map((result) =>(
        <div key={result.long}>
          <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
          >
           <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="push-pin"
               >📌
            </p>
          </Marker>
          {/* The popup show when click the marker */}

       {selectedLocation.long === result.long
          ? (
            <Popup
             onClose={()=> setSelectedLocation({})}
             closeOnClick={false}
             longitude={result.long}
             latitude={result.lat}
             >
            {console.log(result.title)}
            <p className="rounded-lg">{result.title}</p>

              </Popup>)
         : (false)
        }
        </div>
      ))}

    </Map>
  );
};

export default MapGL;
