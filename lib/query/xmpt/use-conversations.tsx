import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { XmptClientContext } from "@/components";

export const USE_CONVERSATIONS_QUERY_KEY = "use-conversations";

export const useConversations = () => {
  const { client } = useContext(XmptClientContext);

  return useQuery([USE_CONVERSATIONS_QUERY_KEY], {
    queryFn: () => (client ? client.conversations.list() : []),
    enabled: !!client,
  });
};
