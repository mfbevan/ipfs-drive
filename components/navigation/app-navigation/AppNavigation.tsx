import { Flex, chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

import { useIsMobile } from "../../hooks/use-is-mobile";

import { AppDesktopNavigation } from "./AppDesktopNavigation";
import { AppMobileNavigation } from "./AppMobileNavigation";

import { NavigationItem } from "@/lib";

export interface AppNavigationProps {
  navigationItems?: NavigationItem[];
  additionalNavigation?: ReactNode;
  withConnection?: boolean;
}

export const AppNavigation = ({
  navigationItems,
  additionalNavigation,
  withConnection = true,
}: AppNavigationProps) => {
  const isMobile = useIsMobile();

  return (
    <NavbarContainer>
      {isMobile ? (
        <AppMobileNavigation
          navigationItems={navigationItems}
          additionalNavigation={additionalNavigation}
          withConnection={withConnection}
        />
      ) : (
        <AppDesktopNavigation
          navigationItems={navigationItems}
          additionalNavigation={additionalNavigation}
          withConnection={withConnection}
        />
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = chakra(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    h: "60px",
    px: "10px",
    border: "1px solid",
    borderColor: "border",
    roundedBottom: "2xl",
    boxShadow: "base",
    position: "fixed",
    w: "full",
    zIndex: "999",
    bg: "itemBg",
    gap: "10px",
  },
});
