"use client";

import { useQuery } from "@tanstack/react-query";
import { graphql } from "@/graphql";
import { request } from "@/lib/request";

const getItemsQuery = graphql(`
  query GetSpells {
    equipments {
      name
    }
  }
`);

export default function TestingAPI() {
  const { data, isLoading } = useQuery({
    queryKey: ["spells"],
    queryFn: () =>
      request({
        document: getItemsQuery,
      }),
  });

  console.log(data);

  return (
    <div>
      <p>teste</p>
    </div>
  );
}
