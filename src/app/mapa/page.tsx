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
    <div className="flex flex-col items-center justify-center gap-16 py-16">
      <h1 className="font-bold text-6xl text-zinc-700">Mapa de Calor</h1>
      <MapContainer coords={coords} />
    </div>
  );
}
