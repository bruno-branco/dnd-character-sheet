"use client";

import { Input } from "@/components/ui/input";

export default function CurrentStats() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 text-center items-end p-2">
        <p className="text-xs text-gray-400">Dano por contusão</p>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 flex flex-row gap-2">
          <div className="flex-col bg-black justify-center py-0 align-center items-center flex gap-0 px-1">
            <h1 className="text-md text-center bg-black h-4 text-white py-0 my-0 font-bold">
              PV
            </h1>
            <p className="text-white text-xs py-0 my-0 h-4 mb-1 w-[79px]">
              pontos de vida
            </p>
          </div>
          <Input className="h-9 p-0 w-full text-center" type="number" />
        </div>
        <div className="col-span-6 flex flex-row gap-2">
          <Input className="h-9 p-0 w-full text-center" type="number" />
        </div>
        <div className="col-span-1 flex flex-row gap-2">
          <Input className="h-9 p-0 w-full text-center" type="number" />
        </div>
        <div className="col-span-3 flex flex-row gap-2">
          <Input className="h-9 p-0 w-full text-center" type="number" />
        </div>

        <div className="col-span-2 flex flex-row gap-2">
          <div className="flex-col bg-black justify-center py-0 align-center items-center flex gap-0 px-1">
            <h1 className="text-md text-center bg-black h-4 text-white py-0 my-0 font-bold">
              CA
            </h1>
            <p className="text-white text-[0.56rem] mt-[0.30rem] py-0 my-0 leading-3 text-center w-20">
              classe de armadura
            </p>
          </div>
          <Input className="h-10 p-0 w-full text-center" type="number" />
        </div>
        <div className="flex aligm-center items-center justify-start">
          <h1 className="text-xl font-bold">= 10 +</h1>
        </div>
      </div>
    </div>
  );
}
