import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { AuthContext, UnauthorizedError } from "@/lib";

const t = initTRPC.context<AuthContext>().create({
  transformer: superjson,
});

const requireAuth = t.middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.session) throw UnauthorizedError();

  return opts.next(opts);
});

export const { router, middleware } = t;
export const procedure = t.procedure;
export const protectedProcedure = t.procedure.use(requireAuth);
