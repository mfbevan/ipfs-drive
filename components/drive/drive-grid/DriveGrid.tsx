import { SimpleGrid } from "@chakra-ui/react";

import { DriveGridItem } from "./DriveGridItem";

import { DriveFile } from "@/lib";

export interface DriveGridProps {
  files: DriveFile[];
}

export const DriveGrid = ({ files }: DriveGridProps) => (
  <SimpleGrid
    columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
    spacing="20px"
    w="full"
  >
    {files.map((file, index) => (
      <DriveGridItem key={index.toFixed()} file={file} />
    ))}
  </SimpleGrid>
);
