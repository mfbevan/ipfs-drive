import { DecodedMessage } from "@xmtp/react-sdk";

import { toDateTimeString } from "@/lib";

export interface MessageHistoryItemProps {
  message: DecodedMessage;
  incoming: boolean;
}

export const MessageHistoryItem = ({
  message: { senderAddress, content, sent },
  incoming,
}: MessageHistoryItemProps) => (
  <div className={`chat ${incoming ? "chat-start" : "chat-end"}`}>
    <div className="chat-image avatar">
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-12">
          <span className="text-3xl"></span>
        </div>
      </div>
    </div>
    <div className="chat-header">
      {senderAddress}
      <time className="text-xs opacity-50">{toDateTimeString(sent)}</time>
    </div>
    <div className="chat-bubble">{content}</div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>
);
