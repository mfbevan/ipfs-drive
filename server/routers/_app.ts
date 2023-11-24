import { router } from "../trpc";
import { healthService } from "./health";

export const appRouter = router({
  health: healthService,
});

export type AppRouter = typeof appRouter;
