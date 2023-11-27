import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { NetworkIcon } from "@/components";
import { Drive } from "@/lib";

export interface DriveSelectProps {
  drives: Drive[];
  currentDrive?: string;
}

export const DriveSelect = ({ drives, currentDrive }: DriveSelectProps) => {
  const router = useRouter();
  const fullCurrentDrive = drives.find(
    (drive) => drive.address === currentDrive
  );

  const onDriveSelect = (address: string) => {
    router.push(`/drive/${address}`);
  };

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row" w="100%" justifyContent="space-between"></Flex>
      <Menu>
        <LightMode>
          <Tooltip label="Select Drive" aria-label="select-drive">
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // variant="standard"
              colorScheme="accent"
            >
              <Flex alignItems="center" w="100%" justifyContent="space-between">
                {fullCurrentDrive ? (
                  <>{fullCurrentDrive?.name}://</>
                ) : (
                  "Select a Drive"
                )}
              </Flex>
            </MenuButton>
          </Tooltip>
        </LightMode>
        <StyledMenuList>
          {drives.map((drive) => (
            <StyledMenuItem
              key={drive.address}
              onClick={() => onDriveSelect(drive.address)}
            >
              <Flex alignItems="center" w="100%" justifyContent="space-between">
                {drive.name}
                <NetworkIcon network={drive.network} />
              </Flex>
            </StyledMenuItem>
          ))}
        </StyledMenuList>
      </Menu>
    </Flex>
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
