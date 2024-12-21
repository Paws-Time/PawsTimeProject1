import { defineConfig } from "orval";

export default defineConfig({
  pawsTime: {
    input: "app/lib/codegen/schema.json",
    output: {
      client: "react-query",
      target: "app/lib/codegen/hooks", // ? 만들어질 hook들의 경로
      schemas: "app/lib/codegen/dtos", // ? 만들어질 hook에 사용될 type들의 경로
      mode: "tags-split",
      prettier: true,

      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useMutation: true,
        },
      },
    },
  },
});
