import React from "react";
import Image from "next/image";
const idp = "/home/idp-logo.png";
const fap = "/home/fap-logo.png";
export default function Apoio() {
  return (
    <div className="w-full md:p-14 p-7 bg-[#00619A] lg:h-[420px]">
      <span className="font-normal text-[26px] text-white">Apoio:</span>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <Image src={fap} alt="FAP" width={786} height={224} />
        <Image src={idp} alt="IDP" width={238} height={238} />
      </div>
    </div>
  );
}
