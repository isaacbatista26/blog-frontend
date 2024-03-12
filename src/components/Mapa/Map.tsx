"use client";
import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayerF,
  MarkerF,
  Libraries,
  LoadScript,
} from "@react-google-maps/api";
import { options } from "@/components/Mapa/MapOptions";
import SearchLocationForm from "@/components/Mapa/SearchLocationForm";
import Filter from "@/components/Mapa/Filter";
import FilterPhone from "@/components/Mapa/FilterPhone";

const libraries: Libraries = ["visualization", "geometry"];

interface Coordinate {
  id: string;
  createdAt: string;
  lat: number;
  lng: number;
}

export default function Map({
  coords,
  filterOptions,
  setFilterOptions,
}: {
  coords: Coordinate[];
  filterOptions: {
    days: Date[];
    radius: number;
  };
  setFilterOptions: React.Dispatch<
    React.SetStateAction<{
      days: Date[];
      radius: number;
    }>
  >;
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

  const [visible, setVisible] = React.useState(true);

  const [mosquitoCounter, setMosquitoCounter] = React.useState(0);

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

  const [marker, setMarker] = React.useState<google.maps.Marker | null>(null);

  const [markerCircle, setMarkerCircle] =
    React.useState<google.maps.Circle | null>(null);

  var pointArray: google.maps.LatLng[] = [];

  if (isLoaded) {
    pointArray =
      coords?.map((coord: Coordinate): google.maps.LatLng => {
        return new google.maps.LatLng(coord.lat, coord.lng);
      }) ?? [];
  }

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleMarkerClick = (newMarker: google.maps.Marker | null) => {
    marker?.setMap(null);
    setMarker(newMarker);
  };

  const setSearchMarker = (
    point: { lat: number | undefined; lng: number | undefined } | null
  ) => {
    markerCircle?.setMap(null);
    marker?.setMap(null);
    if (map) {
      const newMarker = new google.maps.Marker({
        position: {
          lat: point?.lat || 0,
          lng: point?.lng || 0,
        },
        map: map,
      });
      setMarker(newMarker);
      let count = 0;
      const markerPosition = newMarker.getPosition();
      pointArray?.forEach((coordinate) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          markerPosition
            ? markerPosition
            : new google.maps.LatLng(mapPosition.lat, mapPosition.lng),
          coordinate
        );
        if (distance <= filterOptions.radius) {
          count++;
        }
        setMosquitoCounter(count);
      });
      const newCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 1,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: newMarker.getPosition(),
        radius: filterOptions.radius,
      });
      setMarkerCircle(newCircle);
    }
  };
  const newInfoMarker = (event: google.maps.MapMouseEvent) => {
    const point = {
      lat: event.latLng?.lat(),
      lng: event.latLng?.lng(),
    };
    setSearchMarker(point);
  };

  const resetMarker = () => {
    handleMarkerClick(null);
    markerCircle?.setMap(null);
    setMarkerCircle(null);
    setMosquitoCounter(0);
  };

  if (!isLoaded) {
    <>Carregando o Mapa de Calor...</>;
  }

  React.useEffect(() => {
    setSearchMarker({
      lat: marker?.getPosition()?.lat() ?? undefined,
      lng: marker?.getPosition()?.lng() ?? undefined,
    });
    console.log("novos filtros: ", filterOptions);
  }, [filterOptions]);

  if (isLoaded) {
    return (
      <div className="w-full md:h-[90vh] h-[300px] flex flex-row px-10">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
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
          {coords && (
            <HeatmapLayerF
              data={pointArray}
              options={{
                radius: 20,
                opacity: 0.7,
                maxIntensity: 10,
              }}
            />
          )}
          {marker && (
            <MarkerF
              clickable={true}
              onLoad={(marker) => {
                handleMarkerClick(marker);
              }}
              position={marker?.getPosition() ?? { lat: 0, lng: 0 }}
              onClick={() => resetMarker()} // Remover o marcador ao clicar nele
            />
          )}
          <div
            className={`lg:visible invisible absolute top-0 right-0 m-4 z-10`}
          >
            <Filter
              visible={visible}
              setVisible={toggleVisible}
              filterOptions={{
                days: [],
                radius: 3000,
              }}
              setFilterOptions={setFilterOptions}
              mosquitoCounter={mosquitoCounter}
            />
          </div>
          <div
            className={`relative flex flex-row p-4 w-full md:justify-start justify-center items-center`}
          >
            <SearchLocationForm
              setMarker={setSearchMarker}
              resetMarker={resetMarker}
              setmapPosition={setmapPosition}
            />
          </div>
        </GoogleMap>

        <div
          className={`lg:hidden visible fixed ${
            visible ? "-bottom-[472px]" : "bottom-0"
          } left-0 right-0 z-10`}
        >
          <FilterPhone
            visible={visible}
            setVisible={toggleVisible}
            filterOptions={{
              days: [],
              radius: 3000,
            }}
            setFilterOptions={setFilterOptions}
            mosquitoCounter={mosquitoCounter}
          />
        </div>
      </div>
    );
  }
}
