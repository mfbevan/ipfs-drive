import {
  chakra,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlayProps,
  ModalOverlay,
} from "@chakra-ui/react";

export const StyledModal = chakra(Modal, {
  baseStyle: {},
});

export const StyledModalContent = chakra(ModalContent, {
  baseStyle: {
    w: "full",
    border: "1px solid",
    borderColor: "border",
    bg: "itemBg",
    rounded: "2xl",
  },
});

export const StyledModalBody = chakra(ModalBody, {
  baseStyle: {
    alignItems: "center",
  },
});

export const StyledModalOverlay = (props: ModalOverlayProps) => (
  <ModalOverlay {...props} bg="modalOverlayBg" backdropFilter="blur(5px)" />
);
