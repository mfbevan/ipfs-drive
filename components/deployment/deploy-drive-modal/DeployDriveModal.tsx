import { AddIcon } from "@chakra-ui/icons";
import {
  chakra,
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

import { DeployDriveForm } from "./DeployDriveForm";

import { BaseIconButton } from "@/components";
import { useDriveDeploymentStore } from "@/lib";

export const DEPLOY_DRIVE_MODAL_ID = "deploy_drive_modal";

export interface DeployDriveModalProps {}

export const DeployDriveModal = ({}: DeployDriveModalProps) => {
  const { isOpen, onClose, onOpen } = useDriveDeploymentStore();

  return (
    <>
      <BaseIconButton
        icon={<AddIcon />}
        aria-label="deploy-new-drive"
        onClick={onOpen}
        colorScheme="accent"
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
