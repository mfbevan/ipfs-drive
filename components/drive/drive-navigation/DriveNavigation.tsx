import { Flex, chakra } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";

import { DriveSelect } from "..";

import { DeployDriveModal } from "@/components/deployment";
import { useCurrentDrive } from "@/components/hooks/use-current-drive";
import { trpc } from "@/utils";

export interface DriveNavigationProps {}

export const DriveNavigation = ({}: DriveNavigationProps) => {
  const address = useAddress() ?? "";
  const { currentDrive } = useCurrentDrive();

  const { data } = trpc.drive.getDrivesForAddress.useQuery({
    address,
  });
  const drives = data?.drives ?? [];

  return (
    <NavigationContainer>
      <DeployDriveModal />
      <DriveSelect drives={drives} currentDrive={currentDrive} />
    </NavigationContainer>
  );
};

const NavigationContainer = chakra(Flex, {
  baseStyle: {
    position: "relative",
    boxShadow: "base",
    w: "full",
    border: "1px solid",
    borderColor: "border",
    rounded: "xl",
    p: "10px",
    bg: "itemBg",
    gap: "10px",
    _hover: {
      boxShadow: "md",
    },
  },
});
