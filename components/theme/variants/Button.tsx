import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    boxShadow: "base",
    rounded: "xl",
    fontWeight: 500,
  },
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
    inverseStandard: {
      bg: "itemBg",
      color: "inverseItemBg",
      _hover: {
        bg: "itemOffsetBg",
        _disabled: { bg: "gray.300" },
      },
      _selected: {
        bg: "gray.500",
      },
    },
  },
};
