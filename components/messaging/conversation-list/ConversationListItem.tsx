import { Flex, Text, chakra } from "@chakra-ui/react";
import { CachedConversation, Conversation } from "@xmtp/react-sdk";
import Link from "next/link";

import { Avatar } from "@/components";
import { BaseContainerHover } from "@/components/theme/variants/Containers";
import { shortenString, toDateTimeString } from "@/lib";

export interface ConversationListItemProps {
  conversation: Conversation | CachedConversation;
}

export const ConversationListItem = ({
  conversation: { peerAddress, createdAt, topic },
}: ConversationListItemProps) => (
  <Link href={`/messages/${peerAddress}`} key={topic}>
    <CardContainer>
      <Avatar address={peerAddress} size="md" />
      <Flex flexDirection="column" gap="5px">
        <Address>{shortenString(peerAddress)}</Address>
        <Time>{toDateTimeString(createdAt)}</Time>
      </Flex>
    </CardContainer>
  </Link>
);

const CardContainer = chakra(BaseContainerHover, {
  baseStyle: {
    justifyContent: "flex-start",
    gap: "10px",
  },
});

const Address = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    fontWeight: "semibold",
  },
});

const Time = chakra(Text, {
  baseStyle: {
    fontSize: "xs",
    opacity: 0.7,
  },
});
