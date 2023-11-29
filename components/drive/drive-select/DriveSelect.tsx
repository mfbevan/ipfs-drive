import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  LightMode,
  Menu,
  MenuButton,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { NetworkIcon, StyledMenuItem, StyledMenuList } from "@/components";
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

  const onDriveSelect = async (address: string) => {
    const newDrive = drives.find((drive) => drive.address === address);
    router.push(`/drive/${newDrive?.network}/${address}`);
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
