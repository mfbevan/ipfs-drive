import { chakra, MenuList, MenuItem } from "@chakra-ui/react";

export const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    rounded: "xl",
    p: "5px",
    gap: "2px",
    bg: "itemBg",
  },
});

export const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    rounded: "xl",
    fontSize: "sm",
    _hover: {
      boxShadow: "inner",
      bg: "itemOffsetBg",
    },
    bg: "transparent",
  },
});
