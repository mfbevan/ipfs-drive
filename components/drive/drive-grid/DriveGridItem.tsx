import { Flex, Text, chakra } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

import { DriveFile } from "@/lib";

export interface DriveGridItemProps {
  file: DriveFile;
}

export const DriveGridItem = ({
  file: { content, metadata },
}: DriveGridItemProps) => (
  <GridItemContainer>
    <MediaRenderer src={content} height="180px" />
    <FileName>{metadata.name}</FileName>
  </GridItemContainer>
);

const GridItemContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    rounded: "xl",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "border",
    p: "10px",
    bg: "itemBg",
  },
});

const FileName = chakra(Text, {
  baseStyle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    pt: "5px",
  },
});
