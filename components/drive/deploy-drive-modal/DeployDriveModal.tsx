import { ModalHeader, ModalCloseButton } from "@chakra-ui/react";
import { BsDatabaseAdd } from "react-icons/bs";

import { DeployDriveForm } from "./DeployDriveForm";

import {
  BaseIconButton,
  StyledModal,
  StyledModalBody,
  StyledModalContent,
  StyledModalOverlay,
} from "@/components";
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
          <StyledModalOverlay />
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
