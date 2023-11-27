import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  chakra,
  Text,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef } from "react";

import {
  nexethLogoTransparent,
  useNexethBannerTransparent,
} from "../../images";

import { StatefulConnectButton } from "@/components";
import { NavigationItem } from "@/lib";

export interface AppMobileNavigationProps {
  navigationItems?: NavigationItem[];
  additionalNavigation?: ReactNode;
  withConnection?: boolean;
}

export const AppMobileNavigation = ({
  navigationItems,
  additionalNavigation,
  withConnection,
}: AppMobileNavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <>
        <IconButton
          aria-label="Navigation Menu"
          ref={btnRef}
          colorScheme="accent"
          onClick={onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        >
          Open
        </IconButton>
        <Spacer />
        <Link href="/">
          <Image
            src={nexethLogoTransparent}
            alt="nexeth-logo"
            height="40"
            width="40"
          />
        </Link>
        <Spacer />
        {withConnection && <StatefulConnectButton />}
        {additionalNavigation}
      </>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src={useNexethBannerTransparent()}
              alt="nexeth-logo"
              height="40"
              width="100"
            />
          </DrawerHeader>

          <DrawerBody>
            {navigationItems?.map((item) => (
              <Link href={item.href ?? "#"} key={item.label}>
                <NavigationItem>{item.label}</NavigationItem>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavigationItem = chakra(Text, {
  baseStyle: {
    fontSize: "md",
    _hover: {
      bg: "itemOffsetBg",
      rounded: "md",
      boxShadow: "inner",
    },
    p: "10px",
    w: "full",
  },
});
