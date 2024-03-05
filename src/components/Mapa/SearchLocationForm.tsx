"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
export default function SearchLocationForm({
  setMarker,
  resetMarker,
}: {
  setMarker: (marker: { lat: number; lng: number }) => void;
  resetMarker: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      setMarker({ lat, lng });
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex flex-row items-center justify-center md:w-1/2 md:min-w-[600px] w-full h-12 rounded-xl bg-white shadow-2xl">
        <input
          type="text"
          placeholder="Busque por uma rua ou bairro"
          className="block w-full p-2 pl-4 text-zinc-800 bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="w-12 h-12 p-2 text-white bg-[#00619A] rounded-xl"
        >
          <Search size={24} className="m-auto" />
        </button>
      </div>
      {/*
        <button
          className="w-1/2 p-2 mt-2 rounded-lg bg-blue-500 text-white"
          onClick={() => {
            setSearchQuery("");
            resetMarker();
          }}
        >
          Reset
        </button>
            */}
    </form>
  );
}
