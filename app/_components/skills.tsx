"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { graphql } from "@/graphql";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const skillsQuery = graphql(`
  query GetSkills {
    skills {
      name
      ability_score {
        name
      }
    }
  }
`);

export default function Skills() {
  const { data, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: () =>
      request({
        document: skillsQuery,
      }),
    enabled: !!skillsQuery,
  });

  const skills = data?.skills;
  console.log(data);
  return (
    <div className="flex flex-col gap-2 mt-20">
      {skills?.map((skill) => (
        <div className="grid grid-cols-10 gap-2  p-2">
          <div className="col-span-5 align-center items-center gap-2 flex">
            <Checkbox />
            <p>{skill.name}</p>
          </div>
          <div className="flex col-start-6 align-center items-center">
            <p>{skill.ability_score.name}</p>
          </div>
          <div className="flex align-center items-center gap-1">
            <Input className="h-6 p-0 w-8 text-center" type="number" />
            <p>=</p>
          </div>
          <div className="flex align-center items-center gap-1">
            <Input
              className="h-6 border-0 rounded-none border-b-2 border-black p-0 w-8"
              type="number"
            />
            <p>+</p>
          </div>
          <div className="flex align-center items-center gap-1">
            <Input
              className="h-6 border-0 rounded-none border-b-2 border-black p-0 w-8"
              type="number"
            />
            <p>+</p>
          </div>
          <div className="flex align-center items-center gap-1">
            <Input
              className="h-6 border-0 rounded-none border-b-2 border-black p-0 w-8"
              type="number"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
