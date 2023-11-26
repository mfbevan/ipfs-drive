import { CachedConversation, Conversation } from "@xmtp/react-sdk";
import Link from "next/link";

import { Avatar } from "@/components";

export interface ConversationListItemProps {
  conversation: Conversation | CachedConversation;
}

export const ConversationListItem = ({
  conversation: { peerAddress, createdAt, topic },
}: ConversationListItemProps) => (
  <Link href={`/messages/${peerAddress}`} key={topic}>
    <li className="flex justify-between gap-x-6 my-2 p-2 bg-base-200 rounded hover:drop-shadow-md">
      <div className="flex gap-x-4">
        <div className="avatar placeholder">
          <Avatar address={peerAddress} />
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-base-content">
            {peerAddress}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-base-content">
            <time dateTime={createdAt.toISOString()}>
              {createdAt.toLocaleTimeString()} {createdAt.toDateString()}
            </time>
          </p>
        </div>
      </div>
    </li>
  </Link>
);
