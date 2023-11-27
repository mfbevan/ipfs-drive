import { Flex, Skeleton, chakra } from "@chakra-ui/react";
import { CachedConversation, Conversation } from "@xmtp/react-sdk";

import { ConversationListItem } from "./ConversationListItem";

export interface ConversationListProps {
  isLoading?: boolean;
  conversations?: (Conversation | CachedConversation)[];
}

export const ConversationList = ({
  conversations,
  isLoading,
}: ConversationListProps) => {
  if (isLoading) {
    return (
      <ConversationContainer>
        <MessageItemSkeleton />
        <MessageItemSkeleton />
        <MessageItemSkeleton />
      </ConversationContainer>
    );
  }

  return (
    <ConversationContainer>
      {conversations?.map((conversation) => (
        <ConversationListItem
          conversation={conversation}
          key={conversation.peerAddress}
        />
      ))}
    </ConversationContainer>
  );
};

const MessageItemSkeleton = chakra(Skeleton, {
  baseStyle: {
    borderRadius: "xl",
    height: "60px",
  },
});

const ConversationContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "5px",
  },
});
