import { Box, chakra } from "@chakra-ui/react";

import { useColorModeUI } from "../../hooks";

import { BaseIconButton } from "@/components";

/**
 * Toggle the current light/dark mode color settings
 */
export const DarkModeButton = () => {
  const { toggleColorMode, icon, colorMode } = useColorModeUI();

  return (
    <BaseIconButton
      colorScheme="accent"
      icon={icon}
      aria-label="connect-wallet"
      label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
      size="xs"
      boxSize="40px"
      rounded="xl"
      onClick={toggleColorMode}
    />
  );
};

export const AbsoluteButtonContainer = chakra(Box, {
  baseStyle: {
    position: "absolute",
    right: { base: "10px", md: "40px" },
    top: { base: "5px", md: "20px" },
  },
});
