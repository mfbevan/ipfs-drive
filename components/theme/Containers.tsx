import { chakra, Flex } from "@chakra-ui/react";

export const PageContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    minH: "100vh",
    maxW: "4xl",
    mx: "auto",
    alignItems: "center",
  },
});

export const PostSectionContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    mx: "auto",
    maxW: "2xl",
    w: "full",
    px: "10px",
    py: "20px",
  },
});

export const CardContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    borderColor: "cardOutline",
    p: "20px",
    rounded: "2xl",
    boxShadow: "base",
    bg: "nodeContentBg",
  },
});
