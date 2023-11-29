import { Flex, Text, chakra } from "@chakra-ui/react";

import {
  StyledModal,
  StyledModalOverlay,
  StyledModalContent,
  StyledModalBody,
  StyledModalHeader,
  StatefulConnectButton,
  useSessionUser,
  DarkModeButton,
} from "..";

import { XMPT_ENV } from "@/lib";

export interface ConnectModalProps {}

export const ConnectModal = ({}: ConnectModalProps) => {
  const { isConnected } = useSessionUser();

  return (
    <StyledModal
      isOpen={!isConnected}
      onClose={() => {}}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size="sm"
      isCentered
    >
      <StyledModalOverlay />
      <StyledModalContent>
        <StyledModalHeader>Connect</StyledModalHeader>
        <StyledModalBody>
          <Flex flexDirection="column" gap="30px" pb="20px">
            <InformationText>
              Welcome to{" "}
              <chakra.span color="accent.500">Nexeth Drive</chakra.span>.
              Connect your wallet to get started.
            </InformationText>

            <Flex flexDirection="column" gap="10px">
              <Flex gap="10px">
                <Flex flexDirection="column" w="full">
                  <StatefulConnectButton />
                </Flex>
                <Flex flexDirection="column">
                  <DarkModeButton />
                </Flex>
              </Flex>
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
