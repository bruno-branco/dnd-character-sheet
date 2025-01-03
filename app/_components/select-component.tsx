"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { graphql } from "@/graphql";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const getItemsQuery = graphql(`
  query equipments {
    equipments {
      name
    }
  }
`);

export default function SelectComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["equipments"],
    queryFn: () =>
      request({
        document: getItemsQuery,
      }),
    enabled: !!getItemsQuery,
  });

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione um item" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>items</SelectLabel>
          {data?.equipments?.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name} +{" "}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
