"use client";
import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayerF,
  Marker,
  MarkerF,
  Libraries,
} from "@react-google-maps/api";
import { options } from "@/components/Mapa/MapOptions";
import SearchLocationForm from "@/components/Mapa/SearchLocationForm";
import Filter from "@/components/Mapa/Filter";

const libraries: Libraries = ["visualization", "geometry"];

interface Coordinate {
  id: string;
  createdAt: string;
  lat: number;
  lng: number;
}

export default function MapContainer({
  coords,
  markerRadius,
}: {
  coords: Coordinate[];
  markerRadius: number;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
  });
  const [mapPosition, setmapPosition] = React.useState<{
    lat: number;
    lng: number;
  }>({
    lat: -15.7975,
    lng: -47.8919,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(
    function callback(map: google.maps.Map) {
      setMap(map);

      const bounds = new window.google.maps.LatLngBounds();
      if (coords) {
        coords.forEach((cord: Coordinate) => {
          bounds.extend(new google.maps.LatLng(cord.lat, cord.lng));
        });
        map.fitBounds(bounds);
      }
    },
    [coords]
  );

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  var heatMapCordinates: google.maps.LatLng[] = [];

  if (isLoaded) {
    heatMapCordinates =
      coords?.map((coord: Coordinate): google.maps.LatLng => {
        return new google.maps.LatLng(coord.lat, coord.lng);
      }) ?? [];
  }

  const [marker, setMarker] = React.useState<google.maps.Marker | null>(null);

  const [markerCircle, setMarkerCircle] =
    React.useState<google.maps.Circle | null>(null);

  const newInfoMarker = (event: google.maps.MapMouseEvent) => {
    markerCircle?.setMap(null);

    const newMarker: google.maps.Marker = new google.maps.Marker({
      position: event.latLng,
    });
    setMarker(newMarker);
    if (map) {
      let count = 0;

      const markerPosition = newMarker.getPosition();
      heatMapCordinates.forEach((coordinate) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          markerPosition
            ? markerPosition
            : new google.maps.LatLng(mapPosition.lat, mapPosition.lng),
          coordinate
        );

        if (distance <= markerRadius) {
          count++;
        }
      });
      //setCounter(count);
      console.log(
        `Número de pontos dentro do raio de ${markerRadius} metros:`,
        count
      );

      const newCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 1,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: newMarker.getPosition(),
        radius: markerRadius,
      });
      setMarkerCircle(newCircle);
    }
  };

  const setInfoMarker = (searchedLocation: { lat: number; lng: number }) => {
    markerCircle?.setMap(null);

    const newMarker: google.maps.Marker = new google.maps.Marker({
      position: searchedLocation,
    });
    setMarker(newMarker);
    if (map) {
      let count = 0;

      const markerPosition = newMarker.getPosition();
      heatMapCordinates.forEach((coordinate) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          markerPosition
            ? markerPosition
            : new google.maps.LatLng(mapPosition.lat, mapPosition.lng),
          coordinate
        );

        if (distance <= markerRadius) {
          count++;
        }
      });
      //setCounter(count);
      console.log(
        `Número de pontos dentro do raio de ${markerRadius} metros:`,
        count
      );

      const newCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 1,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: newMarker.getPosition(),
        radius: markerRadius,
      });
      setMarkerCircle(newCircle);
      setmapPosition(searchedLocation);
    }
  };

  const resetMarker = () => {
    setMarker(null);
    markerCircle?.setMap(null);
    //setCounter(0);
  };

  return (
    <div className="w-full h-[800px] px-10">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "70vh",
            borderRadius: "30px",
          }}
          center={mapPosition}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={newInfoMarker}
          clickableIcons={false}
          options={options}
        >
          <HeatmapLayerF
            data={heatMapCordinates}
            options={{
              radius: 20,
              opacity: 0.5,
            }}
          />
          {marker && (
            <MarkerF
              position={marker?.getPosition() ?? { lat: 0, lng: 0 }}
              onClick={() => {
                resetMarker();
              }}
            />
          )}
          <div
            className={`relative flex flex-row p-4 justify-between items-start`}
          >
            <SearchLocationForm
              setMarker={setInfoMarker}
              resetMarker={resetMarker}
            />
            <Filter />
          </div>
        </GoogleMap>
      )}
    </div>
  );
}
