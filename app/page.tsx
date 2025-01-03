import Attributes from "./_components/attributes";
import CurrentStats from "./_components/current-stats";
import Header from "./_components/header";
import SelectComponent from "./_components/select-component";
import Skills from "./_components/skills";

const CharacterSheet: React.FC = () => {
  return (
    <div className="w-full bg-white h-screen bg-gray-100 p-4 gap-4 max-w-7xl flex flex-col mx-auto">
      <Header />
      <div className="flex w-full gap-2">
        <div className="w-5/12">
          <Attributes />
        </div>
        <div className=" w-full">
          <CurrentStats />
        </div>
      </div>
      <div className="basis-full border-b-2 border-black"></div>
      <div className="flex-end w-5/12">
        <Skills />
      </div>
      <SelectComponent />
    </div>
  );
};

export default CharacterSheet;
