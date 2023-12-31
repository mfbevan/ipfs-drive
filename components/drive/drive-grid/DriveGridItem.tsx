import { Text, chakra } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

import { BaseContainerHover } from "@/components/theme/variants/Containers";
import { DriveFile, useDriveStore } from "@/lib";

export interface DriveGridItemProps {
  file: DriveFile;
}

export const DriveGridItem = ({
  file: { content, metadata },
  file,
}: DriveGridItemProps) => {
  const { setSelectedFile } = useDriveStore();
  const onClick = () => setSelectedFile(file);

  return (
    <GridItemContainer onClick={onClick}>
      <MediaRenderer src={content} height="180px" />
      <FileName>{metadata.name}</FileName>
    </GridItemContainer>
  );
};

const GridItemContainer = chakra(BaseContainerHover, {
  baseStyle: {
    flexDirection: "column",
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
