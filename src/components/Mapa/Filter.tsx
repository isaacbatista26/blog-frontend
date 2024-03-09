"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { FilterIconActive, FilterIconDeactive } from "./FilterIcon";

export default function Filter({
  visible,
  setVisible,
  filterOptions,
  setFilterOptions,
  mosquitoCounter,
}: {
  visible: boolean;
  setVisible: () => void;
  filterOptions: {
    days: [];
    radius: 3000;
  };
  setFilterOptions: (value: any) => void;
  mosquitoCounter: number;
}) {
  const initialDays: Date[] = [];
  const [date, setDate] = React.useState<Date[]>(initialDays);
  const [radius, setRadius] = React.useState<number>(3000);

  const handleFilter = () => {
    setFilterOptions({ days: date, radius });
  };

  const resetFilter = () => {
    setDate(initialDays);
    setRadius(3000);
    setFilterOptions({ days: initialDays, radius: 3000 });
  };

  React.useEffect(() => {}, [mosquitoCounter]);

  return (
    <>
      {visible ? (
        <ScrollArea className="h-[70vh] w-full  rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-4 md:w-[325px] w-full bg-zinc-300 border  rounded-2xl bg-opacity-20 backdrop-blur-sm">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-lg font-medium text-zinc-700">Filtros</h3>
              <div>
                <button onClick={setVisible}>
                  <FilterIconActive />
                </button>
              </div>
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
              <Calendar
                mode="multiple"
                selected={date}
                onSelect={(value: Date[] | undefined) => setDate(value || [])}
                className="rounded-md"
              />
            </div>
            <div className="bg-white border-y border-zinc-400 p-5 space-y-5">
              <div className="flex flex-row justify-between items-center w-full">
                <h4>Lorem Ipsum</h4>
                <Switch />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <h4>Lorem Ipsum</h4>
                <Switch />
              </div>
            </div>
            <div className="bg-white border-y border-zinc-400 p-5 space-y-5">
              <div className="flex flex-row justify-between items-center text-sm font-medium text-zinc-800">
                <h4>Distância</h4>
                <h4>10km</h4>
              </div>
              <div className="flex flex-row justify-between items-center gap-2 text-sm text-zinc-500">
                0
                <Slider
                  defaultValue={[3000]}
                  max={10000}
                  step={1}
                  onValueChange={(value) => setRadius(value[0])}
                />
                100
              </div>
              <div className="flex flex-row justify-between items-center gap-2 text-sm font-medium text-zinc-500">
                Número de mosquitos coletados:
                <span className=" text-zinc-700">{mosquitoCounter}</span>
              </div>
            </div>
            <div>
              <button
                className="w-full h-14 bg-[#0077C2] text-white"
                onClick={handleFilter}
              >
                Aplicar Filtros
              </button>
              <button
                className="w-full h-14 bg-white text-[#00619A] rounded-b-xl"
                onClick={resetFilter}
              >
                Resetar Filtros
              </button>
            </div>
          </div>
        </ScrollArea>
      ) : (
        <div className="h-12 flex items-center">
          <button onClick={setVisible}>
            <FilterIconDeactive />
          </button>
        </div>
      )}
    </>
  );
}
