import {
  chakra,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsDatabaseAdd } from "react-icons/bs";

import { DeployDriveForm } from "./DeployDriveForm";

import { BaseIconButton } from "@/components";
import { useDriveDeploymentStore } from "@/lib";

export interface DeployDriveModalProps {}

export const DeployDriveModal = ({}: DeployDriveModalProps) => {
  const { isOpen, onClose, onOpen } = useDriveDeploymentStore();

  return (
    <>
      <BaseIconButton
        icon={<BsDatabaseAdd />}
        aria-label="deploy-new-drive"
        onClick={onOpen}
        colorScheme="accent"
        label="New Drive"
      />

      <StyledModal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <StyledModal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
          <ModalOverlay bg="modalOverlayBg" backdropFilter="blur(5px)" />
          <StyledModalContent>
            <ModalHeader>
              New Drive
              <ModalCloseButton onClick={onClose} />
            </ModalHeader>

            <StyledModalBody>
              <DeployDriveForm />
            </StyledModalBody>
          </StyledModalContent>
        </StyledModal>
      </StyledModal>
    </>
  );
};

const StyledModal = chakra(Modal, {
  baseStyle: {},
});

const StyledModalContent = chakra(ModalContent, {
  baseStyle: {
    w: "full",
    border: "1px solid",
    borderColor: "border",
    bg: "itemBg",
    rounded: "2xl",
  },
});

const StyledModalBody = chakra(ModalBody, {
  baseStyle: {
    alignItems: "center",
  },
});
