import { useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export const useIsMobile = () => useBreakpointValue({ base: true, md: false });

export const useMobileOnly = (node: ReactNode) => {
  const isMobile = useIsMobile();
  return isMobile ? node : null;
};

export const useDesktopOnly = (node: ReactNode) => {
  const isMobile = useIsMobile();
  return isMobile ? null : node;
};
