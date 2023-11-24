import { useQuery } from "@tanstack/react-query";
import { DecodedMessage } from "@xmtp/react-sdk";
import { useContext } from "react";

import { XmptClientContext } from "@/components";

export const USE_CONVERSATION_QUERY_KEY = "use-conversation";

export interface UseConversationProps {
  address: string;
}

export const useConversation = ({ address }: UseConversationProps) => {
  const { client } = useContext(XmptClientContext);

  return useQuery({
    queryKey: [USE_CONVERSATION_QUERY_KEY],
    queryFn: async (): Promise<{ messages: DecodedMessage[] }> => {
      if (!client) return { messages: [] };
      const conversations = await client.conversations.list();
      const conversation = conversations.find((c) => c.peerAddress === address);

      const messages = (await conversation?.messages()) ?? [];

      return { messages };
    },
    enabled: !!client,
  });
};
