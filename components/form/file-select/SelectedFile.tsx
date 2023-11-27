import { CloseIcon } from "@chakra-ui/icons";
import { Flex, chakra, Image, IconButton } from "@chakra-ui/react";

export interface SelectedFileProps {
  file: File;
  onRemove: () => void;
}

export const SelectedFile = ({ file, onRemove }: SelectedFileProps) => (
  <SelectedFileContainer>
    <Image
      src={URL.createObjectURL(file)}
      boxSize="60px"
      rounded="lg"
      mr="5px"
      alt="selected-file"
    />
    <IconButton
      size="15px"
      rounded="full"
      icon={<CloseIcon boxSize="10px" />}
      aria-label="deselect-file"
      onClick={onRemove}
      position="absolute"
      top="0"
      right="0"
    />
  </SelectedFileContainer>
);

const SelectedFileContainer = chakra(Flex, {
  baseStyle: {
    position: "relative",
    p: "3px",
  },
});
