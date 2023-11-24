import { DecodedMessage } from "@xmtp/react-sdk";

import { MessageHistoryItem } from ".";

export interface MessageHistoryProps {
  messages: DecodedMessage[];
}

export const MessageHistory = ({ messages }: MessageHistoryProps) => (
  <div className="flex-col">
    {messages.map((message, index) => (
      <MessageHistoryItem
        key={index}
        message={message}
        incoming={index % 2 === 0}
      />
    ))}
  </div>
);
