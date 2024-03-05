import { Slider } from "@/components/ui/slider";

export default function Filter() {
  return (
    <div className="flex flex-col gap-4 md:w-[325px] w-full bg-white border border-zinc-400 rounded-lg bg-opacity-10 backdrop-blur-sm">
      <div className="flex flex-row justify-between p-5">
        <h3 className="text-lg font-medium text-zinc-700">Filtros</h3>
        <div>botao</div>
      </div>
      <div className="grid grid-cols-2 gap-2 bg-white border-y border-zinc-400 h-fit p-5">
        <div className="flex h-14 text-center items-center text-white justify-center rounded-xl text-md font-medium bg-[#0077C2]">
          Raio de Inspeção
        </div>
        <div className="flex h-14 text-center items-center justify-center rounded-xl text-md font-medium text-[#0077C2] border border-[#0077C2]">
          População de Mosquitos
        </div>
        <div className="flex h-14 text-center items-center justify-center rounded-xl text-md font-medium text-[#0077C2] border border-[#0077C2]">
          Temperatura
        </div>
        <div className="flex h-14 text-center items-center justify-center rounded-xl text-md font-medium text-[#0077C2] border border-[#0077C2]">
          Unidades de CO²
        </div>
      </div>
      <div className="bg-white border-y border-zinc-400 p-5 space-y-5">
        calendario
      </div>
      <div className="bg-white border-y border-zinc-400 p-5 space-y-5">
        switch
      </div>
      <div className="bg-white border-y border-zinc-400 p-5 space-y-5">
        <div className="flex flex-row justify-between items-center text-sm font-medium text-zinc-800">
          <h4>Distância</h4>
          <h4>10km</h4>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 text-sm text-zinc-500">
          0
          <Slider defaultValue={[30]} max={10000} step={1} />
          100
        </div>
      </div>
    </div>
  );
}
