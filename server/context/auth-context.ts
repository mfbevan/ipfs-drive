import * as trpcNext from "@trpc/server/adapters/next";
import { thirdWebService, Session, AuthContext } from "@/lib";

/**
 * Creates the Auth Context for the API. If the user is correctly authenticated, the auth will be included in the context
 */
export const createAuthContext = async ({
  req,
}: trpcNext.CreateNextContextOptions): Promise<AuthContext> => {
  const session = (await thirdWebService().getUser(req)) as Session;
  if (!session || !session.address) {
    return {
      session: undefined,
    };
  }

  return {
    session,
  };
};
