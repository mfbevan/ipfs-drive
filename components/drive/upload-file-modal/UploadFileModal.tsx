import { Button, ModalHeader, ModalCloseButton } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

import { UploadFileForm } from "./UploadFileForm";

import {
  BaseIconButton,
  StyledModal,
  StyledModalOverlay,
  StyledModalContent,
  StyledModalBody,
} from "@/components";
import { useUploadFileStore } from "@/lib";

export interface UploadFileModal {
  icon?: boolean;
  drive: string;
  chainId: number;
}

export const UploadFileModal = ({ icon, drive, chainId }: UploadFileModal) => {
  const { isOpen, onClose, onOpen } = useUploadFileStore();

  return (
    <>
      {icon ? (
        <BaseIconButton
          icon={<FaUpload />}
          aria-label="upload-file"
          onClick={onOpen}
          colorScheme="accent"
          label="Upload File"
        />
      ) : (
        <Button rightIcon={<FaUpload />} onClick={onOpen}>
          Upload
        </Button>
      )}

      <StyledModal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <StyledModal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
          <StyledModalOverlay />
          <StyledModalContent>
            <ModalHeader>
              Upload File
              <ModalCloseButton onClick={onClose} />
            </ModalHeader>

            <StyledModalBody>
              <UploadFileForm drive={drive} chainId={chainId} />
            </StyledModalBody>
          </StyledModalContent>
        </StyledModal>
      </StyledModal>
    </>
  );
};
