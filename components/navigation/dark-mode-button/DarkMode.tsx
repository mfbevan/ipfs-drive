import { Button, Box, chakra } from "@chakra-ui/react";

import { useColorModeUI } from "../../hooks";

/**
 * Toggle the current light/dark mode color settings
 */
export const DarkModeButton = () => {
  const { toggleColorMode, icon } = useColorModeUI();

  return (
    <StyledButton variant="inverseStandard" onClick={toggleColorMode}>
      {icon}
    </StyledButton>
  );
};

const StyledButton = chakra(Button, {
  baseStyle: {
    boxSize: "40px",
    boxShadow: "base",
  },
});

export const AbsoluteButtonContainer = chakra(Box, {
  baseStyle: {
    position: "absolute",
    right: { base: "10px", md: "40px" },
    top: { base: "5px", md: "20px" },
  },
});
