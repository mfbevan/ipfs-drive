import { Flex, chakra, Text } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { DecodedMessage } from "@xmtp/react-sdk";
import { Fragment } from "react";

import { Avatar } from "@/components";
import { shortenString, toDateTimeString } from "@/lib";

export interface MessageHistoryItemProps {
  message: DecodedMessage;
  combine?: boolean;
}

export const MessageHistoryItem = ({
  message: { senderAddress, content, sent },
}: MessageHistoryItemProps) => {
  const address = useAddress();
  const incoming = senderAddress !== address;

  return (
    <ChatRowContainer flexDirection={incoming ? "row" : "row-reverse"}>
      <Flex pb="20px">
        <Avatar address={senderAddress} size="sm" />
      </Flex>

      <Flex flexDirection="column" gap="2px" align="flex-end">
        <AboveChatBubble>
          <strong>{shortenString(senderAddress)}</strong>
          <>{toDateTimeString(sent)}</>
        </AboveChatBubble>
        <ChatBubble>{content}</ChatBubble>
        <BelowChatBubble>Delivered</BelowChatBubble>
      </Flex>
    </ChatRowContainer>
  );
};

const ChatRowContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "row",
    gap: "10px",
    alignItems: "flex-end",
  },
});

const ChatBubble = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    borderRadius: "10px",
    width: "fit-content",
    color: "white",
    bg: "accent.500",
  },
});

const AboveChatBubble = chakra(Text, {
  baseStyle: {
    opacity: "50%",
    fontSize: "10px",
    gap: "10px",
  },
});

const BelowChatBubble = chakra(Text, {
  baseStyle: {
    opacity: "50%",
    fontSize: "10px",
  },
});
