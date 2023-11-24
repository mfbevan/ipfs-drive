import { useAddress } from "@thirdweb-dev/react";
import { DecodedMessage } from "@xmtp/react-sdk";

import { shortenString, toDateTimeString } from "@/lib";

export interface MessageHistoryItemProps {
  message: DecodedMessage;
  combine?: boolean;
}

export const MessageHistoryItem = ({
  message: { senderAddress, content, sent },
  combine = false,
}: MessageHistoryItemProps) => {
  const address = useAddress();
  const incoming = senderAddress !== address;

  return (
    <div className={`chat ${incoming ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-3xl"></span>
          </div>
        </div>
      </div>
      {!combine && (
        <div className="chat-header text-base-content">
          {shortenString(senderAddress)}{" "}
          <time className="text-xs text-base-content opacity-50">
            {toDateTimeString(sent)}
          </time>
        </div>
      )}
      <div className="chat-bubble">{content}</div>
      {!combine && (
        <div className="chat-footer text-base-content opacity-50">
          Delivered
        </div>
      )}
    </div>
  );
};
