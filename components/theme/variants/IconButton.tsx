import { ComponentStyleConfig } from "@chakra-ui/react";

export const IconButton: ComponentStyleConfig = {
  variants: {
    black: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "gray.800",
        _disabled: { bg: "gray.300" },
      },
      _selected: {
        bg: "gray.500",
      },
    },
    white: {
      bg: "white",
      color: "black",
      _hover: {
        bg: "gray.100",
        _disabled: { bg: "gray.300" },
      },
      _selected: {
        bg: "gray.500",
      },
    },
    standard: {
      bg: "inverseItemBg",
      color: "itemBg",
      _hover: {
        bg: "inverseItemOffsetBg",
        _disabled: { bg: "gray.300" },
      },
      _selected: {
        bg: "gray.500",
      },
    },
  },
};
