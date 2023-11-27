import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";

export const useColorModeUI = () => {
  const { colorMode, ...colorModeReturn } = useColorMode();

  const { icon, colorModeText } = useMemo(() => {
    if (colorMode === "light") {
      return {
        icon: <MoonIcon />,
        colorModeText: "Dark Mode",
      };
    }
    return {
      icon: <SunIcon />,
      colorModeText: "Light Mode",
    };
  }, [colorMode]);

  return {
    colorMode,
    colorModeText,
    icon,
    ...colorModeReturn,
  };
};
