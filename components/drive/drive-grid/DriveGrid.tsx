import {
  SimpleGrid,
  Skeleton,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

import { DriveGridItem } from "./DriveGridItem";

import { DriveFile } from "@/lib";

export interface DriveGridProps {
  files: DriveFile[];
  isLoading?: boolean;
}

export const DriveGrid = ({ files, isLoading }: DriveGridProps) => {
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 });

  if (isLoading) {
    return (
      <SimpleGrid columns={columns} spacing="20px" w="full">
        {Array.from({ length: columns ?? 1 }, (_, index) => (
          <Skeleton h="180px" key={index.toFixed()} rounded="xl" />
        ))}
      </SimpleGrid>
    );
  }

  return (
    <StyledGrid columns={columns} spacing="20px" w="full">
      {files.map((file, index) => (
        <DriveGridItem key={index.toFixed()} file={file} />
      ))}
    </StyledGrid>
  );
};

const StyledGrid = chakra(SimpleGrid, {
  baseStyle: {
    spacing: "20px",
    w: "full",
  },
});
