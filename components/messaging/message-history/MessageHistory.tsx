import { DecodedMessage } from "@xmtp/react-sdk";

import { MessageHistoryItem } from ".";

export interface MessageHistoryProps {
  messages: DecodedMessage[];
}

export const MessageHistory = ({ messages }: MessageHistoryProps) => (
  <div className="flex-col px-2">
    {messages.map((message, index) => {
      // const combine =
      //   index < messages.length - 1 &&
      //   message.senderAddress === messages[index + 1].senderAddress;
      const combine = false;

      return (
        <MessageHistoryItem key={index} message={message} combine={combine} />
      );
    })}
  </div>
);
