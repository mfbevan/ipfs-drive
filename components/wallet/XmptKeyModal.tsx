import { Button, Flex, Text, chakra } from "@chakra-ui/react";
import { Client } from "@xmtp/react-sdk";
import Link from "next/link";
import { useState } from "react";

import {
  StyledModal,
  StyledModalOverlay,
  StyledModalContent,
  StyledModalBody,
  StyledModalHeader,
} from "..";

import { XMPT_ENV } from "@/lib";

export interface XmptKeyModalProps {
  isOpen: boolean;
  connect: () => Promise<Client | undefined>;
}

const XMPT_DOCS_LINK =
  "https://xmtp.org/docs/concepts/key-generation-and-usage";

export const XmptKeyModal = ({ isOpen, connect }: XmptKeyModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onConnect = async () => {
    setIsLoading(true);
    try {
      await connect();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onClose={() => {}}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size="sm"
      isCentered
    >
      <StyledModalOverlay />
      <StyledModalContent>
        <StyledModalHeader>Generate Identity Keys</StyledModalHeader>
        <StyledModalBody>
          <Flex flexDirection="column" gap="30px" pb="20px">
            <InformationText>
              To use Nexeth you need to generate a set of XMPT Identity Keys.
              You will be able to use these keys to encrypt and decrypt your
              files as well as message other users.{" "}
              <Link href={XMPT_DOCS_LINK} target="_blank">
                <chakra.span color="accent.500" as="b">
                  Learn More
                </chakra.span>
              </Link>
            </InformationText>

            <Flex flexDirection="column" gap="10px">
              <Button
                isLoading={isLoading}
                colorScheme="accent"
                onClick={onConnect}
                w="full"
              >
                Generate Keys
              </Button>
              <EnvironmentText>
                You are currently connected to the {XMPT_ENV} environment
              </EnvironmentText>
            </Flex>
          </Flex>
        </StyledModalBody>
      </StyledModalContent>
    </StyledModal>
  );
};

const InformationText = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    textAlign: "center",
  },
});

const EnvironmentText = chakra(Text, {
  baseStyle: {
    fontSize: "xs",
    opacity: 0.5,
    textAlign: "center",
  },
});
