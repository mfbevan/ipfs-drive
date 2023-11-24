import { initTRPC } from "@trpc/server";
import { AuthContext, UnauthorizedError } from "@/lib";
import superjson from "superjson";

const t = initTRPC.context<AuthContext>().create({
  transformer: superjson,
});

const requireAuth = t.middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.session) throw UnauthorizedError();

  return opts.next(opts);
});

export const { router } = t;
export const procedure = t.procedure;
export const protectedProcedure = t.procedure.use(requireAuth);
