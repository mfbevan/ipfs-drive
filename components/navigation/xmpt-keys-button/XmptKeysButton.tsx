import { chakra, MenuList, MenuItem, Menu, MenuButton } from "@chakra-ui/react";
import { useContext } from "react";
import { FaKey } from "react-icons/fa";

import { BaseIconButton, XmptClientContext } from "@/components";
import { XMPT_ENV, shortenString } from "@/lib";

export const XmptKeysButton = () => {
  const { client } = useContext(XmptClientContext);
  const environment = XMPT_ENV;
  const key = client?.address || "";

  return (
    <Menu>
      <MenuButton>
        <BaseIconButton
          colorScheme="accent"
          icon={<FaKey />}
          aria-label="connect-wallet"
          label="Wallet"
          size="xs"
          boxSize="40px"
          rounded="xl"
        />
      </MenuButton>
      <StyledMenuList>
        <StyledMenuItem isDisabled>
          {"XMPT Environment: "}
          <strong>{environment}</strong>
        </StyledMenuItem>
        <StyledMenuItem isDisabled>
          {"XMPT Key: "}
          <strong>{shortenString(key)}</strong>
        </StyledMenuItem>
      </StyledMenuList>
    </Menu>
  );
};

const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    rounded: "xl",
    p: "5px",
    gap: "2px",
    bg: "itemBg",
  },
});

const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    rounded: "xl",
    fontSize: "sm",
    _hover: {
      boxShadow: "inner",
      bg: "itemOffsetBg",
    },
    bg: "transparent",
  },
});
