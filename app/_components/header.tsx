import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Header() {
  return (
    <div>
      <div className="bg-white grid grid-cols-8  w-full flex flex-row gap-4 max-w-7xl mx-auto">
        <div className="col-span-4 gap-2">
          <Input />
          <Label> Nome do Personagem </Label>
        </div>
        <div className="col-span-4 gap-2">
          <Input />
          <Label> Nome do Jogador</Label>
        </div>
      </div>
      <div className="bg-white grid grid-cols-12 mt-8 w-full flex flex-row gap-4 max-w-7xl mx-auto">
        <div className="col-span-6 gap-2">
          <Input />
          <Label> Classe e Nível </Label>
        </div>
        <div className="col-span-2 gap-2">
          <Input />
          <Label> Raça </Label>
        </div>
        <div className="col-span-2 gap-2">
          <Input />
          <Label> Tendência </Label>
        </div>
        <div className="col-span-2 gap-2">
          <Input />
          <Label> Divindade </Label>
        </div>
      </div>
      <div className="bg-white grid grid-cols-8 mt-8 w-full flex flex-row gap-4 max-w-7xl mx-auto">
        <div className=" gap-2">
          <Input />
          <Label> Tamanho </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Idade </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Sexo </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Altura </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Peso </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Olhos </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Cabelos </Label>
        </div>
        <div className=" gap-2">
          <Input />
          <Label> Pele </Label>
        </div>
      </div>
    </div>
  );
}
