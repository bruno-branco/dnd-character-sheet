import { Input } from "@/components/ui/input";

export default function Attributes() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 text-center items-end p-2">
        <p className="text-xs text-gray-400">Habilidade</p>
        <p className="text-xs text-gray-400">Valor</p>
        <p className="text-xs text-gray-400">Mod. de Habilidade</p>
        <p className="text-xs text-gray-400">Valor temporário</p>
        <p className="text-xs text-gray-400">Mod. temporário</p>
      </div>
      <div className="grid grid-cols-5 gap-2 border-2 border-gray-800 p-2">
        <div className="grid grid-rows-6 gap-2 mb-2 ">
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold ">FOR</h1>
          </div>
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold ">DEX</h1>
          </div>
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold ">CON</h1>
          </div>
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold">INT</h1>
          </div>
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold">SAB</h1>
          </div>
          <div className="bg-black w-14 h-8 flex flex-col flex justify-center items-center align-center">
            <h1 className="text-base text-white font-bold">CAR</h1>
          </div>
        </div>
        <div className="grid grid-rows-6 gap-2 mb-2 ">
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
        </div>
        <div className="grid grid-rows-6 gap-2 mb-2 ">
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
        </div>
        <div className="grid grid-rows-6 gap-2 mb-2 ">
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
        </div>
        <div className="grid grid-rows-6 gap-2 mb-2 ">
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
          <Input type="number" />
        </div>
      </div>
    </div>
  );
}
