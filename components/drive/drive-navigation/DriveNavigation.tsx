import { Flex, chakra } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { BsGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import { DriveSelect } from "..";

import { BaseIconButton, FormInput } from "@/components";
import { DeployDriveModal } from "@/components/deployment";
import { useCurrentDrive } from "@/components/hooks/use-current-drive";
import { useDriveStore } from "@/lib/stores/drive-store";
import { trpc } from "@/utils";

export interface DriveNavigationProps {}

export const DriveNavigation = ({}: DriveNavigationProps) => {
  const { fileDisplayMode, setFileDisplayMode, search, setSearch } =
    useDriveStore();
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
      <FormInput
        value={search}
        // @ts-ignore -- value does exist on target
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search"
        rounded="xl"
      />

      <BaseIconButton
        icon={<FaThList />}
        aria-label="drive-display-list"
        colorScheme={fileDisplayMode === "list" ? "accent" : "gray"}
        onClick={() => setFileDisplayMode("list")}
      />

      <BaseIconButton
        icon={<BsGridFill />}
        aria-label="drive-display-grid"
        colorScheme={fileDisplayMode === "grid" ? "accent" : "gray"}
        onClick={() => setFileDisplayMode("grid")}
      />
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
