import { chakra, Text } from "@chakra-ui/react";

export const PageTitleText = chakra(Text, {
  baseStyle: {
    fontSize: "3xl",
    textAlign: "center",
    fontWeight: 800,
    mx: "auto",
    py: "10px",
  },
});

export const PageDescriptionText = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    color: "gray.500",
  },
});
