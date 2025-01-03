import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.dnd5eapi.co/graphql",
  documents: "app/**/*.tsx",
  generates: {
    "./graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
