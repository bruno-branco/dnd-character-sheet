import { GraphQLClient, RequestOptions, Variables } from "graphql-request";

export async function request<T, V extends Variables = Variables>(
  options: RequestOptions<V, T>,
  cookies?: string,
) {
  const client = new GraphQLClient("https://www.dnd5eapi.co/graphql", {
    headers: {
      cookie: cookies || "",
    },
  });

  return client.request<T, V>(options);
}
