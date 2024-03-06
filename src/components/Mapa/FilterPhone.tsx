"use client";
import React, { SetStateAction, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { CalendarPhone } from "@/components/ui/calendarPhone";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function FilterPhone({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: () => void;
}) {
  const initialDays: Date[] = [];
  const [date, setDate] = useState<Date[] | undefined>(initialDays);

  return (
    <ScrollArea className="h-[580px] w-screen rounded-md border-none">
      <div className="flex flex-col gap-4  w-full bg-zinc-100 border border-zinc-400 rounded-2xl bg-opacity-30 backdrop-blur-sm">
        <div className="flex flex-col justify-around items-center p-5 h-20">
          <h3 className="text-lg font-medium text-zinc-700">Filtros</h3>
          <button
            className="w-fullbg-[#0077C2] text-zinc-700"
            onClick={setVisible}
          >
            {visible ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </button>
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
          <CalendarPhone
            mode="multiple"
            selected={date}
            onSelect={setDate}
            className="rounded-md w-[260px] mx-auto"
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
            <Slider defaultValue={[30]} max={10000} step={1} />
            100
          </div>
          <div className="flex flex-row justify-between items-center gap-2 text-sm font-medium text-zinc-500">
            Número de mosquitos coletados:
            <span className=" text-zinc-700">100</span>
          </div>
        </div>
        <div>
          <button className="w-full h-14 bg-[#0077C2] text-white rounded-b-xl mb-6">
            Aplicar Filtros
          </button>
        </div>
      </div>
    </ScrollArea>
  );
}
