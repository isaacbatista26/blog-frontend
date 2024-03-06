"use client";
import React from "react";
import Map from "@/components/Mapa/Map";

interface Coordinate {
  id: string;
  createdAt: string;
  lat: number;
  lng: number;
}

interface filterOptions {
  days: Date[];
  radius: number;
}

export default function MapContainer({ coords }: { coords: Coordinate[] }) {
  const [filterCoords, setFilterCoords] = React.useState<Coordinate[]>(coords);

  const [filterOptions, setFilterOptions] = React.useState<filterOptions>({
    days: [],
    radius: 3000,
  });

  const applyFilter = () => {
    if (filterOptions.days.length === 0) {
      setFilterCoords(coords);
    }
    // apply days filter
    if (filterOptions.days.length > 0) {
      const filteredDays: string[] = filterOptions.days.map((day) =>
        day.toISOString().slice(0, 10)
      );
      const filteredCoords = coords.filter((coord) =>
        filteredDays.includes(coord.createdAt.slice(0, 10))
      );
      setFilterCoords(filteredCoords);
    }
  };

  React.useEffect(() => {
    applyFilter();
  }, [filterOptions]);

  const mapKey = React.useRef(0);

  const forceMapUpdate = () => {
    mapKey.current += 1;
  };

  React.useEffect(() => {
    forceMapUpdate();
  }, [filterCoords]);

  return (
    <>
      <Map
        key={mapKey.current}
        coords={filterCoords}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
    </>
  );
}
