import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  chakra,
} from "@chakra-ui/react";
import { Chain } from "@thirdweb-dev/chains";
import { useChainId, useSwitchChain } from "@thirdweb-dev/react";
import { toast } from "react-toastify";

import { NetworkIcon } from "@/components";
import { extractReadableError } from "@/lib";

export interface ChooseNetworkProps {
  networks: Chain[];
}

export const ChooseNetwork = ({ networks }: ChooseNetworkProps) => {
  const switchChain = useSwitchChain();
  const chainId = useChainId();
  const currentChain = networks.find((network) => network.chainId === chainId);

  const onSwitchChain = async (chainId: number) => {
    try {
      await switchChain(chainId);
    } catch (error: any) {
      toast.error(extractReadableError(error.message));
    }
  };

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row" w="100%" justifyContent="space-between">
        <StyledFormLabel>Network</StyledFormLabel>
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="accent"
        >
          <Flex alignItems="center" w="100%" justifyContent="space-between">
            {currentChain ? <>{currentChain?.name}</> : "Invalid Network"}
          </Flex>
        </MenuButton>
        <StyledMenuList>
          {networks.map((network) => (
            <StyledMenuItem
              key={network.name}
              onClick={() => onSwitchChain(network.chainId)}
            >
              <Flex alignItems="center" w="100%" justifyContent="space-between">
                {network.name}
                <NetworkIcon network={network.chainId} />
              </Flex>
            </StyledMenuItem>
          ))}
        </StyledMenuList>
      </Menu>
    </Flex>
  );
};

const StyledFormLabel = chakra(FormLabel, {
  baseStyle: {
    fontSize: "0.7rem",
    mb: "4px",
    ml: "2px",
  },
});

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
