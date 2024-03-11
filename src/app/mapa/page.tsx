import MapContainer from "@/components/Mapa/MapContainer";

interface Coordinate {
  id: string;
  createdAt: string;
  lat: number;
  lng: number;
}
export const revalidate = 300;
export default async function Page() {
  const data = await fetch("http://3.141.194.138:3000/coords/", {
    cache: "no-store",
  });
  const coords: Coordinate[] = await data.json();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <MapContainer coords={coords} />
    </div>
  );
}
