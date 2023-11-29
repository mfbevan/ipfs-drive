import { Menu, MenuButton, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { FaKey } from "react-icons/fa";

import {
  BaseIconButton,
  StyledMenuItem,
  StyledMenuList,
  XmptClientContext,
} from "@/components";
import { XMPT_ENV, shortenString } from "@/lib";

export const XmptKeysButton = () => {
  const { client } = useContext(XmptClientContext);
  const environment = XMPT_ENV;
  const key = client?.address || "";

  return (
    <Menu>
      <Tooltip label="Xmpt Keys" aria-label="xmpt-keys">
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
      </Tooltip>
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
