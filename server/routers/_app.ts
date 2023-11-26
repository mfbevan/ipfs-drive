import { router } from "../trpc";

import { driveService } from "./drive";
import { healthService } from "./health";

export const appRouter = router({
  health: healthService,
  drive: driveService,
});

export type AppRouter = typeof appRouter;
