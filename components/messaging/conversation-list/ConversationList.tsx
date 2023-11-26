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
      <ul role="list" className="divide-y divide-gray-100 p-2 gap-2">
        <div className="skeleton h-16 w-full rounded" />
        <div className="skeleton h-16 w-full rounded" />
        <div className="skeleton h-16 w-full rounded" />
      </ul>
    );
  }

  return (
    <ul role="list" className="divide-y divide-gray-100 p-2 gap-2">
      {conversations?.map((conversation) => (
        <ConversationListItem
          conversation={conversation}
          key={conversation.peerAddress}
        />
      ))}
    </ul>
  );
};
