import { GetHealthResponse, getHealthResponseSchema } from "@/lib";

import { router, procedure } from "../../trpc";

export const healthService = router({
  getHealth: procedure
    .meta({ description: "Get the health of the API" })
    .output(getHealthResponseSchema)
    .query(
      async (): Promise<GetHealthResponse> => ({
        status: "ok",
      })
    ),
});
