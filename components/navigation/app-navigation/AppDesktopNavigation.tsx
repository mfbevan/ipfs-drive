import { Box, chakra, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { usePath } from "../../hooks";
import { nexethLogoTransparent } from "../../images";
import { VersionStatus } from "../../tags";

import { StatefulConnectButton } from "@/components";
import { NavigationItem } from "@/lib";

export interface AppDesktopNavigationProps {
  navigationItems?: NavigationItem[];
  additionalNavigation?: ReactNode;
  withConnection?: boolean;
}

export const AppDesktopNavigation = ({
  navigationItems,
  additionalNavigation,
  withConnection,
}: AppDesktopNavigationProps) => {
  const { basePath, path } = usePath();

  return (
    <>
      <Link href="/">
        <Image
          src={nexethLogoTransparent}
          alt="nexeth-logo"
          height="40"
          width="40"
        />
      </Link>
      {navigationItems?.map((item) => {
        const selected =
          item.href && item.href !== "/"
            ? path.startsWith(item.href)
            : item.label === basePath;

        return (
          <Flex key={item.label} flexDirection="column">
            <Link href={item.href ?? "#"}>
              <NavigationItem>{item.label}</NavigationItem>
            </Link>
            <Underline w={selected ? "50px" : "0px"} />
          </Flex>
        );
      })}

      <Spacer />
      <VersionStatus
        header="Early Version Disclaimer"
        text="Click for more information."
        url="/docs"
      />
      {withConnection && <StatefulConnectButton />}
      {additionalNavigation}
    </>
  );
};

const NavigationItem = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    _hover: {
      bg: "itemOffsetBg",
      rounded: "md",
      boxShadow: "inner",
    },
    py: "5px",
    px: "10px",
    textAlign: "center",
  },
});

const Underline = chakra(Box, {
  baseStyle: {
    bg: "accent.400",
    transition: "width 0.3s ease",
    h: "2px",
    mx: "auto",
  },
});
