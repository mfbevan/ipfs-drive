import { Flex, chakra } from "@chakra-ui/react";

export const BaseContainer = chakra(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "center",
    rounded: "xl",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "border",
    p: "10px",
    bg: "itemBg",
  },
});

export const BaseContainerHover = chakra(BaseContainer, {
  baseStyle: {
    cursor: "pointer",
    _hover: {
      bg: "itemOffsetBg",
    },
  },
});
