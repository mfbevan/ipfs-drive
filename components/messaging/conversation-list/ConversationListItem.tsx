import { CachedConversation, Conversation } from "@xmtp/react-sdk";
import Link from "next/link";

export interface ConversationListItemProps {
  conversation: Conversation | CachedConversation;
}

export const ConversationListItem = ({
  conversation: { peerAddress, createdAt, topic },
}: ConversationListItemProps) => (
  <Link href={`/messages/${peerAddress}`} key={topic}>
    <li className="flex justify-between gap-x-6 p-2 bg-base-200 rounded">
      <div className="flex gap-x-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-3xl"></span>
          </div>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {peerAddress}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            <time dateTime={createdAt.toISOString()}>
              {createdAt.toLocaleTimeString()} {createdAt.toDateString()}
            </time>
          </p>
        </div>
      </div>
    </li>
  </Link>
);
