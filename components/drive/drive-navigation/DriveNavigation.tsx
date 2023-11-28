import { RepeatIcon } from "@chakra-ui/icons";
import { Divider, Flex, Skeleton, chakra } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { BsGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import { DriveSelect } from "..";

import { BaseIconButton, FormInput, useDriveList } from "@/components";
import { DeployDriveModal } from "@/components/deployment";
import { useCurrentDrive } from "@/components/hooks/use-current-drive";
import { useDriveStore } from "@/lib/stores/drive-store";

export interface DriveNavigationProps {}

export const DriveNavigation = ({}: DriveNavigationProps) => {
  const { fileDisplayMode, setFileDisplayMode, search, setSearch } =
    useDriveStore();
  const address = useAddress();
  const { currentDrive } = useCurrentDrive();
  const { drives, isFetched, isLoading, isFetching, refetch } = useDriveList(
    address ?? ""
  );

  if (!isFetched || isLoading) {
    return (
      <NavigationContainer>
        <Flex flex={1} gap="10px">
          <ButtonSkeleton />
          <ButtonSkeleton />
          <SelectSkeleton />
          <DriveDivider orientation="vertical" />
        </Flex>
        <Flex flex={3} gap="10px">
          <ButtonSkeleton w="full" />
          <Flex gap="10px">
            <ButtonSkeleton />
            <ButtonSkeleton />
          </Flex>
        </Flex>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Flex flex={1} gap="10px">
        <DeployDriveModal />
        <BaseIconButton
          icon={<RepeatIcon />}
          isLoading={isFetching}
          aria-label="refetch-drive-list"
          colorScheme="accent"
          onClick={() => refetch()}
          label="Refetch Drives"
        />
        <DriveSelect drives={drives} currentDrive={currentDrive} />
        <DriveDivider orientation="vertical" />
      </Flex>

      <Flex flex={3} gap="10px">
        <FormInput
          value={search}
          // @ts-ignore -- value does exist on target
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search"
          rounded="xl"
          isDisabled
          w="full"
        />

        <BaseIconButton
          icon={<FaThList />}
          aria-label="drive-display-list"
          colorScheme={fileDisplayMode === "list" ? "accent" : "gray"}
          onClick={() => setFileDisplayMode("list")}
          label="List View"
        />

        <BaseIconButton
          icon={<BsGridFill />}
          aria-label="drive-display-grid"
          colorScheme={fileDisplayMode === "grid" ? "accent" : "gray"}
          onClick={() => setFileDisplayMode("grid")}
          label="Grid View"
        />
      </Flex>
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
    flexDirection: {
      base: "column",
      md: "row",
    },
  },
});

const ButtonSkeleton = chakra(Skeleton, {
  baseStyle: {
    w: "40px",
    h: "40px",
    rounded: "xl",
  },
});

const SelectSkeleton = chakra(Skeleton, {
  baseStyle: {
    w: "160px",
    h: "40px",
    rounded: "xl",
  },
});

const DriveDivider = chakra(Divider, {
  baseStyle: {
    h: "40px",
    display: { base: "none", md: "block" },
  },
});
