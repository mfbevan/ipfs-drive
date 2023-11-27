import {
  chakra,
  useColorModeValue,
  Avatar as ChakraAvatar,
} from "@chakra-ui/react";

import { AvatarService } from "@/lib";
export interface AvatarProps {
  address: string;
  size?: string;
}

export const Avatar = ({ address, size = "lg" }: AvatarProps) => {
  const src = AvatarService.getAvatarUrl(address);

  return (
    <StyledAvatar
      bg={useColorModeValue("gray.200", "gray.600")}
      size={size}
      src={src}
      aria-label={`avatar-${address}`}
    />
  );
};

const StyledAvatar = chakra(ChakraAvatar, {
  baseStyle: {
    zIndex: 4,
    boxShadow: "base",
  },
});
