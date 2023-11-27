import { chakra, FormLabel } from "@chakra-ui/react";

export const StyledFormLabel = chakra(FormLabel, {
  baseStyle: {
    fontSize: "0.7rem",
    mb: "4px",
    ml: "2px",
    mr: "0px",
    userSelect: "none",
  },
});
